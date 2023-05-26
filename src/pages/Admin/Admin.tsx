import { useGetAccount } from '@multiversx/sdk-dapp/hooks/account';
import React from 'react';
import * as config from '../../config';
import { Web3Context, Web3Provider } from 'contexts';
import * as scRequests from '../../contexts/scRequests';

export const Admin = () => {
    const { address } = useGetAccount();
    const { isLoading,
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
        refreshState } = React.useContext(Web3Context);
    const [inputText, setInputText] = React.useState('');
    const [inputTokenId, setInputTokenId] = React.useState('');
    const [inputNonce, setInputNonce] = React.useState('');
    const [inputAmount, setInputAmount] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleChangeTokenId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTokenId(e.target.value);
    };

    const handleChangeNonce = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputNonce(e.target.value);
    };

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputAmount(e.target.value);
    };

    const handleEnableContract = () => {
        //
        scRequests.useEnableContract();
    };

    const handleDisableContract = () => {
        //
    };

    const handleCloseCurrentAuction = () => {
        //
    };

    const handleWithdrawFunds = (addressToWithdraw: string) => {
        //
    };

    const handleTakeBackAsset = (tokenId: string, nonce: number, amount: string) => {
        //
    };

    const handleChooseNftAsset = () => {
        //
    };

    return (
        <div>
            {address === config.adminAddress && (
                <>
                    <div className='title'>
                        <h1 className='text-center mt-5 mb-5'>Admin Panel</h1>
                    </div>
                    <div className='col-12 d-flex justify-content-center'>
                        <div className='w-50'>
                            <div className="card text-center">
                                <div className="card-header">
                                    Smart Contract Details
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-left">SC Address: {config.contractAddress}</p>
                                    <p className="card-text text-left">Is Auction Open: {isAuctionOpen}</p>
                                    <p className="card-text text-left">Current Auction Id: {currentAuctionId}</p>
                                    <p className="card-text text-left">Last Bid Timestamp: {lastBidTimestamp}</p>
                                    {
                                        (assetTokenIdentifier !== undefined && lastBid !== undefined && lastBidder !== undefined && assetAmount !== undefined)
                                            ? (
                                                <> <p className="card-text text-left">Last Bid: {lastBid.toString()}</p>
                                                    <p className="card-text text-left">Last Bidder: {lastBidder.toString()}</p>
                                                    <p className="card-text text-left">Asset Token Id: {assetTokenIdentifier.toString()}</p>
                                                    <p className="card-text text-left">Asset Nonce: {assetNonce}</p>
                                                    <p className="card-text text-left">Asset Amount: {assetAmount.toString()}</p>
                                                </>
                                            ) : (
                                                <>
                                                    <h5 className="card-text text-left">No auctions and assets</h5>
                                                </>)
                                    }
                                </div>
                            </div>
                            <div className="card text-center">
                                <div className="card-header">
                                    Smart Contract Interactions
                                </div>
                                <div className="card-body">

                                    <p className="card-text text-left">Enable Contract</p>
                                    <button className='btn btn-success mb-1' onClick={scRequests.useEnableContract} > Enable </button>

                                    <p className="card-text text-left mt-3">Disable Contract</p>
                                    <button className='btn btn-danger mb-3' onClick={handleDisableContract} > Disable </button>

                                    <p className="card-text text-left mt-3">Create New Auction</p>
                                    <button className='btn btn-primary mb-3' onClick={handleChooseNftAsset} > Choose NFT Asset </button>

                                    <p className="card-text text-left mt-3">Close Current Auction</p>
                                    <button className='btn btn-danger mb-3' onClick={handleCloseCurrentAuction} > Close </button>

                                    <p className="card-text text-left mt-3">Withdraw Funds</p>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Address to withdraw funds to" aria-label="Address" aria-describedby="basic-addon1" onChange={handleChange} value={inputText} />
                                    </div>
                                    <button className='btn btn-success mb-3' onClick={() => handleWithdrawFunds(inputText)} > Withdraw </button>

                                    <p className="card-text text-left mt-3">Take Back Asset</p>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Token Identifier" aria-label="TokenId" aria-describedby="basic-addon1" onChange={handleChangeTokenId} value={inputText} />
                                        <input type="text" className="form-control" placeholder="Nonce" aria-label="Nonce" aria-describedby="basic-addon1" onChange={handleChangeNonce} value={inputText} />
                                        <input type="text" className="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1" onChange={handleChangeAmount} value={inputText} />

                                    </div>
                                    <button className='btn btn-success mb-3' onClick={() => handleWithdrawFunds(inputText)} > Take Back </button>
                                </div>
                            </div>
                        </div> 
                     </div>

                </>
            )}
            {address != config.adminAddress && (
                <>
                    <div className='col-12 d-flex justify-content-center' >
                        <div className='w-50'>
                            <h1 className='alert alert-danger text-center mt-5'>You cannot access this page as you are not the admin</h1>
                        </div>
                    </div>
                </>
            )}
        </div>

    );
};