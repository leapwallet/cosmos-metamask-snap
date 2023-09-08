/* eslint @typescript-eslint/prefer-optional-chain: 0 */ // --> OFF
/* eslint jsdoc/match-description: 0 */ // --> OFF
import { AccountData, StdSignDoc, AminoSignResponse } from '@cosmjs/amino';
import Long from 'long';
import { defaultSnapOrigin } from './config';
import { ChainInfo, GetSnapsResponse, Snap } from './types';

/**
 * The fool proof version of getting the ethereum provider suggested by
 * https://github.com/Montoya/snap-connect-test/blob/0dad2dd53ab2ecbf4b4369230d3aaaeca08c6dae/index.html#L41
 *
 * @returns the ethereum provider which supports snaps
 */
const getProvider = async (): Promise<any> => {
  let mmFound = false;
  if ('detected' in window.ethereum) {
    for (const provider of window.ethereum.detected) {
      try {
        // Detect snaps support
        await provider.request({
          method: 'wallet_getSnaps',
        });
        // enforces MetaMask as provider
        window.ethereum.setProvider(provider);

        mmFound = true;
        return provider;
      } catch {
        // no-op
      }
    }
  }

  if (!mmFound && 'providers' in window.ethereum) {
    for (const provider of window.ethereum.providers) {
      try {
        // Detect snaps support
        await provider.request({
          method: 'wallet_getSnaps',
        });

        window.ethereum = provider;

        mmFound = true;
        return provider;
      } catch {
        // no-op
      }
    }
  }

  return window.ethereum;
};

const sendReqToSnap = async (method: string, params: any): Promise<any> => {
  const provider = await getProvider();
  return provider.request({
    method: 'wallet_invokeSnap',
    params: {
      snapId: defaultSnapOrigin,
      request: {
        method,
        params,
      },
    },
  });
};

/**
 * Get the installed snaps in MetaMask.
 *
 * @returns The snaps installed in MetaMask.
 */
export const getSnaps = async (): Promise<GetSnapsResponse> => {
  const provider = await getProvider();
  return (await provider.request({
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
  const provider = await getProvider();
  return provider.request({
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
  const signature = await sendReqToSnap('signDirect', {
    chainId,
    signerAddress,
    signDoc,
  });

  const { accountNumber } = signDoc;

  const modifiedAccountNumber = new Long(
    accountNumber?.low || 0,
    accountNumber?.high,
    accountNumber?.unsigned,
  );

  const modifiedSignature = {
    signature: signature.signature,
    signed: {
      ...signature.signed,
      accountNumber: `${modifiedAccountNumber.toString()}`,
      authInfoBytes: new Uint8Array(
        Object.values(signature.signed.authInfoBytes),
      ),

      bodyBytes: new Uint8Array(Object.values(signature.signed.bodyBytes)),
    },
  };

  return modifiedSignature;
};

export const requestSignAmino = async (
  chainId: string,
  signerAddress: string,
  signDoc: StdSignDoc,
  { isADR36 = false } = {},
) => {
  const signResponse = (await sendReqToSnap('signAmino', {
    chainId,
    signerAddress,
    signDoc,
    isADR36,
  })) as AminoSignResponse;

  return signResponse;
};

export const getKey = async (chainId: string): Promise<AccountData> => {
  const accountData = await sendReqToSnap('getKey', {
    chainId,
  });

  if (!accountData) {
    throw new Error('No account data found');
  }

  accountData.pubkey = Uint8Array.from(Object.values(accountData.pubkey));

  return accountData as AccountData;
};

export const isLocalSnap = (snapId: string) => snapId.startsWith('local:');

export const suggestChain = async (
  chainInfo: ChainInfo,
): Promise<{ message: string; chainInfo: ChainInfo }> => {
  return await sendReqToSnap('suggestChain', {
    chainInfo,
  });
};

// For supporting existing providers.
export const experimentalSuggestChain = suggestChain;
