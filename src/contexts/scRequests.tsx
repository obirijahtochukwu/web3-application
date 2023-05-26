import {
  AbiRegistry,
  Address,
  AddressValue,
  BigUIntValue,
  ResultsParser,
  SmartContract,
  SmartContractAbi,
  TokenIdentifierValue,
  U64Value
} from '@multiversx/sdk-core';
import {
  network,
  contractAddress
} from 'config';
import { ProxyNetworkProvider } from '@multiversx/sdk-network-providers';
import contractAbi from './abi/auction-sc.abi.json';
import BigNumber from 'bignumber.js';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account';
import { sendTransactions } from '@multiversx/sdk-dapp/services/transactions/sendTransactions';

const Provider = new ProxyNetworkProvider(network.gatewayAddress, {
  timeout: 10000
});
const resultsParser = new ResultsParser();


let currentPort = '';
if (window.location.port != '') {
  currentPort = ':' + window.location.port;
}
const currentHostname =
  window.location.protocol + '//' + window.location.hostname + currentPort;

export const getSmartContractObj = async () => {
  const abiRegistry = await AbiRegistry.create(formatAbiJson(contractAbi));
  const abi = new SmartContractAbi(abiRegistry, ['MainModule']);
  return new SmartContract({
    address: new Address(contractAddress),
    abi: abi
  });
};

const formatAbiJson = (abi: any) => {
  return {
    name: abi.name,
    endpoints: abi.endpoints,
    types: abi.types
  };
};

export const usePlaceBid = async (nextPossibleBid: number) => {
  const { account } = useGetAccountInfo();

  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.placeBid();
  const { sessionId, error } = await sendTransactions({
    transactions: [
      interaction
        .withNonce(account.nonce)
        .withValue(new BigUIntValue(nextPossibleBid))
        .withGasLimit(5_000_000)
        .withChainID(network.chainId)
        .buildTransaction()
    ]
  });
  // setSessionId(sessionId);
  return sessionId;
};

export const useEnableContract = async () => {
  const { account } = useGetAccountInfo();

  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.enableSC();
  const { sessionId, error } = await sendTransactions({
    transactions: [
      interaction
        .withNonce(account.nonce)
        .withGasLimit(5_000_000)
        .withChainID(network.chainId)
        .buildTransaction()
    ]
  });
  // setSessionId(sessionId);
  return sessionId;
};

export const useDisableContract = async () => {
  const { account } = useGetAccountInfo();

  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.disableSC();
  const { sessionId, error } = await sendTransactions({
    transactions: [
      interaction
        .withNonce(account.nonce)
        .withGasLimit(5_000_000)
        .withChainID(network.chainId)
        .buildTransaction()
    ]
  });
  // setSessionId(sessionId);
  return sessionId;
};

export const getAuctionInfo = async (currentAuctionId: number) => {
  //return auction info for auction id
  //query sc for auction info

  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.getAuctionInfo([
    new U64Value(currentAuctionId)
  ]);

  const query = interaction.buildQuery();
  const response = await Provider.queryContract(query);
  const endpointDef = interaction.getEndpoint();
  const parsedResponse = resultsParser.parseQueryResponse(
    response,
    endpointDef
  );

  if (parsedResponse.returnCode.isSuccess()) {
    const value = parsedResponse.firstValue?.valueOf();
    return value;
  }
  return 0;
};

export const getLastAuctionId = async () => {
  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.getLastAuctionId();

  const query = interaction.buildQuery();
  const response = await Provider.queryContract(query);
  const endpointDef = interaction.getEndpoint();
  const parsedResponse = resultsParser.parseQueryResponse(
    response,
    endpointDef
  );

  if (parsedResponse.returnCode.isSuccess()) {
    const value = parsedResponse.firstValue?.valueOf();
    return value;
  }
  return 0;
};

export const getBidTimeThreshold = async () => {
  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.getBidTimeThreshold();

  const query = interaction.buildQuery();
  const response = await Provider.queryContract(query);
  const endpointDef = interaction.getEndpoint();
  const parsedResponse = resultsParser.parseQueryResponse(
    response,
    endpointDef
  );

  if (parsedResponse.returnCode.isSuccess()) {
    const value = parsedResponse.firstValue?.valueOf();
    return value;
  }
  return 0;
};

export const getFixedBidAmount = async () => {
  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.getFixedBidAmount();

  const query = interaction.buildQuery();
  const response = await Provider.queryContract(query);
  const endpointDef = interaction.getEndpoint();
  const parsedResponse = resultsParser.parseQueryResponse(
    response,
    endpointDef
  );

  if (parsedResponse.returnCode.isSuccess()) {
    const value = parsedResponse.firstValue?.valueOf();
    return value;
  }
  return 0;
};

export const getMaxBidAmount = async () => {
  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.getMaxBidAmount();

  const query = interaction.buildQuery();
  const response = await Provider.queryContract(query);
  const endpointDef = interaction.getEndpoint();
  const parsedResponse = resultsParser.parseQueryResponse(
    response,
    endpointDef
  );

  if (parsedResponse.returnCode.isSuccess()) {
    const value = parsedResponse.firstValue?.valueOf();
    return value;
  }
  return 0;
};

export const getStartingBidPrice = async () => {
  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.getStartingBidPrice();

  const query = interaction.buildQuery();
  const response = await Provider.queryContract(query);
  const endpointDef = interaction.getEndpoint();
  const parsedResponse = resultsParser.parseQueryResponse(
    response,
    endpointDef
  );

  if (parsedResponse.returnCode.isSuccess()) {
    const value = parsedResponse.firstValue?.valueOf();
    return value;
  }
  return 0;
};

export const getIsAuctionOpen = async () => {
  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.getIsAuctionOpen();

  const query = interaction.buildQuery();
  const response = await Provider.queryContract(query);
  const endpointDef = interaction.getEndpoint();
  const parsedResponse = resultsParser.parseQueryResponse(
    response,
    endpointDef
  );

  if (parsedResponse.returnCode.isSuccess()) {
    const value = parsedResponse.firstValue?.valueOf();
    return value;
  }
  return 0;
};

export const getAuctionHistory = async () => {
  const contract = await getSmartContractObj();
  const interaction = contract.methodsExplicit.getAuctionHistory();

  const query = interaction.buildQuery();
  const response = await Provider.queryContract(query);
  const endpointDef = interaction.getEndpoint();
  const parsedResponse = resultsParser.parseQueryResponse(
    response,
    endpointDef
  );
  if (parsedResponse.returnCode.isSuccess()) {
    const value = parsedResponse.firstValue?.valueOf();
    return value;
  }
  return [];
};

