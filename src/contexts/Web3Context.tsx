import React from 'react';
import { AddressValue } from '@multiversx/sdk-core';
import { Address, BigUIntType, BigUIntValue, TokenIdentifierType, TokenIdentifierValue } from '@multiversx/sdk-core/out';
import {
  useGetAccountInfo,
  useGetIsLoggedIn,
  useGetLoginInfo
} from '@multiversx/sdk-dapp/hooks/account';
import { refreshAccount } from '@multiversx/sdk-dapp/utils/account/refreshAccount';
import * as scRequests from './scRequests';

export interface IWeb3Context {
  isLoading: boolean;
  isLoggedIn: boolean;
  isAuctionOpen: boolean;
  currentAuctionId: number;
  lastBid: BigUIntValue,
  lastBidder: Address;
  lastBidTimestamp: number;
  nextPossibleBid: BigUIntValue; //previous bid + step
  assetTokenIdentifier: TokenIdentifierValue,
  assetNonce: number;
  assetAmount: BigUIntValue
  // auctionInfo: any[]; //take this info from auction info
  refreshState: () => void;
}

export const defaultState: IWeb3Context = {
  isLoading: true,
  isLoggedIn: false,
  isAuctionOpen: false,
  currentAuctionId: 0,
  lastBid: new BigUIntValue(0),
  lastBidder: new Address(''),
  lastBidTimestamp: 0,
  nextPossibleBid: new BigUIntValue(0),
  assetTokenIdentifier: TokenIdentifierValue.esdtTokenIdentifier(''),
  assetNonce: 0,
  assetAmount: new BigUIntValue(0),
  refreshState: () => {
    /* do nothing */
  }
};

export const Web3Context = React.createContext<IWeb3Context>(defaultState);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const {
    account: { address, balance }
  } = useGetAccountInfo();
  const { isLoggedIn } = useGetLoginInfo();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuctionOpen, setIsAuctionOpen] = React.useState(false);
  const [currentAuctionId, setCurrentAuctionId] = React.useState(0);
  const [lastBid, setLastBid] = React.useState(new BigUIntValue(0));
  const [lastBidder, setLastBidder] = React.useState(new Address(''));
  const [lastBidTimestamp, setLastBidTimestamp] = React.useState(0);
  const [nextPossibleBid, setNextPossibleBid] = React.useState(new BigUIntValue(0));
  const [assetTokenIdentifier, setAssetTokenIdentifier] = React.useState(new TokenIdentifierValue(''));
  const [assetNonce, setAssetNonce] = React.useState(0);
  const [assetAmount, setAssetAmount] = React.useState(new BigUIntValue(0));

  // get current auction id
  // fetch auction info for this auction id

  const refreshState = async () => {

    //get auction info from sc
    //load data into variables

    if (!isLoggedIn) {
      return;
    }

    await refreshAccount();

    const isAuctionOpenSC = await scRequests.getIsAuctionOpen();
    setIsAuctionOpen(isAuctionOpenSC);

    const currentAuctionIdSC = await scRequests.getLastAuctionId();
    setCurrentAuctionId(currentAuctionIdSC);


    const currentAuctionInfo = await scRequests.getAuctionInfo(currentAuctionId);
    setLastBid(currentAuctionInfo.lastBid);
    setLastBidder(currentAuctionInfo.lastBidder);
    setLastBidTimestamp(currentAuctionInfo.lastBidTimestamp);

    if (currentAuctionInfo.lastBid === 0) {
      setNextPossibleBid(currentAuctionInfo.startingPrice);

    } else {
      const bidStep = await scRequests.getFixedBidAmount();
      setNextPossibleBid(currentAuctionInfo.lastBid + bidStep);
    }

    const asset = currentAuctionInfo.asset;
    setAssetTokenIdentifier(asset.tokenIdentifier);
    setAssetNonce(asset.tokenNonce);
    setAssetAmount(asset.amount);

  };

  React.useEffect(() => {
    setIsLoading(true);
    refreshState().then((_) => {
      setIsLoading(false);
    });
  }, [isLoggedIn, address]);

  React.useEffect(() => {
    const interval = setInterval(refreshState, 3000);
    return () => clearInterval(interval);
  }, [lastBidder, lastBidTimestamp]);

  return ( //return data from variables from sc
    <Web3Context.Provider
      value={{
        isLoading,
        isLoggedIn,
        isAuctionOpen,
        currentAuctionId,
        lastBid,
        lastBidder,
        lastBidTimestamp,
        nextPossibleBid,
        assetTokenIdentifier,
        assetNonce,
        assetAmount,
        refreshState
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};


