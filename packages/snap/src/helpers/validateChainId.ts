import { AddressPrefixes } from './addressPrefixes';

export function validateChainId(chainId: string) {
  if (!AddressPrefixes[chainId]) {
    throw new Error('Invalid chainId');
  }
}
