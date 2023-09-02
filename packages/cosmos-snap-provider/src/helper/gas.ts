export const getGasPriceForChainId = async (chainId: string, gasLevel:string = 'average') => {
    const gasPriceRegistry: any = await fetch('https://assets.leapwallet.io/cosmos-registry/v1/gas/gas-prices.json');
    return gasPriceRegistry?.[chainId]?.[gasLevel]
}