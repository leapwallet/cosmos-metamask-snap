# cosmos-snap-provider

Cosmos Snap provider has been created for directly using the [Leap Cosmos Snap](https://www.npmjs.com/package/@leapwallet/metamask-cosmos-snap) with cosmos js client.

## Methods

### getSnap
  This method helps to identify whether leap cosmos snap is installed or not in the metamask instance installed in user browser


```typescript
import { getSnap, connectSnap, getKey } from '@leapwallet/cosmos-snap-provider'
const snapInstalled = await getSnap() // return true if already installed
```


### connectSnap
 Connect snap lets you connect to leap cosmos snap if installed else it will trigger the installation and connects to the snap.
 
```typescript
import { getSnap, connectSnap, getKey } from '@leapwallet/cosmos-snap-provider'

// check if snap is installed
const snapInstalled = await getSnap()
if(!snapInstalled) {
  // Install snap if not already installed
  connectSnap()
}
```

### getKey
GetKey helps in getting the chain address for the particular chainId. This should be called once the snap is been connected with the dapp.

```typescript
const key = await getKey(chainId)
```

### cosmjsOfflineSigner

The best way to use the provider if you already using the cosmjs libraries for signing is by using it as an offline signer with existing cosmwasm clients. 
Make sure the dapp connected to snap before using it as an offline signer.

```typescript
import { SigningStargateClient } from '@cosmjs/cosmwasm-stargate'
import { GasPrice } from '@cosmjs/stargate'
import { cosmjsOfflineSigner } from '@leapwallet/cosmos-snap-provider'

const offlineSigner = new cosmjsOfflineSigner(chainId);
const accounts = await offlineSigner.getAccounts();
const rpcUrl = "" // Replace with an RPC URL for the given chainId
const stargateClient = await SigningStargateClient.connectWithSigner(
  rpcUrl,
  offlineSigner,
  {
    gasPrice: GasPrice.fromString("0.0025ujuno"),
  }
)
```

