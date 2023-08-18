import { AddressPrefixes } from './addressPrefixes';

/**
 *
 * @param chainId
 */
export function validateChainId(chainId: string) {
  if (!AddressPrefixes[chainId]) {
    throw new Error('Invalid chainId');
  }
}
