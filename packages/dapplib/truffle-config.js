require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note situate color harvest opinion slot gas'; 
let testAccounts = [
"0x18973a71e7d946fd2e0cdb7e202ff2afec6dcaf2f02ebbdc5cefcc225eb92670",
"0x191bc85e96d998e4e1ce64c70173ac4cc2117e05a385dbe53d079d5f1e9a254a",
"0xee96bfd3963046e08b7a5c8c9225a5e08395667d4a420587d0941a4cbf605ef2",
"0x838229101d713f6e69c2ea4a18b05b1ed0ad4633b51f6c051727c1d7a3edf124",
"0x9a1e5238de056832376a1d189b9983d545078fa127b7507255c9879d6ce72228",
"0x4d60214c182ebbb1316920c28281d48fa349179ec93fb1bcb4f668ba3e4db8f7",
"0x56bfc7cd75851a48be3907238941e48d016f3e7181e0cd1a98d7049b517dea52",
"0xd96ec25910ee63344459d9c5967392ec5defaa006fb85ac3f2662a45350a2860",
"0x8f85c2a791d46150e5217be0f9fe422e0584aa41be671a3e8936bd097bcb1f5b",
"0x884895b7e39389022099e86d3f51d47a68d50b738e67c2aa684b65e4367ba288"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

