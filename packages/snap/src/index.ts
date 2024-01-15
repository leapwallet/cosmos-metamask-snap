/* eslint no-negated-condition: 0 */ //
import { AminoMsg, StdFee } from '@cosmjs/amino';
import { OnRpcRequestHandler } from '@metamask/snaps-types';
import type { OnHomePageHandler, Panel } from '@metamask/snaps-sdk';
import { panel, text, heading, copyable, divider } from '@metamask/snaps-sdk';
import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import Long from 'long';
import {
  addChain,
  getChainDetails,
  getAllChains,
  validateChain,
  validateChainId,
} from './chain';
import parser from './helpers/parser';
import { ChainInfo } from './types/wallet';
import { getChainPanel } from './ui/suggestChain';
import { generateWallet } from './wallet/wallet';
import DENOMS from './constants/denoms';

export type RequestParams<T> = {
  readonly signDoc: T;
  readonly signerAddress: string;
  readonly isADR36?: boolean;
  readonly enableExtraEntropy?: boolean;
  readonly chainId?: string;
};

export type StdSignDoc = {
  readonly chain_id?: string;
  readonly chainId?: string;
  readonly account_number: string;
  readonly accountNumber?: string;
  readonly sequence: string;
  readonly fee: StdFee;
  readonly msgs: readonly AminoMsg[];
  readonly memo: string;
};

export const onHomePage: OnHomePageHandler = async () => {
  console.log('reached');
  const chainId = 'cosmoshub-4';
  const chainDetails = await getChainDetails(chainId);
  const wallet = await generateWallet(chainDetails);
  const accounts = wallet.getAccounts();

  const osmosisChainId = 'osmosis-1';
  const ochainDetails = await getChainDetails(osmosisChainId);
  const owallet = await generateWallet(ochainDetails);
  const oaccounts = owallet.getAccounts();
  const panels:any = [];
  let ototal = 0;
  const odenom = DENOMS['uosmo'].coinDenom;
  const coinDecimals = DENOMS['uosmo'].coinDecimals;

  
  // return {content: panel([
  //   heading('Leap metamask snap'),
  //   text('Cosmos'),
  //   text(`${JSON.stringify(data)}`)
  // ]),
  // }
  
  let total = 0;
  const denom = DENOMS['uatom'].coinDenom;
  return fetch(`https://leap-node-proxy.numia.xyz/cosmos-lcd/cosmos/staking/v1beta1/delegations/${accounts[0].address}`)
  .then((response) => {
    return response.json()
  }).then((response) => {
    
  const coinDecimals = DENOMS['uatom'].coinDecimals;
    response.delegation_responses && response.delegation_responses.forEach((resp: any) => {
      if(resp.balance) {
        total = total + Number(resp.balance.amount || '0');
      }
    });
    
  })
  .then(() => {
    return fetch(`https://leap-node-proxy.numia.xyz/osmosis-lcd/cosmos/staking/v1beta1/delegations/${oaccounts[0].address}`)
  })
  .then((response) => {
    return response.json()
  }).then((response) => {
  
    response.delegation_responses && response.delegation_responses.forEach((resp: any) => {
      if(resp.balance) {
        ototal = ototal + Number(resp.balance.amount || '0');
      }
    });
  })
  .then(() => {
    return {
      content: panel([
        heading('CosmosHub'),
        copyable(accounts[0].address),
        heading('Delegations'),
        heading(`${total/1000000} ${denom}`),
        divider(),
        heading('Osmosis'),
        copyable(oaccounts[0].address),
        heading('Delegations'),
        heading(`${ototal/1000000} ${odenom}`),
      ])
    }
  })
  .catch((e) => {
    return {
      content: panel([
        heading('Leap metamask snap'),
        text(JSON.stringify(e.message)),
      ]),
    }
  })
  
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
      await validateChainId(signDoc.chainId);
      const { low, high, unsigned } = signDoc.accountNumber;
      const chainDetails = await getChainDetails(signDoc.chainId);
      const wallet = await generateWallet(chainDetails);

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

      const receivedChainId =
        params.chainId || signDoc.chain_id || signDoc.chainId || '';

      if (!receivedChainId) {
        throw new Error('ChainId is mandatory params');
      }

      if (!params.isADR36) {
        await validateChainId(receivedChainId);
      }

      const chainDetails = await getChainDetails(receivedChainId);

      const wallet = await generateWallet(chainDetails);

      const defaultFee = signDoc.fee;
      const defaultMemo = signDoc.memo;

      const sortedSignDoc = {
        chain_id: receivedChainId,
        account_number: signDoc.account_number ?? signDoc.accountNumber,
        sequence: signDoc.sequence,
        fee: defaultFee,
        memo: defaultMemo,
        msgs: signDoc.msgs,
      };
      const signResponse = await wallet.signAmino(
        signerAddress,
        sortedSignDoc,
        {
          extraEntropy: !params.enableExtraEntropy
            ? false
            : params.enableExtraEntropy,
        },
      );
      return signResponse;
    }

    case 'getKey': {
      const { chainId } = request.params as { chainId: string };
      await validateChainId(chainId);
      const chainDetails = await getChainDetails(chainId);
      const wallet = await generateWallet(chainDetails);
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

    case 'suggestChain': {
      const { chainInfo } = request.params as unknown as {
        chainInfo: ChainInfo;
      };
      validateChain(chainInfo);
      const panels = getChainPanel(origin, chainInfo);
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

      await addChain(chainInfo);
      return { message: 'Successfully added chain', chainInfo };
    }

    case 'getSupportedChains': {
      return await getAllChains();
    }

    default:
      throw new Error('Method not found.');
  }
};
