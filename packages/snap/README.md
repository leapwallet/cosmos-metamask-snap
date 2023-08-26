### **`@leapwallet/metamask-cosmos-snap`**

This Snap facilitates signing of Cosmos transactions for chains associated with coin type 118.

> Recommendation: If you're accustomed to using [CosmJS](https://github.com/cosmos/cosmjs) and the OfflineSigner, consider leveraging our cosmos-snap-provider. It streamlines the necessary tasks with minimal code alterations.
> 

### **Installation**

To either establish a connection or initiate an installation followed by a connection to the **`leapwallet's metamask-cosmos-snap`**, execute the following code:

```javascript

try {
  const result = await window.ethereum.request({
    method: 'wallet_requestSnaps',
    params: {
      'npm:@leapwallet-metamask-snap': {},
    },
  });

  console.log(result);

} catch (error) {
  console.log(error);
}

```

For comprehensive details on connecting or installing a Metamask snap, refer **[here](https://docs.metamask.io/snaps/reference/rpc-api/#wallet_requestsnaps)**.

### **Methods**

### 1. **Get Keys**

The **`getKey`** method retrieves the wallet's public address corresponding to a specific chain ID. Currently, we support chains of coin type 118.

**Usage:**
```javascript
const accountData = await window.ethereum.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: "npm:@leapwallet-metamask-snap",
    request: {
      method: 'getKey',
      params: {
        chainId,
      },
    },
  },
});

```

### 2. **Sign Direct**

Utilize the **`signDirect`** method to sign transactions or **`signDoc`** using the connected wallet.

**Usage:**

```javascript
await window.ethereum.request({
  method: 'wallet_invokeSnap',
  params: {
    snapId: "npm:@leapwallet-metamask-snap",
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

```

### 2. **Sugest Chain**

Utilize the **`suggestChain`** method to suggest any chains of coinTypes in the list below

```javascript
[
    118, 
    564, 
    494, 
    639, 
    483, 
    4444, 
    701, 
    990, 
    394, 
    852, 
    7777777, 
    459, 
    880, 
    931, 
    371, 
    505, 
    529, 
    234, 
    330, 
    5555, 
    370
];
```

**Usage:**

```javascript
await window.ethereum.request({
    method: 'wallet_invokeSnap',
    params: {
      snapId: "local:http://localhost:8000",
      request: {
        method: 'suggestChain',
        params: {
          chainInfo: {
            chainId: "canto_7700-1",
            chainName: "canto",
            bip44: {
              coinType: 564,
            },
            bech32Config: {
              bech32PrefixAccAddr: "canto",
            },
          },
        }
      },
    },
  })

```