# LeapWallet - Metamask Cosmos Snap

```
@leapwallet/metamask-cosmos-snap
```

This Snap helps you to sign cosmos transactions for the chains of coin type 118

> Note:
If you are already using Cosmos-js and are familiar with OfflineSigner, we recommend using our [cosmos-snap-provider](https://github.com/leapwallet/cosmos-metamask-snap/blob/main/packages/cosmos-snap-provider/README.md) which does all necessary handling.


## Installation

To connect or to install and connect to leapwallet's metamask-cosmos-snap. Use the below command

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

for more information about installing/connecting to a metamask snap check [here](https://docs.metamask.io/snaps/reference/rpc-api/#wallet_requestsnaps)

## Get Keys

The get Key method gets the wallet's public address for a particular chain id. We are now supporting chains of coin type 118. 

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

## Sign Direct

Sign direct would be used to sign any transactions / signDoc using the wallet which got connected.

```javascript
await window.ethereum.request({
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
```
