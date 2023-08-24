import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { AccountData, AminoSignResponse, StdSignDoc } from '@cosmjs/amino';
import { DirectSignResponse, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { getKey, requestSignAmino, requestSignature } from './snap';

export class cosmjsOfflineSigner implements OfflineDirectSigner {
  constructor(private chainId: string) {}

  async getAccounts(): Promise<AccountData[]> {
    const key = await getKey(this.chainId);
    return [
      {
        address: key.address,
        algo: 'secp256k1',
        pubkey: key.pubkey,
      },
    ];
  }

  async signDirect(
    signerAddress: string,
    signDoc: SignDoc,
  ): Promise<DirectSignResponse> {
    if (this.chainId !== signDoc.chainId) {
      throw new Error('Chain ID does not match signer chain ID');
    }
    const accounts = await this.getAccounts();

    if (accounts.find((account) => account.address !== signerAddress)) {
      throw new Error('Signer address does not match wallet address');
    }

    return requestSignature(
      this.chainId,
      signerAddress,
      signDoc,
    ) as Promise<DirectSignResponse>;
  }

  // This has been added as a placeholder.
  async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc,
  ): Promise<AminoSignResponse> {
    if (this.chainId !== signDoc.chain_id) {
      throw new Error('Chain ID does not match signer chain ID');
    }
    const accounts = await this.getAccounts();

    if (accounts.find((account) => account.address !== signerAddress)) {
      throw new Error('Signer address does not match wallet address');
    }

    return requestSignAmino(
      this.chainId,
      signerAddress,
      signDoc,
    ) as unknown as Promise<AminoSignResponse>;
  }
}

/**
 *
 * @param chainId
 */
export function getOfflineSigner(chainId: string) {
  return new cosmjsOfflineSigner(chainId);
}

export async function signArbitrary(
  chainId: string,
  signer: string,
  data: string,
) {
  const { signDoc, isADR36WithString } = getADR36SignDoc(signer, data);
  const result = await requestSignAmino(chainId, signer, signDoc, {
    isADR36: true,
  });
  return result.signature;
}

function getADR36SignDoc(
  signer: string,
  data: string | Uint8Array,
): { signDoc: StdSignDoc; isADR36WithString: boolean } {
  let isADR36WithString = false;
  if (typeof data === 'string') {
    data = Buffer.from(data).toString('base64');
    isADR36WithString = true;
  } else {
    data = Buffer.from(data).toString('base64');
  }
  const signDoc = {
    chain_id: '',
    account_number: '0',
    sequence: '0',
    fee: {
      gas: '0',
      amount: [],
    },
    msgs: [
      {
        type: 'sign/MsgSignData',
        value: {
          signer,
          data,
        },
      },
    ],
    memo: '',
  };
  return { signDoc, isADR36WithString };
}
