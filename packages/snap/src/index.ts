import { StdSignDoc } from '@cosmjs/amino';
import { OnRpcRequestHandler } from '@metamask/snaps-types';
import { panel } from '@metamask/snaps-ui';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import Long from 'long';
import { AddressPrefixes } from './helpers/addressPrefixes';
import parser from './helpers/parser';
import { validateChainId } from './helpers/validateChainId';
import { generateWallet } from './wallet/wallet';

export interface RequestParams<T> {
  readonly signDoc: T;
  readonly signerAddress: string;
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
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  switch (request.method) {
    case 'signDirect': {
      const params: RequestParams<SignDoc> =
        request.params as unknown as RequestParams<SignDoc>;
      const panels = parser.parse(params.signDoc, origin, 'direct');
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

      const { signerAddress, signDoc } = params;
      validateChainId(signDoc.chainId);
      const { low, high, unsigned } = signDoc.accountNumber;

      const wallet = await generateWallet({
        addressPrefix: AddressPrefixes[signDoc.chainId],
      });

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

    case 'signAmino': {
      const params: RequestParams<StdSignDoc> =
        request.params as unknown as RequestParams<StdSignDoc>;
      const panels = parser.parse(params.signDoc, origin, 'amino');

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

      const { signerAddress, signDoc } = params;

      //@ts-ignore
      validateChainId(signDoc.chain_id ?? signDoc.chainId);
      const wallet = await generateWallet({
        //@ts-ignore
        addressPrefix: AddressPrefixes[signDoc.chain_id ?? signDoc.chainId],
      });

      const defaultFee = signDoc.fee;
      const defaultMemo = signDoc.memo;

      const sortedSignDoc = {
        //@ts-ignore
        chain_id: signDoc.chain_id ?? signDoc.chainId,
        //@ts-ignore
        account_number: signDoc.account_number ?? signDoc.accountNumber,
        sequence: signDoc.sequence,
        fee: defaultFee,
        memo: defaultMemo,
        msgs: signDoc.msgs,
      };
      const signResponse = await wallet.signAmino(signerAddress, sortedSignDoc);
      return signResponse;
    }

    case 'getKey': {
      const { chainId } = request.params as { chainId: string };
      validateChainId(chainId);

      const wallet = await generateWallet({
        addressPrefix: AddressPrefixes[chainId],
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
