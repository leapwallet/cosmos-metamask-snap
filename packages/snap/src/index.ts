import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { BIP44CoinTypeNode, getBIP44AddressKeyDeriver } from '@metamask/key-tree';
import { panel, text, heading } from '@metamask/snaps-ui';
import {
  calculateFee,
  SigningStargateClient,
} from '@cosmjs/stargate';
import { OfflineDirectSigner } from '@cosmjs/proto-signing';
import { SignDoc, TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { getPublicKey as _Secp256k1getPublicKey, sign as Secp256k1Sign, Point } from '@noble/secp256k1';
import { bech32 } from 'bech32';
import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing";
import { SLIP10Node } from '@metamask/key-tree';
import { BigNumber } from 'bignumber.js';
import parser from './helpers/parser'


export namespace Secp256k1 {
  export function getPublicKey(privateKey: Uint8Array, compressed: boolean): Uint8Array {
    return _Secp256k1getPublicKey(privateKey, compressed);
  }
  export function sign(
    message: Uint8Array,
    privateKey: Uint8Array,
    options?: { canonical: boolean },
  ): Promise<Uint8Array> {
    return Secp256k1Sign(message, privateKey, {
      canonical: options?.canonical,
      extraEntropy: true,
      der: false,
    });
  }

  export function publicKeyConvert(publicKey: Uint8Array, compressed: boolean): Uint8Array {
    const pubKeyPoint = Point.fromHex(publicKey);
    return pubKeyPoint.toRawBytes(compressed);
  }
}



export type WalletOptions = {
  paths: string[];
  addressPrefix: string;
};

export type IHDKey = {
  derive: (path: string) => IChildKey;
  publicKey: Uint8Array | null;
  privateKey: Uint8Array | null;
};

export type IChildKey = {
  publicKey: Uint8Array | null;
  privateKey: Uint8Array | null;
  sign: (hash: Uint8Array) => Uint8Array;
};

export interface IBip32 {
  derivePath(key: IHDKey, path: string): IChildKey;
  fromSeed(seed: Uint8Array): IHDKey;
  sign(key: IChildKey, hash: Uint8Array): Uint8Array;
}

export type AminoMsg = {
  type: string;
  value: any;
};

export type Coin = {
  denom: string;
  amount: string;
};

export type StdFee = {
  readonly amount: readonly Coin[];
  readonly gas: string;
  readonly granter?: string;
};

export type StdSignDoc = {
  readonly chain_id: string;
  readonly account_number: string;
  readonly sequence: string;
  readonly fee: StdFee;
  readonly msgs: readonly AminoMsg[];
  readonly memo: string;
};

export function compressedPublicKey(publicKey: Uint8Array) {
  return base64js.fromByteArray(Secp256k1.publicKeyConvert(publicKey, true));
}

export function pubkeyToAddress(prefix: string, publicKey: Uint8Array) {
  return bech32.encode(prefix, bech32.toWords(ripemd160(sha256(compressedPublicKey(publicKey)))));
}

export async function generateWallet(mnemonic: string, options: WalletOptions) {

  const atomNodeJson = (await snap.request({
    method: 'snap_getBip44Entropy',
    params: {
      // // Must be specified exactly in the manifest
      // path: ['m', "44'", "118'"],
      // curve: 'secp256k1',
      coinType: 118
    },
  }) as unknown as BIP44CoinTypeNode);

  // throw new Error(JSON.stringify(atomNodeJson));

  const atomNode = await getBIP44AddressKeyDeriver(atomNodeJson) as unknown as IHDKey;

  const firstNode = await atomNode(0);

  return await DirectSecp256k1Wallet.fromKey(firstNode.privateKeyBytes, 'cosmos');
}

export function sortObject(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(sortObject);
  }
  const sortedKeys = Object.keys(obj).sort();
  const result: Record<string, any> = {};

  for (const key of sortedKeys) {
    result[key] = sortObject(obj[key]);
  }

  return result;
}

