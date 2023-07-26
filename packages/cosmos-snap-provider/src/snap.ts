import { AccountData } from '@cosmjs/amino';
import { defaultSnapOrigin } from './config';
import { GetSnapsResponse, Snap } from './types';
import Long from 'long';

/**
 * Get the installed snaps in MetaMask.
 *
 * @returns The snaps installed in MetaMask.
 */

export const getSnaps = async (): Promise<GetSnapsResponse> => {
  return (await window.ethereum.request({
    method: 'wallet_getSnaps',
  })) as unknown as GetSnapsResponse;
};

/**
 * Connect a snap to MetaMask.
 *
 * @param snapId - The ID of the snap.
 * @param params - The params to pass with the snap to connect.
 */
export const connectSnap = async (
  snapId: string = defaultSnapOrigin,
  params: Record<'version' | string, unknown> = {},
) => {
  await window.ethereum.request({
    method: 'wallet_requestSnaps',
    params: {
      [snapId]: params,
    },
  });
};

/**
 * Get the snap from MetaMask.
 *
 * @param version - The version of the snap to install (optional).
 * @returns The snap object returned by the extension.
 */
export const getSnap = async (version?: string): Promise<Snap | undefined> => {
  try {
    const snaps = await getSnaps();

    return Object.values(snaps).find(
      (snap) =>
        snap.id === defaultSnapOrigin && (!version || snap.version === version),
    );
  } catch (e) {
    console.log('Failed to obtain installed snap', e);
    return undefined;
  }
};

export const requestSignature = async (
  chainId: string,
  signerAddress: string,
  signDoc: {
    bodyBytes?: Uint8Array | null;
    authInfoBytes?: Uint8Array | null;
    chainId?: string | null;
    accountNumber?: Long | null;
  },
) => {
  const signature = await window.ethereum.request({
    method: 'wallet_invokeSnap',
    params: {
      snapId: defaultSnapOrigin,
      request: {
        method: 'signDirect',
        params: {
          chainId,
          signerAddress,
          signDoc,
        },
      },
    },
  });

  const accountNumber = signDoc.accountNumber;
  //@ts-ignore
  const modifiedAccountNumber = new Long(
    accountNumber!.low,
    accountNumber!.high,
    accountNumber!.unsigned,
  );

  const modifiedSignature = {
    //@ts-ignore
    signature: signature.signature,
    signed: {
      // @ts-ignore
      ...signature.signed,
      accountNumber: `${modifiedAccountNumber.toString()}`,
      authInfoBytes: new Uint8Array(
        //@ts-ignore
        Object.values(signature.signed.authInfoBytes),
      ),

      bodyBytes: new Uint8Array(
        //@ts-ignore
        Object.values(signature.signed.bodyBytes),
      ),
    },
  };

  console.log('logging modified signature', modifiedSignature);
  return modifiedSignature;
};

export const getKey = async (chainId: string): Promise<AccountData> => {
  const accountData = await window.ethereum.request({
    method: 'wallet_invokeSnap',
    params: {
      snapId: defaultSnapOrigin,
      request: {
        method: 'getKey',
        params: {
          chainId,
        },
      },
    },
  });

  if (!accountData) throw new Error('No account data found');
  //@ts-ignore
  accountData.pubkey = Uint8Array.from(Object.values(accountData.pubkey));

  return accountData as AccountData;
};

export const isLocalSnap = (snapId: string) => snapId.startsWith('local:');
