export const contractAddress =
  'erd1qqqqqqqqqqqqqpgq72l6vl07fkn3alyfq753mcy4nakm0l72396qkcud5x';

export const dAppName = 'example Dapp';

// Generate your own WalletConnect 2 ProjectId here: https://cloud.walletconnect.com/app
export const walletConnectV2ProjectId = '9b1a9564f91cb659ffe21b73d5c4e2d8';

export const network = {
  id: 'mainnet',
  name: 'Mainnet',
  egldLabel: 'EGLD',
  walletAddress: 'https://wallet.multiversx.com',
  apiAddress: 'https://api.multiversx.com',
  gatewayAddress: 'https://gateway.multiversx.com',
  explorerAddress: 'http://explorer.multiversx.com',
  graphQlAddress: 'https://exchange-graph.multiversx.com/graphql',
  skipFetchFromServer: true,
  chainId: '1'
};

// export const network = {
//   id: 'devnet',
//   name: 'devnet',
//   egldLabel: 'EGLD',
//   walletAddress: 'https://devnet-wallet.multiversx.com',
//   apiAddress: 'https://devnet-api.multiversx.com',
//   gatewayAddress: 'https://devnet-gateway.multiversx.com',
//   explorerAddress: 'http://devnet-explorer.multiversx.com',
//   graphQlAddress: 'https://exchange-graph.multiversx.com/graphql',
//   skipFetchFromServer: true,
//   chainId: 'D'
// };
export const apiTimeout = 6000;
export const transactionSize = 15;
export const TOOLS_API_URL = 'https://tools.multiversx.com';
/**
 * Calls to these domains will use `nativeAuth` Baerer token
 */
export const sampleAuthenticatedDomains = [TOOLS_API_URL];
