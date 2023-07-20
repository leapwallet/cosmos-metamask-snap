import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { AccountData } from '@cosmjs/amino';
import { getKey, requestSignature } from './snap';
import { DirectSignResponse, OfflineDirectSigner } from '@cosmjs/proto-signing';

export class cosmjsOfflineSigner implements OfflineDirectSigner {
  constructor(private chainId: string) {}

  async getAccounts(): Promise<AccountData[]> {
    const key = await getKey(this.chainId);
    console.log('logging key', key);

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
    console.log('logging accounts', accounts);

    if (accounts.find((account) => account.address !== signerAddress)) {
      throw new Error('Signer address does not match wallet address');
    }

    return requestSignature(
      this.chainId,
      signerAddress,
      signDoc,
    ) as Promise<DirectSignResponse>;
  }
}

export function getOfflineSigner(chainId: string) {
  return new cosmjsOfflineSigner(chainId);
}
