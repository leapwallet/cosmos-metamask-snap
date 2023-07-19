import { OnRpcRequestHandler } from '@metamask/snaps-types';
import {
  BIP44CoinTypeNode,
  getBIP44AddressKeyDeriver,
} from '@metamask/key-tree';
import { panel, text, heading } from '@metamask/snaps-ui';
import { calculateFee, SigningStargateClient } from '@cosmjs/stargate';
import { OfflineDirectSigner } from '@cosmjs/proto-signing';
import { SignDoc, TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { sha256 } from '@noble/hashes/sha256';
import { BigNumber } from 'bignumber.js';
import parser from './helpers/parser';
import { Wallet } from './wallet/wallet';

export type WalletOptions = {
  paths: string[];
  addressPrefix: string;
};

export async function generateWallet(options: WalletOptions): Promise<Wallet> {
  const atomNodeJson = (await snap.request({
    method: 'snap_getBip44Entropy',
    params: {
      // // Must be specified exactly in the manifest
      // path: ['m', "44'", "118'"],
      // curve: 'secp256k1',
      coinType: 118,
    },
  })) as unknown as BIP44CoinTypeNode;

  const addressKeyDeriver = await getBIP44AddressKeyDeriver(atomNodeJson);
  const addressKey0 = await addressKeyDeriver(0);

  const wallet = Wallet.create(addressKey0.privateKey, options.addressPrefix);

  return wallet;
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
      const confirmed = await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([
            heading(`0.005 Atom Transaction`),
            text(
              parser.parse(
                'Are you sure of sending **0.005 ATOM** to cosmos19vf5mfr40awvkefw69nl6p3mmlsnacmm28xyqh?',
              ),
            ),
          ]),
        },
      });
      if (!confirmed) throw new Error('User denied transaction');
      const wallet = await generateWallet({
        addressPrefix: 'osmo',
        hdPaths: ["m/44'/118'/0'/0/0"],
      });

      const { signerAddress, signDoc } = request.params;
      console.log('logging signdoc', signDoc);
      const signResponse = await wallet.signDirect(signerAddress, signDoc);
      return signResponse;
    }
    case 'getKey': {
      const wallet = await generateWallet({
        addressPrefix: 'osmo',
        paths: ["m/44'/118'/0'/0/0"],
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
    case 'hello':
      const confirmed = await snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([
            heading(`0.005 Atom Transaction`),
            text(
              parser.parse(
                'Are you sure of sending **0.005 ATOM** to cosmos19vf5mfr40awvkefw69nl6p3mmlsnacmm28xyqh?',
              ),
            ),
          ]),
        },
      });

      const inputAmountNumber = new BigNumber('0.0005');
      const normalizedAmount = inputAmountNumber
        .multipliedBy(10 ** 6)
        .toFixed(0, BigNumber.ROUND_DOWN);
      let txHash = '';
      if (confirmed) {
        try {
          txHash = await signTx(
            'cosmos19vf5mfr40awvkefw69nl6p3mmlsnacmm28xyqh',
            [{ amount: normalizedAmount, denom: 'uatom' }],
          );
        } catch (e) {
          throw e;
        }
      }
      // throw new Error(`${JSON.stringify(txHash)}`);
      return txHash;
    default:
      throw new Error('Method not found.');
  }
};

const signTx = async (toAddress: string, amount: Coin[]) => {
  const hdPath = `m/44'/118'/0'/0/0`;
  let wallet = {};
  try {
    wallet = (await generateWallet({
      paths: [hdPath],
      addressPrefix: 'cosmos',
    })) as unknown as OfflineDirectSigner;
  } catch (e) {
    throw new Error(e);
  }

  const client = await SigningStargateClient.connectWithSigner(
    'https://rpc.cosmos.directory/cosmoshub',
    wallet,
    {
      broadcastPollIntervalMs: 5_000,
    },
  );

  let accounts = await wallet.getAccounts();

  const sendMsg = {
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: accounts[0].address,
      toAddress: toAddress,
      amount: [...amount],
    },
  };
  let fee: StdFee | 'auto' | number = 'auto';
  let usedFee: StdFee;
  const memo = 'Test';
  if (fee === 'auto' || typeof fee === 'number') {
    try {
      const gasEstimation = await client.simulate(
        accounts[0].address,
        [sendMsg],
        memo,
      );
      const multiplier = fee !== 'auto' ? fee : 1.3;
      if (!gasEstimation) {
        throw new Error(
          `unable to get gas estimate ${JSON.stringify(
            await wallet.getAccounts(),
          )}`,
        );
      }
      usedFee = calculateFee(
        Math.round(gasEstimation * multiplier),
        '0.025uatom',
      );
    } catch (e) {
      throw e;
      // throw new Error(`Unable to simulate Tx ${accounts[0].address}`);
    }
  } else {
    usedFee = fee;
  }

  const fetchAccountDetails = async (
    lcdEndpoint: string,
    address: string,
  ): Promise<any> => {
    try {
      /**
       * Injective has different response than the rest of the
       * cosmos chains when querying the auth account endpoint
       * */

      const data = await (
        await fetch(`${lcdEndpoint}/cosmos/auth/v1beta1/accounts/${address}`)
      ).json();
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
  };

  try {
    // const signedMsg = await client.sign(accounts[0].address, [sendMsg], usedFee, memo)
    const accountDetails = await fetchAccountDetails(
      'https://rest.cosmos.directory/cosmoshub',
      accounts[0].address,
    );
    const signedMsg = await client.sign(
      accounts[0].address,
      [sendMsg],
      usedFee,
      memo,
      {
        accountNumber: accountDetails.accountNumber,
        chainId: 'cosmoshub-4',
        sequence: accountDetails.sequence,
      },
    );

    const result = await client.broadcastTx(TxRaw.encode(signedMsg).finish());
    return result;
  } catch (e) {
    throw e;
  }
};
