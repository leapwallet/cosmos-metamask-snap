## **cosmos-snap-provider**

The **`cosmos-snap-provider`** is specifically designed for seamless integration of the Leap Cosmos Snap with the [CosmJS](https://github.com/cosmos/cosmjs) client.

### **Methods**

### 1. **getSnap**

This method is used to detect if the Leap Cosmos Snap is installed within the user's browser instance of Metamask.

**Usage:**

```js
import { getSnap } from '@leapwallet/cosmos-snap-provider';

const snapInstalled = await getSnap(); // Returns true if the snap is already installed
```

### 2. **connectSnap**

**`connectSnap`** facilitates the connection to the Leap Cosmos Snap. If the Snap isn't installed, this function triggers its installation and establishes a connection.

**Usage:**

```js
import { getSnap, connectSnap } from '@leapwallet/cosmos-snap-provider';
const snapInstalled = await getSnap();
if (!snapInstalled) {
  connectSnap(); // Initiates installation if not already present
}
```

### 3. **getKey**

**`getKey`** fetches the chain address corresponding to a specific chainId. Ensure the Snap is connected with the dapp before invoking this function.

```js
const key = await getKey(chainId);
```

### 4. **Sugest Chain**

Utilize the **`suggestChain`** method to suggest any chains of coinTypes in the list below

```javascript
[
  118, 564, 494, 639, 483, 4444, 701, 990, 394, 852, 7777777, 459, 880, 931,
  371, 505, 529, 234, 330, 5555, 370,
];
```

**Usage:**

```javascript
import { suggestChain } from '@leapwallet/cosmos-snap-provider';
await suggestChain({
  chainId: 'coreum-mainnet-1',
  chainName: 'coreum',
  bech32Config: {
    bech32PrefixAccAddr: 'core',
  },
  bip44: {
    coinType: 990,
  },
});
```

### 4. **cosmjsOfflineSigner**

If you're already employing cosmjs libraries for transaction signing, **`cosmjsOfflineSigner`** is recommended. It functions as an offline signer with existing cosmwasm clients. Before utilizing it as an offline signer, verify that the dapp is connected to the Snap.

**Usage:**

```js
import { SigningStargateClient } from '@cosmjs/cosmwasm-stargate';
import { GasPrice } from '@cosmjs/stargate';
import { cosmjsOfflineSigner } from '@leapwallet/cosmos-snap-provider';

const offlineSigner = new cosmjsOfflineSigner(chainId);
const accounts = await offlineSigner.getAccounts();
const rpcUrl = ''; // Populate with an RPC URL corresponding to the given chainId
const stargateClient = await SigningStargateClient.connectWithSigner(
  rpcUrl,
  offlineSigner,
  {
    gasPrice: GasPrice.fromString('0.0025ujuno'),
  },
);
```
