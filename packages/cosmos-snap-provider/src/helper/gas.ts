/* eslint jsdoc/require-description: 0 */ // 
/* eslint jsdoc/require-param-description: 0 */ // 
/* eslint jsdoc/require-returns: 0 */ // 
import BN from 'bignumber.js';

const defaultDecimals = 6;

export const getGasPriceForChainName = async (
  chainName: string,
  gasLevel = 'average',
) => {
  const gasPriceRegistry: any = await fetch(
    'https://assets.leapwallet.io/cosmos-registry/v1/gas/gas-prices.json',
  );
  if (!gasPriceRegistry.ok) {
    throw new Error(`Failed to get Gas price ${gasPriceRegistry.status}`);
  }
  const gasPrices = await gasPriceRegistry.json();
  console.log(gasPrices, chainName, gasLevel);

  return gasPrices?.[chainName]?.[gasLevel];
};

/**
 *
 * @param quantity
 * @param decimals
 */
export function toSmall(
  quantity: string,
  decimals: number = defaultDecimals,
): string {
  return new BN(quantity).times(Math.pow(10, decimals)).toFixed().toString();
}