export function serializeStdSignDoc(signDoc: StdSignDoc) {
  const json = JSON.stringify(sortObject(signDoc));
  return new TextEncoder().encode(json);
}

export function serializeSignDoc(signDoc: SignDoc) {
  return SignDoc.encode(
    SignDoc.fromPartial({
      accountNumber: signDoc.accountNumber,
      authInfoBytes: signDoc.authInfoBytes,
      bodyBytes: signDoc.bodyBytes,
      chainId: signDoc.chainId,
    }),
  ).finish();
}

import * as base64js from 'base64-js';

export type Pubkey = {
  readonly type: string;
  readonly value: any;
};

export type StdSignature = {
  readonly pub_key: Pubkey;
  readonly signature: string;
};

export function encodeSecp256k1Signature(pubkey: Uint8Array, signature: Uint8Array): StdSignature {
  if (signature.length !== 64) {
    throw new Error(
      'Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.',
    );
  }

  return {
    pub_key: encodeSecp256k1Pubkey(pubkey),
    signature: base64js.fromByteArray(signature),
  };
}

export function encodeSecp256k1Pubkey(pubkey: Uint8Array): Pubkey {
  if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
    throw new Error('Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03');
  }
  return {
    type: 'tendermint/PubKeySecp256k1',
    value: base64js.fromByteArray(pubkey),
  };
}

export class Wallet {
  constructor(private wallet: IHDKey, private options: WalletOptions) {
    this.options = options;
    this.wallet = wallet;
  }

  public async signAmino(signerAddress: string, signDoc: StdSignDoc) {
    const accounts = this.getAccountsWithPrivKey();
    const account = accounts.find((account) => account.address === signerAddress);
    if (!account) {
      throw new Error('Signer address does not match wallet address');
    }
    if (!account.pubkey) {
      throw new Error('Unable to derive keypair');
    }
    const hash = sha256(serializeStdSignDoc(signDoc));
    const signature = account.childKey.sign(hash);

    return {
      signed: signDoc,
      signature: encodeSecp256k1Signature(account.pubkey, signature),
    };
  }

  async signDirect(signerAddress: string, signDoc: SignDoc) {
    const accounts = this.getAccountsWithPrivKey();
    const account = accounts.find((account) => account.address === signerAddress);
    if (!account) {
      throw new Error('Signer address does not match wallet address');
    }
    if (!account.pubkey || !account.childKey.privateKey) {
      throw new Error('Unable to derive keypair');
    }
    const hash = sha256(serializeSignDoc(signDoc));
    const signature = await Secp256k1.sign(hash, account.childKey.privateKey, { canonical: true });

    return {
      signed: signDoc,
      signature: encodeSecp256k1Signature(account.pubkey, signature),
    };
  }

  async getAccounts() {
    const privateKeys = await this.getAccountsWithPrivKey();
    return privateKeys.map((account) => {
      return {
        algo: 'secp256k1',
        address: account.address,
        pubkey: account.pubkey,
      };
    });
  }

  async getAccountsWithPrivKey() {
    let pk = {};
    try {
       pk = await this.wallet(0)
    }
    catch (e) {
      throw new Error(e)
      return []
    }
    // const childKeys = this.options.paths.map(async (path) => {
    //   return this.wallet.derive(path);
    // });

    return [pk].map((childKey) => {
      var enc = new TextEncoder();
      const x = enc.encode(childKey.publicKey);
      const publicKey = childKey.publicKey;
      const address = pubkeyToAddress(this.options.addressPrefix, x!);
      // throw new Error(`${JSON.stringify(pk)}, ${JSON.stringify(this.options)}, ${address}`);
      return {
        algo: 'secp256k1',
        address,
        pubkey: publicKey,
        childKey: childKey,
      };
    });
  }
}


