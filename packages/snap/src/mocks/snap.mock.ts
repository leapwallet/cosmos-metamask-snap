const snapMock: any = {
  success: {
    request: (params: any) => {
      if (params.method === 'snap_getBip44Entropy') {
        return {
          depth: 2,
          masterFingerprint: 3507465413,
          parentFingerprint: 3845878817,
          index: 2147483766,
          privateKey:
            '0x4072b5221f1526a0654c5ea97791476d70f1c09fa9e71e8812c3b9a097c829ad',
          publicKey:
            '0x04f9cc5a47a6497bd9b0dd069f8d12b50a3c2198354f0630371ba5bc34b8e67939dc541e975c8ea7c0e77630f92af9f862bd6203458735525d8715de7d7c590608',
          chainCode:
            '0xd2beb6b5262f8db0200551b45ebf22054ac7e31846fe64b953bffdfd4f1e1592',
          coin_type: 118,
          path: "m / bip32:44' / bip32:118'",
        };
      }

      if (params.method === 'snap_dialog') {
        return true;
      }
    },
  },
};

export default snapMock;
