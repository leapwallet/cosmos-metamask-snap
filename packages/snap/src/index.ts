import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { panel } from '@metamask/snaps-ui';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import Long from 'long';
import parser from './helpers/parser';
import { generateWallet } from './wallet/wallet';

type RequestParams = {
  signDoc: SignDoc;
  signerAddress: string;
};

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
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  switch (request.method) {
    case 'signDirect': {
      const params: RequestParams = request.params as unknown as RequestParams;
      const panels = parser.parse(params.signDoc, origin);
      const confirmed = await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel(panels),
        },
      });

      if (!confirmed) {
        throw new Error('User denied transaction');
      }
      const wallet = await generateWallet({
        addressPrefix: 'cosmos',
      });

      const { signerAddress, signDoc } = params;
      const { low, high, unsigned } = signDoc.accountNumber;

      const accountNumber = new Long(low, high, unsigned);
      const sd = {
        bodyBytes: new Uint8Array(Object.values(signDoc.bodyBytes)),
        authInfoBytes: new Uint8Array(Object.values(signDoc.authInfoBytes)),
        chainId: signDoc.chainId,
        accountNumber,
      };
      const signResponse = await wallet.signDirect(signerAddress, sd);
      return signResponse;
    }

    case 'getKey': {
      const wallet = await generateWallet({
        addressPrefix: 'cosmos',
      });

      const accounts = wallet.getAccounts();
      return {
        address: accounts[0].address,
        algo: 'secp256k1',
        bech32Address: accounts[0].address,
        isNanoLedger: false,
        name: 'Cosmos',
        pubkey: new Uint8Array(Object.values(accounts[0].pubkey)),
      };
    }
    
    default:
      throw new Error('Method not found.');
  }
};
