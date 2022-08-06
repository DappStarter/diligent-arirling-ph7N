require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain comic harvest nature bottom sword'; 
let testAccounts = [
"0x214a914087033ec98fcb45b3b974382ff83aba34aba76cf8cc2510b4e6cf4c9e",
"0x77166351a666892f15bb383accabf0a177437371787905ae4950c5a3851f5f74",
"0x95c17a763ffced4add764841bb8e8122439c094baeb6c2e6802ccfc51240ca10",
"0x0a00872b1382e320f46493cf3a6beb91ba3fff5eb862197b021a349b2368a221",
"0x5de70b0b56a6abe8e709da8e2d7b82fd931d97ec12b271468e2858ee82cfb4b6",
"0x46fec93e1954fcc2d5a543742ac7d85c4335a8f7ff76c9e197665d4e403363dd",
"0x2f2ec6ce1c78bd505a631ce318496021d1c543695c6c437a35d533bf53dd04d0",
"0x61735beb7b8c40b1016e2b9084284d74d8721677c1910428663972842197c4b9",
"0x19ae43fc3251672898c5d0ce5c552faa4f8fb251475aa20f4c015c1eb8ed22f0",
"0x2df3730cc16fedeced37a5d951191554e319e343e5657ffcf26fe4e6dd399b31"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

