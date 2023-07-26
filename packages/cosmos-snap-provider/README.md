# cosmos-snap-provider

## Usage

```typescript
import { getSnap, connectSnap, getKey } from '@leapwallet/cosmos-snap-provider'

async function connect(){
    //check if snap is installed
    const snapInstalled = await getSnap()
    if(!snapInstalled) {
      // Install snap if not already installed
      connectSnap()
    }

}

async function getAccount(){
  await connect()
  const chainId = 'cosmoshub-4'
  const key = await getKey(chainId)
  return key
}

```

## Usage with cosmjs

```typescript
import { SigningStargateClient } from '@cosmjs/cosmwasm-stargate'
import { GasPrice } from '@cosmjs/stargate'


import { cosmjsOfflineSigner } from '@leapwallet/cosmos-snap-provider'



const offlineSigner = new cosmjsOfflineSigner(chainId);
const accounts = await offlineSigner.getAccounts();
const rpcUrl = "" // Replace with a RPC URL for the given chainId
const stargateClient = await SigningStargateClient.connectWithSigner(
  rpcUrl,
  offlineSigner,
  {
    gasPrice: GasPrice.fromString("0.0025ujuno"),
  }
)

```

