const DENOMS = {
    "umpwr": {
      "coinDenom": "MPWR",
      "coinMinimalDenom": "umpwr",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/empower-testnet.png",
      "chain": "empowerchain",
      "coinGeckoId": ""
    },
    "cacao": {
      "coinDenom": "CACAO",
      "coinMinimalDenom": "cacao",
      "coinDecimals": 10,
      "icon": "https://assets.leapwallet.io/cacao.png",
      "chain": "juno",
      "coinGeckoId": "cacao"
    },
    "maya": {
      "coinDenom": "MAYA",
      "coinMinimalDenom": "maya",
      "coinDecimals": 4,
      "icon": "https://assets.leapwallet.io/maya-token.png",
      "chain": "mayachain",
      "coinGeckoId": ""
    },
    "unibi": {
      "coinDenom": "NIBI",
      "coinMinimalDenom": "unibi",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/nibiry.png",
      "chain": "nibiru",
      "coinGeckoId": ""
    },
    "ustake": {
      "name": "Stake",
      "description": "The permissioned staking asset for Noble Chain",
      "coinDenom": "STAKE",
      "coinMinimalDenom": "ustake",
      "coinDecimals": 6,
      "icon": "",
      "chain": "noble",
      "coinGeckoId": ""
    },
    "ufrienzies": {
      "name": "Frienzies",
      "description": "Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.",
      "coinDenom": "FRNZ",
      "coinMinimalDenom": "ufrienzies",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/frnz.png",
      "chain": "noble",
      "coinGeckoId": ""
    },
    "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0": {
      "name": "Atom Staking Coin",
      "description": "ATOM token on Noble",
      "coinDenom": "ATOM",
      "coinMinimalDenom": "ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/atom.svg",
      "chain": "noble",
      "coinGeckoId": "cosmos"
    },
    "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B": {
      "name": "Osmosis",
      "coinDenom": "OSMO",
      "coinMinimalDenom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
      "coinDecimals": 6,
      "chain": "quasar",
      "coinGeckoId": "osmo",
      "icon": "https://assets.leapwallet.io/osmo.svg"
    },
    "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9": {
      "name": "Atom",
      "coinDenom": "ATOM",
      "coinMinimalDenom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/atom.svg",
      "chain": "neutron",
      "coinGeckoId": "cosmos"
    },
    "usdc": {
      "name": "USD Coin",
      "description": "USD Coin",
      "coinDenom": "USDC",
      "coinMinimalDenom": "uusdc",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/usdc.svg",
      "chain": "noble",
      "coinGeckoId": "usd-coin"
    },
    "ulove": {
      "name": "Love",
      "description": "Love is a test tokenfactory asset controlled by the Strangelove Team",
      "coinDenom": "LOVE",
      "coinMinimalDenom": "ulove",
      "coinDecimals": 6,
      "icon": "",
      "chain": "noble",
      "coinGeckoId": ""
    },
    "ukyve": {
      "name": "KYVE",
      "description": "The native utility token of the KYVE network.",
      "coinDenom": "KYVE",
      "coinMinimalDenom": "ukyve",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/kyve.svg",
      "chain": "kyve1",
      "coinGeckoId": ""
    },
    "anom": {
      "name": "Nom",
      "description": "The native token of Onomy Protocol",
      "coinDenom": "NOM",
      "coinMinimalDenom": "anom",
      "coinDecimals": 18,
      "coinGeckoId": "onomy-protocol",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png",
      "chain": "onomy"
    },
    "uwhale": {
      "name": "Whale",
      "description": "The native token of Migaloo Chain",
      "coinDenom": "WHALE",
      "coinMinimalDenom": "uwhale",
      "coinDecimals": 6,
      "coinGeckoId": "white-whale",
      "icon": "https://assets.leapwallet.io/whitewhale.png",
      "chain": "migaloo"
    },
    "uqsr": {
      "name": "Quasar",
      "description": "The native token of Quasar",
      "coinDenom": "QSR",
      "coinMinimalDenom": "uqsr",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/ping-pub/explorer/master/public/logos/quasar.png",
      "chain": "quasar"
    },
    "untrn": {
      "name": "Neutron",
      "description": "The native token of Neutron chain",
      "coinDenom": "NTRN",
      "coinMinimalDenom": "untrn",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/neutron-logo.jpeg",
      "chain": "neutron"
    },
    "utestcore": {
      "name": "Coreum",
      "description": "The native token of Coreum",
      "coinDenom": "TESTCORE",
      "coinMinimalDenom": "utestcore",
      "coinDecimals": 6,
      "coinGeckoId": "core",
      "icon": "https://assets.leapwallet.io/coreum-logo.png",
      "chain": "coreum"
    },
    "ucore": {
      "name": "Coreum",
      "description": "The native token of Coreum",
      "coinDenom": "CORE",
      "coinMinimalDenom": "ucore",
      "coinDecimals": 6,
      "coinGeckoId": "core",
      "icon": "https://assets.leapwallet.io/coreum-logo.png",
      "chain": "mainCoreum"
    },
    "ubld": {
      "name": "Agoric",
      "description": "BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.",
      "coinDenom": "BLD",
      "coinMinimalDenom": "ubld",
      "coinDecimals": 6,
      "coinGeckoId": "bld",
      "icon": "https://assets.leapwallet.io/bld.png",
      "chain": "agoric"
    },
    "uist": {
      "name": "Inter Stable Token",
      "description": "IST is the stable token used by the Agoric chain for execution fees and commerce.",
      "coinDenom": "IST",
      "coinDecimals": 6,
      "coinGeckoId": "ist",
      "coinMinimalDenom": "uist",
      "icon": "https://assets.leapwallet.io/ist.png",
      "chain": "agoric"
    },
    "urun": {
      "coinDenom": "RUN",
      "coinMinimalDenom": "urun",
      "coinDecimals": 6,
      "coinGeckoId": "run",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/run.png",
      "chain": "agoric"
    },
    "uakt": {
      "name": "Akash Network",
      "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      "coinDenom": "AKT",
      "coinMinimalDenom": "uakt",
      "coinDecimals": 6,
      "coinGeckoId": "akt",
      "icon": "https://assets.leapwallet.io/akt.png",
      "chain": "akash"
    },
    "uarkh": {
      "name": "Arkh",
      "description": "The native token of Arkhadian",
      "coinDenom": "ARKH",
      "coinMinimalDenom": "uarkh",
      "coinDecimals": 6,
      "coinGeckoId": "arkh",
      "icon": "https://www.arkhadian.com/static/images/600-prism.png",
      "chain": "arkh"
    },
    "umntl": {
      "name": "AssetMantle",
      "description": "The native token of Asset Mantle",
      "coinDenom": "MNTL",
      "coinMinimalDenom": "umntl",
      "coinDecimals": 6,
      "coinGeckoId": "mntl",
      "icon": "https://assets.leapwallet.io/mntl.png",
      "chain": "assetmantle"
    },
    "uaxl": {
      "name": "Axelar",
      "description": "The native token of Axelar",
      "coinDenom": "AXL",
      "coinMinimalDenom": "uaxl",
      "coinDecimals": 6,
      "coinGeckoId": "axelar",
      "icon": "https://axelarscan.io/logos/assets/axl.png",
      "chain": "axelar"
    },
    "uusdc": {
      "name": "USD Coin",
      "description": "USD Coin",
      "coinDenom": "USDC",
      "coinMinimalDenom": "uusdc",
      "coinDecimals": 6,
      "coinGeckoId": "axlusdc",
      "icon": "https://assets.leapwallet.io/usdc.svg",
      "chain": "axelar"
    },
    "frax-wei": {
      "name": "Frax",
      "description": "Frax's fractional-algorithmic stablecoin on Axelar",
      "coinDenom": "FRAX",
      "coinMinimalDenom": "frax-wei",
      "coinDecimals": 18,
      "coinGeckoId": "frax",
      "icon": "https://assets.leapwallet.io/frax.svg",
      "chain": "axelar"
    },
    "dai-wei": {
      "name": "Dai Stablecoin",
      "description": "Dai stablecoin on Axelar",
      "coinDenom": "DAI",
      "coinMinimalDenom": "dai-wei",
      "coinDecimals": 18,
      "coinGeckoId": "dai",
      "icon": "https://assets.leapwallet.io/dai.svg",
      "chain": "axelar"
    },
    "uusdt": {
      "name": "Tether USD",
      "description": "Tether's USD stablecoin on Axelar",
      "coinDenom": "USDT",
      "coinMinimalDenom": "uusdt",
      "coinDecimals": 6,
      "coinGeckoId": "tether",
      "icon": "https://assets.leapwallet.io/usdt.svg",
      "chain": "axelar"
    },
    "weth-wei": {
      "name": "Wrapped Ether",
      "description": "Wrapped Ether on Axelar",
      "coinDenom": "WETH",
      "coinMinimalDenom": "weth-wei",
      "coinDecimals": 18,
      "coinGeckoId": "weth",
      "icon": "https://assets.leapwallet.io/weth.png",
      "chain": "axelar"
    },
    "wbtc-satoshi": {
      "name": "Wrapped Bitcoin",
      "description": "Wrapped Bitcoin on Axelar",
      "coinDenom": "WBTC",
      "coinMinimalDenom": "wbtc-satoshi",
      "coinDecimals": 8,
      "coinGeckoId": "wrapped-bitcoin",
      "icon": "https://assets.leapwallet.io/wbtc.png",
      "chain": "axelar"
    },
    "uband": {
      "name": "Band Protocol",
      "description": "The native token of BandChain",
      "coinDenom": "BAND",
      "coinMinimalDenom": "uband",
      "coinDecimals": 6,
      "coinGeckoId": "band",
      "icon": "https://assets.leapwallet.io/band.svg",
      "chain": "bandchain"
    },
    "ubcna": {
      "name": "BitCanna",
      "description": "The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.",
      "coinDenom": "BCNA",
      "coinMinimalDenom": "ubcna",
      "coinDecimals": 6,
      "coinGeckoId": "bcna",
      "icon": "https://assets.leapwallet.io/bcna.svg",
      "chain": "bitcanna"
    },
    "ubtsg": {
      "name": "BitSong",
      "description": "BitSong Native Token",
      "coinDenom": "BTSG",
      "coinMinimalDenom": "ubtsg",
      "coinDecimals": 6,
      "coinGeckoId": "btsg",
      "icon": "https://assets.leapwallet.io/bitsong.png",
      "chain": "bitsong"
    },
    "boot": {
      "name": "Bostrom",
      "description": "The staking token of Bostrom",
      "coinDenom": "BOOT",
      "coinMinimalDenom": "boot",
      "coinDecimals": 0,
      "coinGeckoId": "boot",
      "icon": "https://assets.leapwallet.io/boot.png",
      "chain": "bostrom"
    },
    "swth": {
      "name": "Carbon",
      "description": "The native governance token of Carbon",
      "coinDenom": "SWTH",
      "coinMinimalDenom": "swth",
      "coinDecimals": 8,
      "coinGeckoId": "swth",
      "icon": "https://assets.leapwallet.io/swth.svg",
      "chain": "carbon"
    },
    "ucrbrus": {
      "name": "Cerberus",
      "description": "The native token of Cerberus Chain",
      "coinDenom": "CRBRUS",
      "coinMinimalDenom": "ucrbrus",
      "coinDecimals": 6,
      "coinGeckoId": "crbrus",
      "icon": "https://assets.leapwallet.io/crbrus.png",
      "chain": "cerberus"
    },
    "ncheq": {
      "name": "cheqd",
      "description": "Native token for the cheqd network",
      "coinDenom": "CHEQ",
      "coinMinimalDenom": "ncheq",
      "coinDecimals": 9,
      "coinGeckoId": "cheq",
      "icon": "https://assets.leapwallet.io/cheq.png",
      "chain": "cheqd"
    },
    "uhuahua": {
      "name": "Chihuahua",
      "description": "The native token of Chihuahua Chain",
      "coinDenom": "HUAHUA",
      "coinMinimalDenom": "uhuahua",
      "coinDecimals": 6,
      "coinGeckoId": "huahua",
      "icon": "https://assets.leapwallet.io/huahua.png",
      "chain": "chihuahua"
    },
    "ucht": {
      "name": "Chronic Token",
      "description": "The CHT coin is the governance token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.",
      "coinDenom": "CHT",
      "coinMinimalDenom": "ucht",
      "coinDecimals": 6,
      "coinGeckoId": "cht",
      "icon": "https://assets.leapwallet.io/cht.png",
      "chain": "chronicnetwork"
    },
    "ucgas": {
      "name": "Chronic Gas",
      "description": "The CGAS coin is the transactional token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.",
      "coinDenom": "CGAS",
      "coinMinimalDenom": "ucgas",
      "coinDecimals": 6,
      "coinGeckoId": "cgas",
      "icon": "https://assets.leapwallet.io/cgas.png",
      "chain": "chronicnetwork"
    },
    "ucmdx": {
      "name": "Comdex",
      "description": "Native Token of Comdex Protocol",
      "coinDenom": "CMDX",
      "coinMinimalDenom": "ucmdx",
      "coinDecimals": 6,
      "coinGeckoId": "cmdx",
      "icon": "https://assets.leapwallet.io/cmdx.png",
      "chain": "comdex"
    },
    "uatom": {
      "name": "Atom",
      "description": "The native staking and governance token of the Cosmos Hub.",
      "coinDenom": "ATOM",
      "coinMinimalDenom": "uatom",
      "coinDecimals": 6,
      "coinGeckoId": "atom",
      "icon": "https://assets.leapwallet.io/atom.png",
      "chain": "cosmos"
    },
    "ucre": {
      "name": "Crescent",
      "description": "The native token of Crescent",
      "coinDenom": "CRE",
      "coinMinimalDenom": "ucre",
      "coinDecimals": 6,
      "coinGeckoId": "cre",
      "icon": "https://assets.leapwallet.io/cre.svg",
      "chain": "crescent"
    },
    "ubcre": {
      "name": "Bonded Crescent",
      "description": "The bonded token of Crescent",
      "coinDenom": "bCRE",
      "coinMinimalDenom": "ubcre",
      "coinDecimals": 6,
      "coinGeckoId": "liquid-staking-crescent",
      "icon": "https://assets.leapwallet.io/bCRE.svg",
      "chain": "crescent"
    },
    "basecro": {
      "name": "Cronos",
      "description": "CRO coin is the token for the Crypto.com platform.",
      "coinDenom": "CRO",
      "coinMinimalDenom": "basecro",
      "coinDecimals": 8,
      "coinGeckoId": "cro",
      "icon": "https://assets.leapwallet.io/cronos.png",
      "chain": "cryptoorgchain"
    },
    "acudos": {
      "name": "Cudos",
      "description": "The native token of the Cudos blockchain",
      "coinDenom": "CUDOS",
      "coinMinimalDenom": "acudos",
      "coinDecimals": 18,
      "coinGeckoId": "cudos",
      "icon": "https://assets.leapwallet.io/cudos.svg",
      "chain": "cudos"
    },
    "udec": {
      "name": "Decentr",
      "description": "The native token of Decentr",
      "coinDenom": "DEC",
      "coinMinimalDenom": "udec",
      "coinDecimals": 6,
      "coinGeckoId": "dec",
      "icon": "https://assets.leapwallet.io/dec.png",
      "chain": "decentr"
    },
    "udsm": {
      "name": "Desmos",
      "description": "The native token of Desmos",
      "coinDenom": "DSM",
      "coinMinimalDenom": "udsm",
      "coinDecimals": 6,
      "coinGeckoId": "dsm",
      "icon": "https://assets.leapwallet.io/dsm.svg",
      "chain": "desmos"
    },
    "udig": {
      "name": "Dig Chain",
      "description": "Native token of Dig Chain",
      "coinDenom": "DIG",
      "coinMinimalDenom": "udig",
      "coinDecimals": 6,
      "coinGeckoId": "dig",
      "icon": "https://assets.leapwallet.io/dig.png",
      "chain": "dig"
    },
    "aechelon": {
      "name": "Echelon",
      "description": "Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics",
      "coinDenom": "ECH",
      "coinMinimalDenom": "aechelon",
      "coinDecimals": 18,
      "coinGeckoId": "echelon",
      "icon": "https://assets.leapwallet.io/ech.png",
      "chain": "echelon"
    },
    "ungm": {
      "name": "e-Money",
      "description": "e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.",
      "coinDenom": "NGM",
      "coinMinimalDenom": "ungm",
      "coinDecimals": 6,
      "coinGeckoId": "ngm",
      "icon": "https://assets.leapwallet.io/ngm.png",
      "chain": "emoney"
    },
    "unls": {
      "name": "Nolus",
      "description": "Native token of Nolus Chain",
      "coinDenom": "NLS",
      "coinMinimalDenom": "unls",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/nolus.svg",
      "chain": "nolus",
      "coinGeckoId": ""
    },
    "eeur": {
      "name": "e-Money EUR",
      "description": "e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.",
      "coinDenom": "EEUR",
      "coinMinimalDenom": "eeur",
      "coinDecimals": 6,
      "coinGeckoId": "eeur",
      "icon": "https://assets.leapwallet.io/eeur.png",
      "chain": "emoney"
    },
    "aevmos": {
      "name": "Evmos",
      "description": "The native EVM, governance and staking token of the Evmos Hub",
      "coinDenom": "EVMOS",
      "coinMinimalDenom": "aevmos",
      "coinDecimals": 18,
      "coinGeckoId": "evmos",
      "icon": "https://assets.leapwallet.io/evmos.svg",
      "chain": "evmos"
    },
    "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9": {
      "name": "NEOKingdom DAO",
      "description": "NEOKingdom DAO",
      "coinDenom": "NEOK",
      "coinMinimalDenom": "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9",
      "coinDecimals": 18,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/neok.png",
      "chain": "evmos"
    },
    "afet": {
      "name": "fetch-ai",
      "description": "The native staking and governance token of the Fetch Hub.",
      "coinDenom": "FET",
      "coinMinimalDenom": "afet",
      "coinDecimals": 18,
      "coinGeckoId": "fet",
      "icon": "https://assets.leapwallet.io/fet.png",
      "chain": "fetchhub"
    },
    "nanomobx": {
      "name": "MOBIX",
      "description": "The MOBX coin rewards the use of eco-friendly micromobility transportation.",
      "coinDenom": "MOBX",
      "coinMinimalDenom": "nanomobx",
      "coinDecimals": 9,
      "coinGeckoId": "mobx",
      "icon": "https://assets.leapwallet.io/mobx.svg",
      "chain": "fetchhub"
    },
    "ufct": {
      "name": "FirmaChain",
      "description": "The native token of FirmaChain",
      "coinDenom": "FCT",
      "coinMinimalDenom": "ufct",
      "coinDecimals": 6,
      "coinGeckoId": "fct",
      "icon": "https://assets.leapwallet.io/fct.svg",
      "chain": "firmachain"
    },
    "uglx": {
      "name": "Galaxy",
      "description": "GLX is the staking token of the Galaxy Chain",
      "coinDenom": "GLX",
      "coinMinimalDenom": "uglx",
      "coinDecimals": 6,
      "coinGeckoId": "glx",
      "icon": "https://assets.leapwallet.io/glx.svg",
      "chain": "galaxy"
    },
    "el1": {
      "name": "GenesisL1",
      "description": "L1 coin is the GenesisL1 blockchain utility, governance and EVM token",
      "coinDenom": "L1",
      "coinMinimalDenom": "el1",
      "coinDecimals": 18,
      "coinGeckoId": "l1",
      "icon": "https://assets.leapwallet.io/l1.svg",
      "chain": "genesisl1"
    },
    "ugraviton": {
      "name": "Graviton",
      "description": "The native token of Gravity Bridge",
      "coinDenom": "GRAV",
      "coinMinimalDenom": "ugraviton",
      "coinDecimals": 6,
      "coinGeckoId": "grav",
      "icon": "https://assets.leapwallet.io/grav.svg",
      "chain": "gravitybridge"
    },
    "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006": {
      "name": "pSTAKE Finance",
      "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
      "coinDenom": "PSTAKE",
      "coinMinimalDenom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
      "coinDecimals": 18,
      "coinGeckoId": "pstake",
      "icon": "https://assets.leapwallet.io/pstake.png",
      "chain": "gravitybridge"
    },
    "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
      "name": "Wrapped Ethereum",
      "description": "Gravity Bridge WETH",
      "coinDenom": "WETH",
      "coinMinimalDenom": "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      "coinDecimals": 18,
      "coinGeckoId": "weth",
      "icon": "https://assets.leapwallet.io/weth.svg",
      "chain": "gravitybridge"
    },
    "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
      "name": "USD Coin",
      "description": "Gravity Bridge USDC",
      "coinDenom": "USDC",
      "coinMinimalDenom": "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "coinDecimals": 6,
      "coinGeckoId": "usd-coin",
      "icon": "https://assets.leapwallet.io/usdc.svg",
      "chain": "gravitybridge"
    },
    "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7": {
      "name": "Tether USD",
      "description": "Gravity Bridge USDT",
      "coinDenom": "USDT",
      "coinMinimalDenom": "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "coinDecimals": 6,
      "coinGeckoId": "tether",
      "icon": "https://assets.leapwallet.io/usdt.svg",
      "chain": "gravitybridge"
    },
    "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
      "name": "Wrapped Bitcoin",
      "description": "Gravity Bridge WBTC",
      "coinDenom": "WBTC",
      "coinMinimalDenom": "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      "coinDecimals": 8,
      "coinGeckoId": "wrapped-bitcoin",
      "icon": "https://assets.leapwallet.io/wbtc.svg",
      "chain": "gravitybridge"
    },
    "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F": {
      "name": "Dai Stablecoin",
      "description": "Gravity Bridge DAI",
      "coinDenom": "DAI",
      "coinMinimalDenom": "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
      "coinDecimals": 18,
      "coinGeckoId": "dai",
      "icon": "https://assets.leapwallet.io/dai.svg",
      "chain": "gravitybridge"
    },
    "idep": {
      "name": "IDEP",
      "description": "The native token of IDEP chain",
      "coinDenom": "IDEP",
      "coinMinimalDenom": "idep",
      "coinDecimals": 6,
      "coinGeckoId": "IDEP",
      "icon": "https://assets.leapwallet.io/idep.svg",
      "chain": "idep"
    },
    "uixo": {
      "name": "IXO",
      "description": "The native token of IXO Chain",
      "coinDenom": "IXO",
      "coinMinimalDenom": "uixo",
      "coinDecimals": 6,
      "coinGeckoId": "ixo",
      "icon": "https://assets.leapwallet.io/ixo.png",
      "chain": "impacthub"
    },
    "inj": {
      "name": "Injective",
      "description": "The INJ token is the native governance token for the Injective chain.",
      "coinDenom": "INJ",
      "coinMinimalDenom": "inj",
      "coinDecimals": 18,
      "coinGeckoId": "inj",
      "icon": "https://assets.leapwallet.io/inj.png",
      "chain": "injective"
    },
    "uiris": {
      "name": "IRISnet",
      "description": "The IRIS token is the native governance token for the IrisNet chain.",
      "coinDenom": "IRIS",
      "coinMinimalDenom": "uiris",
      "coinDecimals": 6,
      "coinGeckoId": "iris",
      "icon": "https://assets.leapwallet.io/iris.png",
      "chain": "irisnet"
    },
    "ujuno": {
      "name": "Juno",
      "description": "The native token of JUNO Chain",
      "coinDenom": "JUNO",
      "coinMinimalDenom": "ujuno",
      "coinDecimals": 6,
      "coinGeckoId": "juno",
      "icon": "https://assets.leapwallet.io/juno.svg",
      "chain": "juno"
    },
    "ukava": {
      "name": "Kava",
      "description": "The native staking and governance token of Kava",
      "coinDenom": "KAVA",
      "coinMinimalDenom": "ukava",
      "coinDecimals": 6,
      "coinGeckoId": "kava",
      "icon": "https://assets.leapwallet.io/kava.png",
      "chain": "kava"
    },
    "hard": {
      "name": "Hard",
      "description": "Governance token of Kava Lend Protocol",
      "coinDenom": "HARD",
      "coinMinimalDenom": "hard",
      "coinDecimals": 6,
      "coinGeckoId": "HARD",
      "icon": "https://assets.leapwallet.io/hard.svg",
      "chain": "kava"
    },
    "swp": {
      "name": "Swap",
      "description": "Governance token of Kava Swap Protocol",
      "coinDenom": "SWP",
      "coinMinimalDenom": "swp",
      "coinDecimals": 6,
      "coinGeckoId": "SWP",
      "icon": "https://assets.leapwallet.io/swp.svg",
      "chain": "kava"
    },
    "uxki": {
      "name": "Ki",
      "description": "The native token of Ki Chain",
      "coinDenom": "XKI",
      "coinMinimalDenom": "uxki",
      "coinDecimals": 6,
      "coinGeckoId": "xki",
      "icon": "https://assets.leapwallet.io/xki.svg",
      "chain": "kichain"
    },
    "udarc": {
      "name": "DARC",
      "description": "The native token of Konstellation Network",
      "coinDenom": "DARC",
      "coinMinimalDenom": "udarc",
      "coinDecimals": 6,
      "coinGeckoId": "darc",
      "icon": "https://assets.leapwallet.io/darc.svg",
      "chain": "konstellation"
    },
    "ukuji": {
      "name": "Kuji",
      "description": "The native staking and governance token of the Kujira chain.",
      "coinDenom": "KUJI",
      "coinMinimalDenom": "ukuji",
      "coinDecimals": 6,
      "coinGeckoId": "kuji",
      "icon": "https://assets.leapwallet.io/kuji.png",
      "chain": "kujira"
    },
    "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk": {
      "name": "USK",
      "description": "The native over-collateralized stablecoin from the Kujira chain.",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png",
      "coinDenom": "USK",
      "coinMinimalDenom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      "coinDecimals": 6,
      "coinGeckoId": "usk",
      "chain": "kujira"
    },
    "nanolike": {
      "name": "LikeCoin",
      "description": "LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.",
      "coinDenom": "LIKE",
      "coinMinimalDenom": "nanolike",
      "coinDecimals": 9,
      "coinGeckoId": "like",
      "icon": "https://assets.leapwallet.io/like.svg",
      "chain": "likecoin"
    },
    "aLYT": {
      "name": "LYT",
      "description": "The native token of Logos",
      "coinDenom": "LYT",
      "coinMinimalDenom": "aLYT",
      "coinDecimals": 18,
      "coinGeckoId": "LYT",
      "icon": "https://assets.leapwallet.io/lyt.svg",
      "chain": "logos"
    },
    "ulore": {
      "name": "LORE",
      "coinDenom": "LORE",
      "description": "Native token of the Gitopia Network",
      "coinMinimalDenom": "ulore",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/gitopia.png",
      "chain": "gitopia",
      "coinGeckoId": "gitopia"
    },
    "ulum": {
      "name": "Lum",
      "description": "Native token of the Lum Network",
      "coinDenom": "LUM",
      "coinMinimalDenom": "ulum",
      "coinDecimals": 6,
      "coinGeckoId": "lum",
      "icon": "https://assets.leapwallet.io/lum.svg",
      "chain": "lumnetwork"
    },
    "umeme": {
      "name": "MEME",
      "description": "MEME Token (MEME) is the native staking token of the MEME Chain",
      "coinDenom": "MEME",
      "coinMinimalDenom": "umeme",
      "coinDecimals": 6,
      "coinGeckoId": "meme",
      "icon": "https://assets.leapwallet.io/meme.svg",
      "chain": "meme"
    },
    "utick": {
      "name": "Microtick",
      "description": "TICK coin is the token for the Microtick Price Discovery & Oracle App",
      "coinDenom": "TICK",
      "coinMinimalDenom": "utick",
      "coinDecimals": 6,
      "coinGeckoId": "tick",
      "icon": "https://assets.leapwallet.io/tick.svg",
      "chain": "microtick"
    },
    "aMYT": {
      "name": "MYT",
      "description": "The native token of Mythos",
      "coinDenom": "MYT",
      "coinMinimalDenom": "aMYT",
      "coinDecimals": 18,
      "coinGeckoId": "MYT",
      "icon": "https://assets.leapwallet.io/mythos.svg",
      "chain": "mythos"
    },
    "uocta": {
      "name": "Octa",
      "description": "The native token of Octa Chain",
      "coinDenom": "OCTA",
      "coinMinimalDenom": "uocta",
      "coinDecimals": 6,
      "coinGeckoId": "octa",
      "icon": "https://assets.leapwallet.io/octa.svg",
      "chain": "octa"
    },
    "loki": {
      "name": "ODIN",
      "description": "Staking and goverance token for ODIN Protocol",
      "coinDenom": "ODIN",
      "coinMinimalDenom": "loki",
      "coinDecimals": 6,
      "coinGeckoId": "odin",
      "icon": "https://assets.leapwallet.io/odin.svg",
      "chain": "odin"
    },
    "uflix": {
      "name": "Flix",
      "description": "The native staking token of OmniFlix Hub.",
      "coinDenom": "FLIX",
      "coinMinimalDenom": "uflix",
      "coinDecimals": 6,
      "coinGeckoId": "omniflix-network",
      "icon": "https://assets.leapwallet.io/flix.png",
      "chain": "omniflix"
    },
    "uorai": {
      "name": "Oraichain",
      "description": "The native token of Oraichain",
      "coinDenom": "ORAI",
      "coinMinimalDenom": "uorai",
      "coinDecimals": 6,
      "coinGeckoId": "orai",
      "icon": "https://assets.leapwallet.io/orai.svg",
      "chain": "oraichain"
    },
    "uosmo": {
      "name": "Osmosis",
      "description": "The native token of Osmosis",
      "coinDenom": "OSMO",
      "coinMinimalDenom": "uosmo",
      "coinDecimals": 6,
      "coinGeckoId": "osmo",
      "icon": "https://assets.leapwallet.io/osmo.svg",
      "chain": "osmosis"
    },
    "uion": {
      "name": "Ion",
      "coinDenom": "ION",
      "coinMinimalDenom": "uion",
      "coinDecimals": 6,
      "coinGeckoId": "ion",
      "icon": "https://assets.leapwallet.io/ion.svg",
      "chain": "osmosis"
    },
    "umed": {
      "name": "MediBloc",
      "description": "Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem",
      "coinDenom": "MED",
      "coinMinimalDenom": "umed",
      "coinDecimals": 6,
      "coinGeckoId": "med",
      "icon": "https://assets.leapwallet.io/med.png",
      "chain": "panacea"
    },
    "uxprt": {
      "name": "Persistence",
      "description": "The XPRT token is primarily a governance token for the Persistence chain.",
      "coinDenom": "XPRT",
      "coinMinimalDenom": "uxprt",
      "coinDecimals": 6,
      "coinGeckoId": "xprt",
      "icon": "https://assets.leapwallet.io/xprt.png",
      "chain": "persistence"
    },
    "nhash": {
      "name": "Hash",
      "description": "Hash is the staking token of the Provenance Blockchain",
      "coinDenom": "HASH",
      "coinMinimalDenom": "nhash",
      "coinDecimals": 9,
      "coinGeckoId": "hash",
      "icon": "https://assets.leapwallet.io/hash.svg",
      "chain": "provenance"
    },
    "uqstars": {
      "name": "qSTARS",
      "description": "Quicksilver Liquid Staked STARS",
      "coinDenom": "qSTARS",
      "coinMinimalDenom": "uqstars",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png",
      "chain": "quicksilver"
    },
    "uqregen": {
      "name": "qRegen",
      "description": "Quicksilver Liquid Staked REGEN",
      "coinDenom": "qREGEN",
      "coinMinimalDenom": "uqregen",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png",
      "chain": "quicksilver"
    },
    "uqck": {
      "name": "Quicksilver",
      "description": "QCK - native token of Quicksilver",
      "coinDenom": "QCK",
      "coinMinimalDenom": "uqck",
      "coinDecimals": 6,
      "coinGeckoId": "quicksilver",
      "icon": "https://assets.leapwallet.io/qck.png",
      "chain": "quicksilver"
    },
    "uqatom": {
      "name": "qATOM",
      "description": "Quicksilver Liquid Staked ATOM",
      "coinDenom": "qATOM",
      "coinMinimalDenom": "uqatom",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png",
      "chain": "quicksilver"
    },
    "uqosmo": {
      "name": "qOSMO",
      "description": "Quicksilver Liquid Staked OSMO",
      "coinDenom": "qOSMO",
      "coinMinimalDenom": "uqosmo",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png",
      "chain": "quicksilver"
    },
    "uregen": {
      "name": "Regen Network",
      "description": "REGEN coin is the token for the Regen Network Platform",
      "coinDenom": "REGEN",
      "coinMinimalDenom": "uregen",
      "coinDecimals": 6,
      "coinGeckoId": "regen",
      "icon": "https://assets.leapwallet.io/regen.png",
      "chain": "regen"
    },
    "uatolo": {
      "name": "Rizon Chain",
      "description": "Native token of Rizon Chain",
      "coinDenom": "ATOLO",
      "coinMinimalDenom": "uatolo",
      "coinDecimals": 6,
      "coinGeckoId": "atolo",
      "icon": "https://assets.leapwallet.io/atolo.svg",
      "chain": "rizon"
    },
    "uscrt": {
      "name": "Secret Network",
      "description": "The native token of Secret Network",
      "coinDenom": "SCRT",
      "coinMinimalDenom": "uscrt",
      "coinDecimals": 6,
      "coinGeckoId": "scrt",
      "icon": "https://assets.leapwallet.io/scrt.svg",
      "chain": "secret"
    },
    "udvpn": {
      "name": "Sentinel",
      "description": "DVPN is the native token of the Sentinel Hub.",
      "coinDenom": "DVPN",
      "coinMinimalDenom": "udvpn",
      "coinDecimals": 6,
      "coinGeckoId": "dvpn",
      "icon": "https://assets.leapwallet.io/dvpn.png",
      "chain": "sentinel"
    },
    "uctk": {
      "name": "Shentu",
      "description": "The native token of Shentu",
      "coinDenom": "CTK",
      "coinMinimalDenom": "uctk",
      "coinDecimals": 6,
      "coinGeckoId": "ctk",
      "icon": "https://assets.leapwallet.io/ctk.png",
      "chain": "shentu"
    },
    "rowan": {
      "name": "Sifchain Rowan",
      "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
      "coinDenom": "ROWAN",
      "coinMinimalDenom": "rowan",
      "coinDecimals": 18,
      "coinGeckoId": "erowan",
      "icon": "https://assets.leapwallet.io/rowan.svg",
      "chain": "sifchain"
    },
    "usomm": {
      "name": "Somm",
      "description": "Somm Token (SOMM) is the native staking token of the Sommelier Chain",
      "coinDenom": "SOMM",
      "coinMinimalDenom": "usomm",
      "coinDecimals": 6,
      "coinGeckoId": "somm",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg",
      "chain": "sommelier"
    },
    "ustars": {
      "name": "Stargaze",
      "description": "The native token of Stargaze",
      "coinDenom": "STARS",
      "coinMinimalDenom": "ustars",
      "coinDecimals": 6,
      "coinGeckoId": "stars",
      "icon": "https://assets.leapwallet.io/stars.png",
      "chain": "stargaze"
    },
    "uiov": {
      "name": "Starname",
      "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
      "coinDenom": "IOV",
      "coinMinimalDenom": "uiov",
      "coinDecimals": 6,
      "coinGeckoId": "iov",
      "icon": "https://assets.leapwallet.io/iov.svg",
      "chain": "starname"
    },
    "uluna": {
      "name": "Luna",
      "description": "The native staking token of Terra.",
      "coinDenom": "LUNA",
      "coinMinimalDenom": "uluna",
      "coinDecimals": 6,
      "coinGeckoId": "luna",
      "icon": "https://assets.leapwallet.io/luna.png",
      "chain": "terra"
    },
    "lunc": {
      "name": "Luna Classic",
      "description": "The native staking token of Terra Classic.",
      "coinDenom": "LUNC",
      "coinMinimalDenom": "uluna",
      "coinDecimals": 6,
      "coinGeckoId": "terra-luna",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg",
      "chain": "terra"
    },
    "ukrw": {
      "name": "TerraClassicKRW",
      "description": "The KRW stablecoin of Terra Classic.",
      "coinDenom": "KRTC",
      "coinMinimalDenom": "ukrw",
      "coinDecimals": 6,
      "coinGeckoId": "krt",
      "icon": "https://assets.leapwallet.io/krt.svg",
      "chain": "terra"
    },
    "uaud": {
      "name": "TerraClassicAUD",
      "description": "The AUD stablecoin of Terra Classic.",
      "coinDenom": "AUTC",
      "coinMinimalDenom": "uaud",
      "coinDecimals": 6,
      "coinGeckoId": "aut",
      "icon": "https://assets.leapwallet.io/aut.svg",
      "chain": "terra"
    },
    "ucad": {
      "name": "TerraClassicCAD",
      "description": "The CAD stablecoin of Terra Classic.",
      "coinDenom": "CATC",
      "coinMinimalDenom": "ucad",
      "coinDecimals": 6,
      "coinGeckoId": "cat",
      "icon": "https://assets.leapwallet.io/cat.svg",
      "chain": "terra"
    },
    "uchf": {
      "name": "TerraClassicCHF",
      "description": "The CHF stablecoin of Terra Classic.",
      "coinDenom": "CHTC",
      "coinMinimalDenom": "uchf",
      "coinDecimals": 6,
      "coinGeckoId": "cht",
      "icon": "https://assets.leapwallet.io/cht.svg",
      "chain": "terra"
    },
    "ucny": {
      "name": "TerraClassicCNY",
      "description": "The CNY stablecoin of Terra Classic.",
      "coinDenom": "CNTC",
      "coinMinimalDenom": "ucny",
      "coinDecimals": 6,
      "coinGeckoId": "cnt",
      "icon": "https://assets.leapwallet.io/cnt.svg",
      "chain": "terra"
    },
    "udkk": {
      "name": "TerraClassicDKK",
      "description": "The DKK stablecoin of Terra Classic.",
      "coinDenom": "DKTC",
      "coinMinimalDenom": "udkk",
      "coinDecimals": 6,
      "coinGeckoId": "dkt",
      "icon": "https://assets.leapwallet.io/dkt.svg",
      "chain": "terra"
    },
    "ueur": {
      "name": "TerraClassicEUR",
      "description": "The EUR stablecoin of Terra Classic.",
      "coinDenom": "EUTC",
      "coinMinimalDenom": "ueur",
      "coinDecimals": 6,
      "coinGeckoId": "eut",
      "icon": "https://assets.leapwallet.io/eut.svg",
      "chain": "terra"
    },
    "ugbp": {
      "name": "TerraClassicGBP",
      "description": "The GBP stablecoin of Terra Classic.",
      "coinDenom": "GBTC",
      "coinMinimalDenom": "ugbp",
      "coinDecimals": 6,
      "coinGeckoId": "gbt",
      "icon": "https://assets.leapwallet.io/gbt.svg",
      "chain": "terra"
    },
    "uhkd": {
      "name": "TerraClassicHKD",
      "description": "The HKD stablecoin of Terra Classic.",
      "coinDenom": "HKTC",
      "coinMinimalDenom": "uhkd",
      "coinDecimals": 6,
      "coinGeckoId": "hkt",
      "icon": "https://assets.leapwallet.io/hkt.svg",
      "chain": "terra"
    },
    "uidr": {
      "name": "TerraClassicIDR",
      "description": "The IDR stablecoin of Terra Classic.",
      "coinDenom": "IDTC",
      "coinMinimalDenom": "uidr",
      "coinDecimals": 6,
      "coinGeckoId": "idt",
      "icon": "https://assets.leapwallet.io/idt.svg",
      "chain": "terra"
    },
    "uinr": {
      "name": "TerraClassicINR",
      "description": "The INR stablecoin of Terra Classic.",
      "coinDenom": "INTC",
      "coinMinimalDenom": "uinr",
      "coinDecimals": 6,
      "coinGeckoId": "int",
      "icon": "https://assets.leapwallet.io/int.svg",
      "chain": "terra"
    },
    "ujpy": {
      "name": "TerraClassicJPY",
      "description": "The JPY stablecoin of Terra Classic.",
      "coinDenom": "JPTC",
      "coinMinimalDenom": "ujpy",
      "coinDecimals": 6,
      "coinGeckoId": "jpt",
      "icon": "https://assets.leapwallet.io/jpt.svg",
      "chain": "terra"
    },
    "umnt": {
      "name": "TerraClassicMNT",
      "description": "The MNT stablecoin of Terra Classic.",
      "coinDenom": "MNTC",
      "coinMinimalDenom": "umnt",
      "coinDecimals": 6,
      "coinGeckoId": "mnt",
      "icon": "https://assets.leapwallet.io/mnt.svg",
      "chain": "terra"
    },
    "umyr": {
      "name": "TerraClassicMYR",
      "description": "The MYR stablecoin of Terra Classic.",
      "coinDenom": "MYTC",
      "coinMinimalDenom": "umyr",
      "coinDecimals": 6,
      "coinGeckoId": "myt",
      "icon": "https://assets.leapwallet.io/myt.svg",
      "chain": "terra"
    },
    "unok": {
      "name": "TerraClassicNOK",
      "description": "The NOK stablecoin of Terra Classic.",
      "coinDenom": "NOTC",
      "coinMinimalDenom": "unok",
      "coinDecimals": 6,
      "coinGeckoId": "not",
      "icon": "https://assets.leapwallet.io/not.svg",
      "chain": "terra"
    },
    "uphp": {
      "name": "TerraClassicPHP",
      "description": "The PHP stablecoin of Terra Classic.",
      "coinDenom": "PHTC",
      "coinMinimalDenom": "uphp",
      "coinDecimals": 6,
      "coinGeckoId": "pht",
      "icon": "https://assets.leapwallet.io/pht.svg",
      "chain": "terra"
    },
    "usdr": {
      "name": "TerraClassicSDR",
      "description": "The SDR stablecoin of Terra Classic.",
      "coinDenom": "SDTC",
      "coinMinimalDenom": "usdr",
      "coinDecimals": 6,
      "coinGeckoId": "sdt",
      "icon": "https://assets.leapwallet.io/sdt.svg",
      "chain": "terra"
    },
    "usek": {
      "name": "TerraClassicSEK",
      "description": "The SEK stablecoin of Terra Classic.",
      "coinDenom": "SETC",
      "coinMinimalDenom": "usek",
      "coinDecimals": 6,
      "coinGeckoId": "set",
      "icon": "https://assets.leapwallet.io/set.svg",
      "chain": "terra"
    },
    "usgd": {
      "name": "TerraClassicSGD",
      "description": "The SGD stablecoin of Terra Classic.",
      "coinDenom": "SGTC",
      "coinMinimalDenom": "usgd",
      "coinDecimals": 6,
      "coinGeckoId": "sgt",
      "icon": "https://assets.leapwallet.io/sgt.svg",
      "chain": "terra"
    },
    "uthb": {
      "name": "TerraClassicTHB",
      "description": "The THB stablecoin of Terra Classic.",
      "coinDenom": "THTC",
      "coinMinimalDenom": "uthb",
      "coinDecimals": 6,
      "coinGeckoId": "tht",
      "icon": "https://assets.leapwallet.io/tht.svg",
      "chain": "terra"
    },
    "utwd": {
      "name": "TerraClassicTWD",
      "description": "The TWD stablecoin of Terra Classic.",
      "coinDenom": "TWTC",
      "coinMinimalDenom": "utwd",
      "coinDecimals": 6,
      "coinGeckoId": "twt",
      "icon": "https://assets.leapwallet.io/twt.svg",
      "chain": "terra"
    },
    "uumee": {
      "name": "Umee",
      "description": "The native token of Umee",
      "coinDenom": "UMEE",
      "coinMinimalDenom": "uumee",
      "coinDecimals": 6,
      "coinGeckoId": "umee",
      "icon": "https://assets.leapwallet.io/umee.png",
      "chain": "umee"
    },
    "uvdl": {
      "name": "Vidulum",
      "description": "The native token of Vidulum",
      "coinDenom": "VDL",
      "coinMinimalDenom": "uvdl",
      "coinDecimals": 6,
      "coinGeckoId": "vdl",
      "icon": "https://assets.leapwallet.io/vdl.svg",
      "chain": "vidulum"
    },
    "ujunox": {
      "name": "Juno Testnet",
      "description": "The native token of JUNO Chain",
      "coinDenom": "JUNO",
      "coinMinimalDenom": "ujunox",
      "coinDecimals": 6,
      "coinGeckoId": "juno",
      "icon": "https://assets.leapwallet.io/juno.svg",
      "chain": "juno"
    },
    "umars": {
      "name": "Mars",
      "description": "Mars protocol token",
      "coinDenom": "MARS",
      "coinMinimalDenom": "umars",
      "coinDecimals": 6,
      "coinGeckoId": "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
      "icon": "https://marsprotocol.io/MARSTokenMini.svg",
      "chain": "mars"
    },
    "usei": {
      "name": "Sei",
      "description": "The native staking and governance token of the Atlantic testnet version of Sei.",
      "coinDenom": "SEI",
      "coinMinimalDenom": "usei",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/sei.png",
      "chain": "sei",
      "coinGeckoId": "sei"
    },
    "factory/sei1466nf3zuxpya8q9emxukd7vftaf6h4psr0a07srl5zw74zh84yjqpeheyc/uust2": {
      "icon": "https://trade.vortexprotocol.io/images/tokens/UST2.png",
      "coinDenom": "UST2",
      "coinMinimalDenom": "factory/sei1466nf3zuxpya8q9emxukd7vftaf6h4psr0a07srl5zw74zh84yjqpeheyc/uust2",
      "coinDecimals": 6,
      "coinGeckoId": "ust2",
      "chain": "sei"
    },
    "factory/sei1jdppe6fnj2q7hjsepty5crxtrryzhuqsjrj95y/uust2": {
      "icon": "https://trade.vortexprotocol.io/images/tokens/UST2.png",
      "coinDenom": "UST2",
      "coinMinimalDenom": "factory/sei1jdppe6fnj2q7hjsepty5crxtrryzhuqsjrj95y/uust2",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "chain": "seiTestnet2"
    },
    "factory/sei1jdppe6fnj2q7hjsepty5crxtrryzhuqsjrj95y/psei": {
      "icon": "",
      "coinDenom": "PSEI",
      "coinMinimalDenom": "factory/sei1jdppe6fnj2q7hjsepty5crxtrryzhuqsjrj95y/psei",
      "coinDecimals": 0,
      "coinGeckoId": "",
      "chain": "seiTestnet2"
    },
    "factory/sei135mlnw9ndkyglgx7ma95pw22cl64mpnw58pfpd/usdc": {
      "name": "Test USDC",
      "coinDenom": "USDC",
      "coinMinimalDenom": "factory/sei135mlnw9ndkyglgx7ma95pw22cl64mpnw58pfpd/usdc",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/usdc-factor.png",
      "chain": "seiTestnet2",
      "coinGeckoId": ""
    },
    "factory/sei1rrhh4syyqsl4gtml0t55mcmt34x98gne23fgk3hsas0pjfw2mhyqhz5rxq/FABLE": {
      "name": "Fable",
      "coinDenom": "FABLE",
      "coinMinimalDenom": "factory/sei1rrhh4syyqsl4gtml0t55mcmt34x98gne23fgk3hsas0pjfw2mhyqhz5rxq/FABLE",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/fable.png",
      "chain": "seiTestnet2"
    },
    "factory/sei1h3ukufh4lhacftdf6kyxzum4p86rcnel35v4jk/usdt": {
      "name": "Usdt",
      "coinDenom": "USDT",
      "coinMinimalDenom": "factory/sei1h3ukufh4lhacftdf6kyxzum4p86rcnel35v4jk/usdt",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "",
      "chain": "seiTestnet2"
    },
    "factory/sei1dreru8834gk69045rxha0rkfle5azrqdqr07md/SEN": {
      "name": "SenSei",
      "coinDenom": "SEN",
      "coinMinimalDenom": "factory/sei1dreru8834gk69045rxha0rkfle5azrqdqr07md/SEN",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/sensei.png",
      "chain": "seiTestnet2"
    },
    "factory/sei135mlnw9ndkyglgx7ma95pw22cl64mpnw58pfpd/upepe": {
      "name": "Pepe",
      "coinDenom": "PEPE",
      "coinMinimalDenom": "factory/sei135mlnw9ndkyglgx7ma95pw22cl64mpnw58pfpd/upepe",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/pepe.png",
      "chain": "seiTestnet2"
    },
    "factory/sei135mlnw9ndkyglgx7ma95pw22cl64mpnw58pfpd/usponge": {
      "name": "SpongeBob",
      "coinDenom": "SPONGE",
      "coinMinimalDenom": "factory/sei135mlnw9ndkyglgx7ma95pw22cl64mpnw58pfpd/usponge",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/sponge.jpg",
      "chain": "seiTestnet2"
    },
    "factory/sei1j8xuxg6wzuphmplqjwh9kgpa394h235j8gt6p9/susd": {
      "name": "Simba USD",
      "coinDenom": "SUSD",
      "coinMinimalDenom": "factory/sei1j8xuxg6wzuphmplqjwh9kgpa394h235j8gt6p9/susd",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/susd.jpg",
      "chain": "seiTestnet2"
    },
    "factory/sei1j8xuxg6wzuphmplqjwh9kgpa394h235j8gt6p9/doge": {
      "name": "Doge",
      "coinDenom": "DOGE",
      "coinMinimalDenom": "factory/sei1j8xuxg6wzuphmplqjwh9kgpa394h235j8gt6p9/doge",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "",
      "chain": "seiTestnet2"
    },
    "factory/sei1j8xuxg6wzuphmplqjwh9kgpa394h235j8gt6p9/pepe": {
      "coinDenom": "PEPE",
      "coinMinimalDenom": "factory/sei1j8xuxg6wzuphmplqjwh9kgpa394h235j8gt6p9/pepe",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "",
      "chain": "seiTestnet2"
    },
    "factory/sei1dkdwdvknx0qav5cp5kw68mkn3r99m3svkyjfvkztwh97dv2lm0ksj6xrak/8QZuMFhH8FYUGpJNs9YhtuEm76pEzo4NjAYQiYM1vY8y": {
      "name": "Wrapped MATIC",
      "coinDenom": "WMATIC",
      "coinMinimalDenom": "factory/sei1dkdwdvknx0qav5cp5kw68mkn3r99m3svkyjfvkztwh97dv2lm0ksj6xrak/8QZuMFhH8FYUGpJNs9YhtuEm76pEzo4NjAYQiYM1vY8y",
      "coinDecimals": 8,
      "coinGeckoId": "",
      "icon": "https://lh3.googleusercontent.com/u/1/drive-viewer/AFGJ81qvNYB9tys84hrdQN9eP2ngTJ7HuUANrOvb2NWV_bQ4SIe1nWJ_VqO45BqfBIzJJ-V-iajuTXuxgMLfXAfVCYkFemftjg=w2742-h1600",
      "chain": "seiTestnet2"
    },
    "factory/sei1dkdwdvknx0qav5cp5kw68mkn3r99m3svkyjfvkztwh97dv2lm0ksj6xrak/GotfBk8VUDfbqgTJgF1nhV7bfZgUxfWiwADNLKv5PEMS": {
      "name": "Wrapped SOL",
      "coinDenom": "WSOL",
      "coinMinimalDenom": "factory/sei1dkdwdvknx0qav5cp5kw68mkn3r99m3svkyjfvkztwh97dv2lm0ksj6xrak/GotfBk8VUDfbqgTJgF1nhV7bfZgUxfWiwADNLKv5PEMS",
      "coinDecimals": 8,
      "coinGeckoId": "",
      "icon": "https://lh3.googleusercontent.com/u/1/drive-viewer/AFGJ81oEfiL0Cm1TKFY8qqdCaNHwnaJW0SGJzQH4Z0NPa6k5-jZ14sWxrar_T3jRuFnDmNv4ID-lM9jygmqmyvFjFDjM1m_azw=w2742-h1600",
      "chain": "seiTestnet2"
    },
    "factory/sei1dkdwdvknx0qav5cp5kw68mkn3r99m3svkyjfvkztwh97dv2lm0ksj6xrak/AAxKX63hpBQrGGf6uhB21dJuXupvHxNTHJaktAETVGh6": {
      "name": "Wrapped ETH",
      "coinDenom": "WETH",
      "coinMinimalDenom": "factory/sei1dkdwdvknx0qav5cp5kw68mkn3r99m3svkyjfvkztwh97dv2lm0ksj6xrak/AAxKX63hpBQrGGf6uhB21dJuXupvHxNTHJaktAETVGh6",
      "coinDecimals": 8,
      "coinGeckoId": "",
      "icon": "https://lh3.googleusercontent.com/u/1/drive-viewer/AFGJ81o1WJt7KjxozQXZ8kadrSF1e-LizO7-DKbhMkdeCf0FJr8W6fBsH27XR8waH6S5rOmwmN2qY34qMtssnUrVEyI4prSrWg=w1970-h1600",
      "chain": "seiTestnet2"
    },
    "factory/sei10ta0kdwzf66rjgtkf88ayr6nlkm2h7vxe30upy/BRIL": {
      "coinDenom": "BRIL",
      "coinMinimalDenom": "factory/sei10ta0kdwzf66rjgtkf88ayr6nlkm2h7vxe30upy/BRIL",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "",
      "chain": "seiTestnet2"
    },
    "factory/sei1s6dnc4zxcan6ag7ms72znv8vcpxlzg80fudptg/YESP": {
      "icon": "https://assets.leapwallet.io/yesp.png",
      "coinDenom": "YESP",
      "coinMinimalDenom": "factory/sei1s6dnc4zxcan6ag7ms72znv8vcpxlzg80fudptg/YESP",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "chain": "seiTestnet2"
    },
    "ustrd": {
      "name": "Stride",
      "description": "The native token of Stride",
      "coinDenom": "STRD",
      "coinMinimalDenom": "ustrd",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/strd.png",
      "chain": "stride",
      "coinGeckoId": "strd"
    },
    "stinj": {
      "name": "stINJ",
      "coinDenom": "stINJ",
      "coinMinimalDenom": "stinj",
      "coinDecimals": 18,
      "icon": "https://assets.leapwallet.io/stinj.png",
      "chain": "injective",
      "coinGeckoId": "stride-staked-injective"
    },
    "stuosmo": {
      "name": "stOSMO",
      "coinDenom": "stOSMO",
      "coinMinimalDenom": "stuosmo",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/stosmo.png",
      "chain": "osmosis",
      "coinGeckoId": "stride-staked-osmo"
    },
    "stustars": {
      "name": "stSTARS",
      "coinDenom": "stSTARS",
      "coinMinimalDenom": "stustars",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/ststars.png",
      "chain": "stargaze",
      "coinGeckoId": "stride-staked-stars"
    },
    "stuluna": {
      "name": "stLUNA",
      "coinDenom": "stLUNA",
      "coinMinimalDenom": "stuluna",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/stluna.png",
      "chain": "terra",
      "coinGeckoId": "stride-staked-luna"
    },
    "staevmos": {
      "name": "stEVMOS",
      "coinDenom": "stEVMOS",
      "coinMinimalDenom": "staevmos",
      "coinDecimals": 18,
      "icon": "https://assets.leapwallet.io/stevmos.png",
      "chain": "evmos",
      "coinGeckoId": ""
    },
    "stuatom": {
      "name": "stATOM",
      "coinDenom": "stATOM",
      "coinMinimalDenom": "stuatom",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/statom.png",
      "chain": "cosmos",
      "coinGeckoId": "stride-staked-atom"
    },
    "stujuno": {
      "name": "stJUNO",
      "coinDenom": "stJUNO",
      "coinMinimalDenom": "stujuno",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/stjuno.png",
      "chain": "juno",
      "coinGeckoId": ""
    },
    "utori": {
      "name": "Teritori",
      "description": "Tori token (TORI) is the Teritoti Network’s native utility token, used as the primary means to govern, secure the blockchain, incentivize ecosystem contributors and use the various Teritori dApp features.",
      "coinDenom": "TORI",
      "coinMinimalDenom": "utori",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/teritori.png",
      "chain": "teritori",
      "coinGeckoId": "tori"
    },
    "ujkl": {
      "name": "Jackal",
      "description": "The native staking and governance token of Jackal.",
      "coinDenom": "JKL",
      "coinMinimalDenom": "ujkl",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/jkl.png",
      "chain": "jackal",
      "coinGeckoId": "jkl"
    },
    "acanto": {
      "name": "Canto",
      "description": "Canto is a Layer-1 blockchain built to deliver on the promise of DeFi",
      "coinDenom": "CANTO",
      "coinMinimalDenom": "acanto",
      "coinDecimals": 18,
      "icon": "https://assets.leapwallet.io/canto.png",
      "chain": "canto",
      "coinGeckoId": "canto"
    },
    "upasg": {
      "name": "Passage",
      "description": "The native staking and governance token of the Passage chain.",
      "coinDenom": "PASG",
      "coinMinimalDenom": "upasg",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/pasg.png",
      "chain": "pasg",
      "coinGeckoId": "pasg"
    },
    "unom": {
      "name": "Nomic",
      "coinDenom": "NOM",
      "coinMinimalDenom": "unom",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/nomic.svg",
      "chain": "nomic",
      "coinGeckoId": ""
    },
    "aconst": {
      "name": "CONST",
      "coinDenom": "CONST",
      "coinMinimalDenom": "aconst",
      "coinDecimals": 18,
      "icon": "https://assets.leapwallet.io/archway.svg",
      "chain": "archway",
      "coinGeckoId": "const"
    },
    "aarch": {
      "coinDecimals": 18,
      "coinDenom": "ARCH",
      "coinGeckoId": "",
      "coinMinimalDenom": "aarch",
      "icon": "https://assets.leapwallet.io/archway.svg",
      "chain": "archway"
    },
    "uc4e": {
      "name": "C4E",
      "coinDenom": "C4E",
      "coinMinimalDenom": "uc4e",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/chain4energy.png",
      "chain": "chain4energy",
      "coinGeckoId": "chain4energy"
    },
    "uconst": {
      "name": "CONST",
      "coinDenom": "CONST",
      "coinMinimalDenom": "uconst",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/archway.svg",
      "chain": "archway",
      "coinGeckoId": "const"
    },
    "ubze": {
      "name": "BeeZee",
      "description": "BeeZee native blockchain",
      "coinDenom": "BZE",
      "coinMinimalDenom": "ubze",
      "coinDecimals": 6,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png",
      "chain": "beezee",
      "coinGeckoId": "beezee"
    },
    "dot-planck": {
      "name": "Wrapped Polkadot",
      "description": "Wrapped Polkadot on Axelar",
      "coinDenom": "DOT",
      "coinMinimalDenom": "dot-planck",
      "coinDecimals": 10,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
      "chain": "axelar",
      "coinGeckoId": "polkadot"
    },
    "gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE": {
      "coinDenom": "gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
      "coinMinimalDenom": "gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
      "coinDecimals": 18,
      "icon": "",
      "chain": "gravitybridge",
      "coinGeckoId": ""
    },
    "mGeo": {
      "name": "GEO",
      "description": "GEO token for ODIN Protocol",
      "coinDenom": "GEO",
      "coinMinimalDenom": "mGeo",
      "coinDecimals": 6,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png",
      "chain": "odin",
      "coinGeckoId": ""
    },
    "ulamb": {
      "name": "Lambda",
      "description": "The native token of Lambda",
      "coinDenom": "LAMB",
      "coinMinimalDenom": "ulamb",
      "coinDecimals": 18,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png",
      "chain": "Lambda",
      "coinGeckoId": "lambda"
    },
    "link-wei": {
      "name": "Chainlink",
      "description": "Chainlink on Axelar",
      "coinDenom": "LINK",
      "coinMinimalDenom": "link-wei",
      "coinDecimals": 18,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
      "chain": "axelar",
      "coinGeckoId": "chainlink"
    },
    "wmatic-wei": {
      "name": "Wrapped Matic",
      "description": "Wrapped Matic on Axelar",
      "coinDenom": "WMATIC",
      "coinMinimalDenom": "wmatic-wei",
      "coinDecimals": 18,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
      "chain": "axelar",
      "coinGeckoId": "matic-network"
    },
    "wbnb-wei": {
      "name": "Wrapped BNB",
      "description": "Wrapped BNB on Axelar",
      "coinDenom": "WBNB",
      "coinMinimalDenom": "wbnb-wei",
      "coinDecimals": 18,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png",
      "chain": "axelar",
      "coinGeckoId": "wbnb"
    },
    "utgd": {
      "name": "Tgrade",
      "description": "The native token of Tgrade",
      "coinDenom": "TGD",
      "coinMinimalDenom": "utgd",
      "coinDecimals": 6,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png",
      "chain": "tgrade",
      "coinGeckoId": "tgrade"
    },
    "mkr-wei": {
      "name": "Maker",
      "description": "Maker on Axelar",
      "coinDenom": "MKR",
      "coinMinimalDenom": "mkr-wei",
      "coinDecimals": 18,
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg",
      "chain": "axelar",
      "coinGeckoId": "maker"
    },
    "tkyve": {
      "name": "KYVE",
      "description": "The native utility token of the testnet version of KYVE.",
      "coinDenom": "KYVE",
      "coinMinimalDenom": "tkyve",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/kyve.svg",
      "chain": "kyve",
      "coinGeckoId": "kyve-network"
    },
    "aplanq": {
      "name": "Planq",
      "description": "The native EVM, governance and staking token of the Planq Network",
      "coinDenom": "PLQ",
      "coinMinimalDenom": "aplanq",
      "coinDecimals": 18,
      "icon": "https://assets.leapwallet.io/planq.svg",
      "chain": "planq",
      "coinGeckoId": "planq"
    },
    "utia": {
      "name": "Celestia",
      "coinDenom": "TIA",
      "coinMinimalDenom": "utia",
      "coinDecimals": 6,
      "icon": "https://assets.leapwallet.io/celestia.png",
      "chain": "celestiatestnet",
      "coinGeckoId": ""
    },
    "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr": {
      "name": "Neta",
      "description": "The native token cw20 for Neta on Juno Chain",
      "coinDenom": "NETA",
      "coinMinimalDenom": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
      "coinDecimals": 6,
      "coinGeckoId": "neta",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/neta.svg",
      "chain": "juno"
    },
    "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl": {
      "name": "Marble",
      "description": "The native token cw20 for Marble DAO on Juno Chain",
      "coinDenom": "MARBLE",
      "coinMinimalDenom": "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
      "coinDecimals": 3,
      "coinGeckoId": "marble-dao",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/marble.svg",
      "chain": "juno"
    },
    "juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z": {
      "name": "Hope Galaxy",
      "description": "Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.",
      "coinDenom": "HOPE",
      "coinMinimalDenom": "juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
      "coinDecimals": 6,
      "coinGeckoId": "hope-galaxy",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/hope.png",
      "chain": "juno"
    },
    "juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa": {
      "name": "Racoon",
      "description": "Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem",
      "coinDenom": "RAC",
      "coinMinimalDenom": "juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
      "coinDecimals": 6,
      "coinGeckoId": "racoon",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/rac.svg",
      "chain": "juno"
    },
    "juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq": {
      "name": "Block",
      "description": "The native token of Marble DEX on Juno Chain",
      "coinDenom": "BLOCK",
      "coinMinimalDenom": "juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
      "coinDecimals": 6,
      "coinGeckoId": "block",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/block.svg",
      "chain": "juno"
    },
    "juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49": {
      "name": "DHK",
      "description": "The DAO token to build consensus among Hong Kong People",
      "coinDenom": "DHK",
      "coinMinimalDenom": "juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
      "coinDecimals": 0,
      "coinGeckoId": "dhk",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/dhk.png",
      "chain": "juno"
    },
    "juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g": {
      "name": "JunoSwap",
      "description": "Token governance for Junoswap",
      "coinDenom": "RAW",
      "coinMinimalDenom": "juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/raw.png",
      "chain": "juno"
    },
    "juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w": {
      "name": "Another.Software Validator Token",
      "description": "Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!",
      "coinDenom": "ASVT",
      "coinMinimalDenom": "juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
      "coinDecimals": 6,
      "coinGeckoId": "asvt",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/asvt.png",
      "chain": "juno"
    },
    "juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k": {
      "name": "IBC HNS (Handshake)",
      "description": "IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno netowrk.",
      "coinDenom": "HNS",
      "coinMinimalDenom": "juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
      "coinDecimals": 6,
      "coinGeckoId": "handshake",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/hns.svg",
      "chain": "juno"
    },
    "juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3": {
      "name": "JoeDAO",
      "description": "DAO dedicated to building tools on the Juno Network",
      "coinDenom": "JOE",
      "coinMinimalDenom": "juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
      "coinDecimals": 6,
      "coinGeckoId": "joe",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/joe.png",
      "chain": "juno"
    },
    "juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr": {
      "name": "Digital Land Acquisition DAO",
      "description": "Governance Token for Digital Land Acquisition DAO",
      "coinDenom": "DLA",
      "coinMinimalDenom": "juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
      "coinDecimals": 6,
      "coinGeckoId": "dla",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/dla.png",
      "chain": "juno"
    },
    "juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se": {
      "name": "Gelotto",
      "description": "DeFi gaming platform built on Juno",
      "coinDenom": "GLTO",
      "coinMinimalDenom": "juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
      "coinDecimals": 6,
      "coinGeckoId": "glto",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/glto.svg",
      "chain": "juno"
    },
    "juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh": {
      "name": "GKey",
      "description": "Gelotto Year 1 Grand Prize Token",
      "coinDenom": "GKEY",
      "coinMinimalDenom": "juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
      "coinDecimals": 6,
      "coinGeckoId": "gkey",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/gkey.svg",
      "chain": "juno"
    },
    "juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m": {
      "name": "BlackHole",
      "description": "The native token cw20 for BlackHole on Juno Chain",
      "coinDenom": "HOLE",
      "coinMinimalDenom": "juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
      "coinDecimals": 6,
      "coinGeckoId": "hole",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/hole.png",
      "chain": "juno"
    },
    "juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv": {
      "name": "StakeEasy seJUNO",
      "description": "Staking derivative seJUNO for staked JUNO",
      "coinDenom": "SEJUNO",
      "coinMinimalDenom": "juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
      "coinDecimals": 6,
      "coinGeckoId": "stakeeasy-juno-derivative",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/sejuno.svg",
      "chain": "juno"
    },
    "juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3": {
      "name": "StakeEasy bJUNO",
      "description": "Staking derivative bJUNO for staked JUNO",
      "coinDenom": "BJUNO",
      "coinMinimalDenom": "juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
      "coinDecimals": 6,
      "coinGeckoId": "stakeeasy-bjuno",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/bjuno.svg",
      "chain": "juno"
    },
    "juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse": {
      "name": "Solarbank DAO",
      "description": "Solarbank DAO Governance Token for speeding up the shift to renewable and green energy",
      "coinDenom": "SOLAR",
      "coinMinimalDenom": "juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
      "coinDecimals": 6,
      "coinGeckoId": "solar",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/solar.png",
      "chain": "juno"
    },
    "juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf": {
      "name": "StakeEasy SEASY",
      "description": "StakeEasy governance token",
      "coinDenom": "SEASY",
      "coinMinimalDenom": "juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
      "coinDecimals": 6,
      "coinGeckoId": "seasy",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/seasy.svg",
      "chain": "juno"
    },
    "juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3": {
      "name": "MuseDAO",
      "description": "The native token cw20 for MuseDAO on Juno Chain",
      "coinDenom": "MUSE",
      "coinMinimalDenom": "juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
      "coinDecimals": 6,
      "coinGeckoId": "muse",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/muse.png",
      "chain": "juno"
    },
    "juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup": {
      "name": "Loop Finance",
      "description": "The native token cw20 for Loop Finance on Juno Chain",
      "coinDenom": "LOOP",
      "coinMinimalDenom": "juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
      "coinDecimals": 6,
      "coinGeckoId": "loop",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/loop.png",
      "chain": "juno"
    },
    "juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz": {
      "name": "Fanfury",
      "description": "The native token cw20 for Fanfury on Juno Chain",
      "coinDenom": "FURY",
      "coinMinimalDenom": "juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
      "coinDecimals": 6,
      "coinGeckoId": "fanfury",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/fanfury.png",
      "chain": "juno"
    },
    "juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l": {
      "name": "POSTHUMAN",
      "description": "The native token cw20 for PHMN on Juno Chain",
      "coinDenom": "PHMN",
      "coinMinimalDenom": "juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l",
      "coinDecimals": 6,
      "coinGeckoId": "posthuman",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/phmn.svg",
      "chain": "juno"
    },
    "juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n": {
      "name": "Hopers",
      "description": "The native token cw20 for Hopers on Juno Chain",
      "coinDenom": "HOPERS",
      "coinMinimalDenom": "juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n",
      "coinDecimals": 6,
      "coinGeckoId": "hopers-io",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/hopers.png",
      "chain": "juno"
    },
    "juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za": {
      "name": "Red",
      "description": "RED",
      "coinDenom": "RED",
      "coinMinimalDenom": "juno1g647t78y2ulqlm3lss8rs3d0spzd0teuwhdvnqn92tr79yltk9dq2h24za",
      "coinDecimals": 6,
      "coinGeckoId": "red",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/red.png",
      "chain": "juno"
    },
    "juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7": {
      "name": "Blue",
      "description": "BLUE",
      "coinDenom": "BLUE",
      "coinMinimalDenom": "juno14q8kk464fafql2fwmlsgvgcdl6h2csqpzv4hr025fmcvgjahpess32k0j7",
      "coinDecimals": 6,
      "coinGeckoId": "blue",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/blue.png",
      "chain": "juno"
    },
    "juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9": {
      "name": "Wynd DAO Governance Token",
      "description": "WYND DAO Governance Token",
      "coinDenom": "WYND",
      "coinMinimalDenom": "juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9",
      "coinDecimals": 6,
      "coinGeckoId": "wynd",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/wynd.svg",
      "chain": "juno"
    },
    "juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj": {
      "name": "Banana Token",
      "description": "Bored APE IBC club token",
      "coinDenom": "BANANA",
      "coinMinimalDenom": "juno1s2dp05rspeuzzpzyzdchk262szehrtfpz847uvf98cnwh53ulx4qg20qwj",
      "coinDecimals": 6,
      "coinGeckoId": "banana",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/banana.png",
      "chain": "juno"
    },
    "juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq": {
      "name": "nRide Token",
      "description": "nRide Token",
      "coinDenom": "NRIDE",
      "coinMinimalDenom": "juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq",
      "coinDecimals": 6,
      "coinGeckoId": "nride",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/nride.svg",
      "chain": "juno"
    },
    "secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4": {
      "name": "SIENNA",
      "description": "The native token cw20 for SIENNA on Secret Network",
      "coinDenom": "SIENNA",
      "coinMinimalDenom": "secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4",
      "coinDecimals": 18,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/sienna.svg",
      "chain": "secret"
    },
    "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": {
      "name": "Shade (old)",
      "description": "The native token cw20 for Shade on Secret Network",
      "coinDenom": "SHD(old)",
      "coinMinimalDenom": "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
      "coinDecimals": 8,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg",
      "chain": "secret"
    },
    "secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4": {
      "name": "SCRT Staking Derivatives",
      "description": "The native token cw20 for SCRT Staking Derivatives on Secret Network",
      "coinDenom": "stkd-SCRT",
      "coinMinimalDenom": "secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/stkd-scrt.svg",
      "chain": "secret"
    },
    "secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt": {
      "name": "Button",
      "description": "The native token cw20 for Button on Secret Network",
      "coinDenom": "BUTT",
      "coinMinimalDenom": "secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/butt.svg",
      "chain": "secret"
    },
    "secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej": {
      "name": "Alter",
      "description": "The native token cw20 for Alter on Secret Network",
      "coinDenom": "ALTER",
      "coinMinimalDenom": "secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/alter.svg",
      "chain": "secret"
    },
    "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852": {
      "name": "Amber",
      "description": "The native token cw20 for Amber on Secret Network",
      "coinDenom": "AMBER",
      "coinMinimalDenom": "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/amber.svg",
      "chain": "secret"
    },
    "secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd": {
      "name": "Silk",
      "description": "The native token cw20 for Silk on Secret Network",
      "coinDenom": "SILK",
      "coinMinimalDenom": "secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg",
      "chain": "secret"
    },
    "secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm": {
      "name": "Shade",
      "description": "The native token cw20 for Shade on Secret Network",
      "coinDenom": "SHD",
      "coinMinimalDenom": "secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
      "coinDecimals": 8,
      "coinGeckoId": "shade-protocol",
      "icon": "https://assets.leapwallet.io/cosmos/cw20/images/shd.svg",
      "chain": "secret"
    },
    "sei16gm824zzamyvlldku3g56n7ful4wnzteqlkxyzmk8u9lxheyzx9szaxx00": {
      "name": "Eclipse",
      "coinDenom": "ECLIP",
      "coinMinimalDenom": "sei16gm824zzamyvlldku3g56n7ful4wnzteqlkxyzmk8u9lxheyzx9szaxx00",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "",
      "chain": "seiTestnet2"
    },
    "sei1xmsxzq9up5y2gj6e3fxmuqu4hvr2v0yu7qt34qn6amqpcxmejeuqlumuvk": {
      "name": "Rum",
      "coinDenom": "RUM",
      "coinMinimalDenom": "sei1xmsxzq9up5y2gj6e3fxmuqu4hvr2v0yu7qt34qn6amqpcxmejeuqlumuvk",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "",
      "chain": "seiTestnet2"
    },
    "sei1jg4uy5flrn874p670adt4che9gvluxqvyzsnluc5j0xx304l4edqjypgn7": {
      "name": "Manji",
      "coinDenom": "MANJI",
      "coinMinimalDenom": "sei1jg4uy5flrn874p670adt4che9gvluxqvyzsnluc5j0xx304l4edqjypgn7",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "",
      "chain": "seiTestnet2"
    },
    "sei1rj0rc6smxuxa48jru524g40zhc2q2fqgd2vav208y240ualj7mkqhxv2zy": {
      "name": "Duel",
      "coinDenom": "DUEL",
      "coinMinimalDenom": "sei1rj0rc6smxuxa48jru524g40zhc2q2fqgd2vav208y240ualj7mkqhxv2zy",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "",
      "chain": "seiTestnet2"
    },
    "sei18hlmq5k0uf49dldyzfmahss2nezec74k2jwu4e39lqlxqhsyxmms7pyh4v": {
      "coinDenom": "aUSDT",
      "coinMinimalDenom": "sei18hlmq5k0uf49dldyzfmahss2nezec74k2jwu4e39lqlxqhsyxmms7pyh4v",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/ausdt.png",
      "chain": "seiTestnet2"
    },
    "sei16g20mj2wagxjnyzgre70xkc8q756625fvjxfvfshk7eemszwp0zsez34ex": {
      "coinDenom": "bSEI",
      "coinMinimalDenom": "sei16g20mj2wagxjnyzgre70xkc8q756625fvjxfvfshk7eemszwp0zsez34ex",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/bsei.png",
      "chain": "seiTestnet2"
    },
    "sei1m6z6skzw9dhw79mu658ak2y2lecq6tc5aw38ndvznqumqlsrarpqrmgy4a": {
      "name": "Sea Swap",
      "coinDenom": "SEA",
      "coinMinimalDenom": "sei1m6z6skzw9dhw79mu658ak2y2lecq6tc5aw38ndvznqumqlsrarpqrmgy4a",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://assets.leapwallet.io/sea.png",
      "chain": "seiTestnet2"
    },
    "sei1utpe6whpcrz7rr3z6pyymxkm0uj3kqvdf2h7da2kl2gvfrvzw53qwfrffq": {
      "coinDenom": "TURTLE",
      "coinMinimalDenom": "sei1utpe6whpcrz7rr3z6pyymxkm0uj3kqvdf2h7da2kl2gvfrvzw53qwfrffq",
      "coinDecimals": 6,
      "coinGeckoId": "",
      "icon": "https://bafybeieeyigftynfdvhrspnzh6o6adaw4hz5bdegvmsk6pw5neqtul4wbu.ipfs.w3s.link/turtle_v1.png",
      "chain": "seiTestnet2"
    },
    "terra167dsqkh2alurx997wmycw9ydkyu54gyswe3ygmrs4lwume3vmwks8ruqnv": {
      "name": "Astroport",
      "coinDenom": "ASTRO",
      "coinMinimalDenom": "terra167dsqkh2alurx997wmycw9ydkyu54gyswe3ygmrs4lwume3vmwks8ruqnv",
      "coinDecimals": 6,
      "coinGeckoId": "astroport-fi",
      "icon": "https://assets.leapwallet.io/astro.png",
      "chain": "terra"
    },
    "0x655ecB57432CC1370f65e5dc2309588b71b473A9": {
      "name": "NEOKingdom DAO",
      "description": "NEOKingdom DAO",
      "coinDenom": "NEOK",
      "coinMinimalDenom": "0x655ecB57432CC1370f65e5dc2309588b71b473A9",
      "coinDecimals": 18,
      "coinGeckoId": "",
      "icon": "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/evmos/asset/neok.png",
      "chain": "evmos"
    }
  };

  export default DENOMS;