import * as secp from '@noble/secp256k1';

import { sha256 } from '@noble/hashes/sha256';
import { ripemd160 } from '@noble/hashes/ripemd160';
import { bech32 } from 'bech32';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

import * as base64js from 'base64-js';

export type Pubkey = {
  readonly type: string;
  readonly value: any;
};

export type StdSignature = {
  readonly pub_key: Pubkey;
  readonly signature: string;
};

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

function pubkeyToAddress(publicKey: Uint8Array, addressPrefix: string) {
  const pubKeyHash = ripemd160(sha256(publicKey));
  return bech32.encode(addressPrefix, bech32.toWords(pubKeyHash));
}

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
    const address = pubkeyToAddress(publicKey!, addressPrefix);
    return new Wallet(pvtKeyBytes, publicKey, address);
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
    const account = accounts.find(
      (account) => account.address === signerAddress,
    );

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
      signed: signDoc,
      signature: encodeSecp256k1Signature(account.pubkey, signature),
    };
  }
}