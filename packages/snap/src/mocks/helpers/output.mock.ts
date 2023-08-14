const output = {
    success: {
        stake: [{
            "type": "text",
            "value": " **Approve transaction from**"
        }, {
            "type": "copyable",
            "value": "test-mock"
        }, {
            "type": "heading",
            "value": ""
        }, {
            "type": "heading",
            "value": "Delegate <0.01 ATOM to cosmo...tscmp"
        }, {
            "type": "heading",
            "value": ""
        }, {
            "type": "text",
            "value": " **Raw message**"
        }, {
            "type": "copyable",
            "value": "[\n  {\n    \"raw\": {\n      \"@type\": \"/cosmos.staking.v1beta1.MsgDelegate\",\n      \"delegator_address\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"validator_address\": \"cosmosvaloper1lcwxu50rvvgf9v6jy6q5mrzyhlszwtjxhtscmp\",\n      \"amount\": {\n        \"denom\": \"uatom\",\n        \"amount\": \"100\"\n      }\n    },\n    \"parsed\": {\n      \"__type\": \"cosmos.staking.delegate\",\n      \"delegatorAddress\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"validatorAddress\": \"cosmosvaloper1lcwxu50rvvgf9v6jy6q5mrzyhlszwtjxhtscmp\",\n      \"denomination\": \"uatom\",\n      \"quantity\": \"100\"\n    }\n  }\n]"
        }],
      unStake: [{
        "type": "text",
        "value": " **Approve transaction from**"
    }, {
        "type": "copyable",
        "value": "test-mock"
    }, {
        "type": "heading",
        "value": ""
    }, {
        "type": "heading",
        "value": "Undelegate <0.01 ATOM from cosmo...tscmp"
    }, {
        "type": "heading",
        "value": ""
    }, {
        "type": "text",
        "value": " **Raw message**"
    }, {
        "type": "copyable",
        "value": "[\n  {\n    \"raw\": {\n      \"@type\": \"/cosmos.staking.v1beta1.MsgUndelegate\",\n      \"delegator_address\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"validator_address\": \"cosmosvaloper1lcwxu50rvvgf9v6jy6q5mrzyhlszwtjxhtscmp\",\n      \"amount\": {\n        \"denom\": \"uatom\",\n        \"amount\": \"1000\"\n      }\n    },\n    \"parsed\": {\n      \"__type\": \"cosmos.staking.undelegate\",\n      \"delegatorAddress\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"validatorAddress\": \"cosmosvaloper1lcwxu50rvvgf9v6jy6q5mrzyhlszwtjxhtscmp\",\n      \"denomination\": \"uatom\",\n      \"quantity\": \"1000\"\n    }\n  }\n]"
    }],
    redelegate: [{
        "type": "text",
        "value": " **Approve transaction from**"
    }, {
        "type": "copyable",
        "value": "test-mock"
    }, {
        "type": "heading",
        "value": ""
    }, {
        "type": "heading",
        "value": "Redelegate <0.01 ATOM from cosmo...tscmp to cosmo...wf9wj"
    }, {
        "type": "heading",
        "value": ""
    }, {
        "type": "text",
        "value": " **Raw message**"
    }, {
        "type": "copyable",
        "value": "[\n  {\n    \"raw\": {\n      \"@type\": \"/cosmos.staking.v1beta1.MsgBeginRedelegate\",\n      \"delegator_address\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"validator_src_address\": \"cosmosvaloper1lcwxu50rvvgf9v6jy6q5mrzyhlszwtjxhtscmp\",\n      \"validator_dst_address\": \"cosmosvaloper1lkujuk2004p3w42tgvuvqnsdmsq8u6jqkwf9wj\",\n      \"amount\": {\n        \"denom\": \"uatom\",\n        \"amount\": \"100\"\n      }\n    },\n    \"parsed\": {\n      \"__type\": \"cosmos.staking.beginRedelegate\",\n      \"delegatorAddress\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"sourceValidatorAddress\": \"cosmosvaloper1lcwxu50rvvgf9v6jy6q5mrzyhlszwtjxhtscmp\",\n      \"destinationValidatorAddress\": \"cosmosvaloper1lkujuk2004p3w42tgvuvqnsdmsq8u6jqkwf9wj\",\n      \"denomination\": \"uatom\",\n      \"quantity\": \"100\"\n    }\n  }\n]"
    }],
    send: [{
        "type": "text",
        "value": " **Approve transaction from**"
    }, {
        "type": "copyable",
        "value": "test-mock"
    }, {
        "type": "heading",
        "value": ""
    }, {
        "type": "heading",
        "value": "Send <0.01 ATOM to cosmo...8xyqh"
    }, {
        "type": "heading",
        "value": ""
    }, {
        "type": "text",
        "value": " **Raw message**"
    }, {
        "type": "copyable",
        "value": "[\n  {\n    \"raw\": {\n      \"@type\": \"/cosmos.bank.v1beta1.MsgSend\",\n      \"from_address\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"to_address\": \"cosmos19vf5mfr40awvkefw69nl6p3mmlsnacmm28xyqh\",\n      \"amount\": [\n        {\n          \"denom\": \"uatom\",\n          \"amount\": \"100\"\n        }\n      ]\n    },\n    \"parsed\": {\n      \"__type\": \"cosmos.bank.send\",\n      \"fromAddress\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"toAddress\": \"cosmos19vf5mfr40awvkefw69nl6p3mmlsnacmm28xyqh\",\n      \"tokens\": [\n        {\n          \"denomination\": \"uatom\",\n          \"quantity\": \"100\"\n        }\n      ]\n    }\n  }\n]"
    }],
    IBCSend: [{
        "type": "text",
        "value": " **Approve transaction from**"
    }, {
        "type": "copyable",
        "value": "test-mock"
    }, {
        "type": "heading",
        "value": ""
    }, {
        "type": "heading",
        "value": "Send <0.01 ATOM to osmo1...u45k9 via IBC"
    }, {
        "type": "heading",
        "value": ""
    }, {
        "type": "text",
        "value": " **Raw message**"
    }, {
        "type": "copyable",
        "value": "[\n  {\n    \"raw\": {\n      \"@type\": \"/ibc.applications.transfer.v1.MsgTransfer\",\n      \"source_port\": \"transfer\",\n      \"source_channel\": \"channel-141\",\n      \"token\": {\n        \"denom\": \"uatom\",\n        \"amount\": \"100\"\n      },\n      \"sender\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"receiver\": \"osmo19vf5mfr40awvkefw69nl6p3mmlsnacmmzu45k9\",\n      \"timeout_timestamp\": {\n        \"low\": -408963584,\n        \"high\": 393843903,\n        \"unsigned\": true\n      },\n      \"memo\": \"\"\n    },\n    \"parsed\": {\n      \"__type\": \"ibc.applications.send\",\n      \"sourcePort\": \"transfer\",\n      \"sourceChannel\": \"channel-141\",\n      \"token\": {\n        \"denomination\": \"uatom\",\n        \"quantity\": \"100\"\n      },\n      \"fromAddress\": \"cosmos127jexdh5jx5tdqxt6z6dggfr5c6ffcwuamstpe\",\n      \"toAddress\": \"osmo19vf5mfr40awvkefw69nl6p3mmlsnacmmzu45k9\"\n    }\n  }\n]"
    }]
    },
    
}

export default output;