/* eslint-disable jsdoc/require-param-description */
/* eslint-disable @typescript-eslint/no-parameter-properties */
/* eslint-disable jsdoc/require-description */
/* eslint-disable jsdoc/require-returns */

import * as secp from '@noble/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { bech32 } from 'bech32';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import {
  BIP44CoinTypeNode,
  getBIP44AddressKeyDeriver,
} from '@metamask/key-tree';

import * as base64js from 'base64-js';
import { StdSignDoc } from '@cosmjs/amino';

export type Pubkey = {
  readonly type: string;
  readonly value: any;
};

export type StdSignature = {
  readonly pub_key: Pubkey;
  readonly signature: string;
};

/**
 *
 * @param pubkey
 * @param signature
 */
export function encodeSecp256k1Signature(
  pubkey: Uint8Array,
  signature: Uint8Array,
): StdSignature {
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

/**
 *
 * @param pubkey
 */
export function encodeSecp256k1Pubkey(pubkey: Uint8Array): Pubkey {
  if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
    throw new Error(
      'Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03',
    );
  }
  return {
    type: 'tendermint/PubKeySecp256k1',
    value: base64js.fromByteArray(pubkey),
  };
}

/**
 *
 * @param obj
 */
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

/**
 *
 * @param signDoc
 */
export function serializeSignDoc(signDoc: SignDoc) {
  return SignDoc.encode(
    SignDoc.fromPartial({
      accountNumber: signDoc.accountNumber.toString(),
      authInfoBytes: signDoc.authInfoBytes,
      bodyBytes: signDoc.bodyBytes,
      chainId: signDoc.chainId,
    }),
  ).finish();
}

/**
 *
 * @param signDoc
 */
export function serializeStdSignDoc(signDoc: StdSignDoc) {
  const json = JSON.stringify(sortObject(signDoc));
  return new TextEncoder().encode(json);
}

/**
 *
 * @param publicKey
 * @param addressPrefix
 */
function pubkeyToAddress(publicKey: Uint8Array, addressPrefix: string) {
  const pubKeyHash = ripemd160(sha256(publicKey));
  return bech32.encode(addressPrefix, bech32.toWords(pubKeyHash));
}

export type WalletOptions = {
  addressPrefix: string;
  coinType: number;
};

export class Wallet {
  constructor(
    private privateKey: Uint8Array,
    private pubkey: Uint8Array,
    private address: string,
  ) {}

  static create(privateKey: string, addressPrefix: string) {
    const sanitizedPvtKey = privateKey.replace('0x', '');
    const pvtKeyBytes = Buffer.from(sanitizedPvtKey, 'hex');

    const publicKey = secp.getPublicKey(pvtKeyBytes, true);
    const pubAddress = pubkeyToAddress(publicKey, addressPrefix);
    return new Wallet(pvtKeyBytes, publicKey, pubAddress);
  }

  getAccounts() {
    return [
      {
        address: this.address,
        algo: 'secp256k1',
        pubkey: this.pubkey,
      },
    ];
  }

  async signDirect(signerAddress: string, signDoc: SignDoc) {
    const accounts = this.getAccounts();
    const account = accounts.find((acc) => acc.address === signerAddress);

    if (!account) {
      throw new Error('Signer address does not match wallet address');
    }
    const hash = sha256(serializeSignDoc(signDoc));
    const signature = await secp.sign(hash, this.privateKey, {
      canonical: true,
      extraEntropy: true,
      der: false,
    });

    return {
      signed: { ...signDoc, accountNumber: signDoc.accountNumber.toString() },
      signature: encodeSecp256k1Signature(account.pubkey, signature),
    };
  }

  async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc,
    options?: { extraEntropy: boolean },
  ) {
    const accounts = this.getAccounts();
    const account = accounts.find((acc) => acc.address === signerAddress);
    if (!account) {
      throw new Error('Signer address does not match wallet address');
    }

    if (!account.pubkey) {
      throw new Error('Unable to derive keypair');
    }
    const hash = sha256(serializeStdSignDoc(signDoc));
    const extraEntropy = options?.extraEntropy ? true : undefined;
    const signature = await secp.sign(hash, this.privateKey, {
      canonical: true,
      extraEntropy,
      der: false,
    });

    return {
      signed: signDoc,
      signature: encodeSecp256k1Signature(account.pubkey, signature),
    };
  }
}

/**
 *
 * @param options
 */
export async function generateWallet(options: WalletOptions): Promise<Wallet> {
  const atomNodeJson = (await snap.request({
    method: 'snap_getBip44Entropy',
    params: {
      coinType: options.coinType,
    },
  })) as unknown as BIP44CoinTypeNode;

  const addressKeyDeriver = await getBIP44AddressKeyDeriver(atomNodeJson);
  const addressKey0 = await addressKeyDeriver(0);

  if (addressKey0.privateKey) {
    return Wallet.create(addressKey0.privateKey, options.addressPrefix);
  }
  throw new Error(
    `Error in creating wallet for chain ${options.addressPrefix}`,
  );
}
