# LeapWallet - Metamask Cosmos Snap

This Snap helps you to sign cosmos transactions for the chains of coin type 118



```
@leapwallet/metamask-cosmos-snap
```

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

for more information about installing / connecting to a metamask snap check [here](https://docs.metamask.io/snaps/reference/rpc-api/#wallet_requestsnaps)

## Get Keys



## Sign Amino


## Sign Direct