/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      const confirmed =  await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([
            heading(`0.005 Atom Transaction`),
            text(parser.parse('Are you sure of sending **0.005 ATOM** to cosmos19vf5mfr40awvkefw69nl6p3mmlsnacmm28xyqh?')),
          ]),
        },
      });

      const inputAmountNumber = new BigNumber('0.0005');
      const normalizedAmount = inputAmountNumber.multipliedBy(10 ** 6)
        .toFixed(0, BigNumber.ROUND_DOWN);
      let txHash = ''
      if(confirmed) {
        try {
         txHash =  await signTx('cosmos19vf5mfr40awvkefw69nl6p3mmlsnacmm28xyqh', [{ amount: normalizedAmount, denom: 'uatom' }])
        }
        catch(e) {
          throw e;
        }
      }
      // throw new Error(`${JSON.stringify(txHash)}`);
      return txHash
    default:
      throw new Error('Method not found.');
  }
};

const signTx = async (toAddress:string, amount: Coin[]) => {
  const mnemonic = 'humble patch void reunion inside size sun crack grab key arrest wolf';
  const hdPath = `m/44'/118'/0'/0/0`;
let wallet = {}
 try {
  wallet = await generateWallet(mnemonic, { paths: [hdPath], addressPrefix: 'cosmos' }) as unknown as OfflineDirectSigner;
 }
 catch(e) {
    throw new Error(e);
 }
   
  const client = await SigningStargateClient.connectWithSigner("https://rpc.cosmos.directory/cosmoshub", wallet, {
    broadcastPollIntervalMs:  5_000,
  });

  let accounts = await wallet.getAccounts()
  
  const sendMsg = {
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: accounts[0].address,
      toAddress: toAddress,
      amount: [...amount],
    },
  };
  let fee :  StdFee | 'auto' | number = 'auto';
  let usedFee: StdFee;
  const memo =  'Test';
  if (fee === 'auto' || typeof fee === 'number') {
    try {
      const gasEstimation = await client.simulate(accounts[0].address, [sendMsg], memo)
      const multiplier = fee !== 'auto' ? fee : 1.3;
      if (!gasEstimation) {
        throw new Error(`unable to get gas estimate ${JSON.stringify(await wallet.getAccounts())}`);
      }
      usedFee = calculateFee(Math.round(gasEstimation * multiplier), '0.025uatom');
    }
    catch(e) {
      throw e;
      // throw new Error(`Unable to simulate Tx ${accounts[0].address}`);
    }
    
  } else {
    usedFee = fee;
  }


  const fetchAccountDetails = async (lcdEndpoint: string, address: string): Promise<any>  => {
    try {
      /**
       * Injective has different response than the rest of the
       * cosmos chains when querying the auth account endpoint
       * */
  
      const data = await (await fetch(`${lcdEndpoint}/cosmos/auth/v1beta1/accounts/${address}`)).json();
      const baseAccount = data.account.base_account
        ? data.account.base_account
        : data.account;
      return {
        address: baseAccount.address,
        accountNumber: baseAccount.account_number,
        sequence: baseAccount.sequence,
        pubKey: {
          type: baseAccount.pub_key ? baseAccount.pub_key['@type'] : '',
          key: baseAccount.pub_key ? baseAccount.pub_key.key : '',
        },
      } as any;
    } catch (e) {
      throw new Error((e as any).message);
    }
  }


  try {
    // const signedMsg = await client.sign(accounts[0].address, [sendMsg], usedFee, memo)
    const accountDetails = await fetchAccountDetails("https://rest.cosmos.directory/cosmoshub", accounts[0].address);
    // throw new Error(`${JSON.stringify(accountDetails)}`);
    const signedMsg = await client.sign(accounts[0].address, [sendMsg], usedFee, memo, {
        accountNumber: accountDetails.accountNumber, 
        chainId: 'cosmoshub-4', 
        sequence: accountDetails.sequence
    });

    const result = await client.broadcastTx(TxRaw.encode(signedMsg).finish())
    return result;
  }
  catch(e) {
    throw e
  }
  
}