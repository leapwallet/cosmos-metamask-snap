import { SigningStargateClient, StdFee } from '@cosmjs/stargate';
import { Coin, OfflineSigner } from '@cosmjs/proto-signing';

export class Tx {
  constructor(
    private client: SigningStargateClient,
    private rpcUrl: string,
    wallet: OfflineSigner,
  ) {}
  static async create(rpcUrl: string, signer: OfflineSigner) {
    const signingClient = await SigningStargateClient.connectWithSigner(
      rpcUrl,
      signer,
    );
    return new Tx(signingClient, rpcUrl, signer);
  }

  async sendTokens(
    senderAddress: string,
    recipientAddress: string,
    amount: Coin[],
    fee: number | StdFee | 'auto',
    memo: string = '',
  ) {
    return this.client.sendTokens(
      senderAddress,
      recipientAddress,
      amount,
      fee,
      memo,
    );
  }
}
