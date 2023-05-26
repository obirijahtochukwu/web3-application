import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAccount } from '@multiversx/sdk-dapp/hooks/account/useGetAccount';
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Timer from './components/Timer';
import { Web3Context } from 'contexts';
import * as scRequests from '../../contexts/scRequests';
import * as apiRequests from '../../contexts/apiRequests';
import * as config from '../../config';
import axios from 'axios';


const getNftInfo = async (collection: string, nonce: number) => {
  try {
    const { data } = await axios.get(
      `${config.network.apiAddress}/nfts/AETHERSOUL-1ef1c1-26`,
      {
        timeout: 10000
      }
    );
    // https://api.multiversx.com/nfts/MLE-a05e4e-0a
    return {
      data: data,
      success: data !== undefined
    };
  } catch (err) {
    return {
      success: false
    };
  }
};


export const TestRoute = () => {
  const [nftUrl, setNftUrl] = React.useState('');
  const [nftName, setNftName] = React.useState('');
  const [nftDescription, setNftDescription] = React.useState('');
  const { assetTokenIdentifier, assetNonce, assetAmount, nextPossibleBid, lastBid } = React.useContext(Web3Context);


  React.useEffect(() => {
    getNftInfo(assetTokenIdentifier.toString(), assetNonce).then((value) => {
      setNftUrl(value.data.url);
      setNftName(value.data.name);
      setNftDescription(value.data.metadata.description);
    });

  }, [assetTokenIdentifier, assetNonce]);

  return (
    <><div className='title'>
      <h1 className='text-center mt-5 mb-5'>xLauncher Auction</h1>
    </div>
      <div className='col-12 d-flex justify-content-center'>
        <div className='w-50'>
          <div className="card text-center">
            <div className="card-header">
              Auction asset
            </div>
            <div className="card-body">
              <h5 className="card-title">{nftName}</h5>
              <img src={nftUrl} className="img-reponsive col-5 shadow-lg p-3 mb-5 bg-body rounded" />
              <p className="card-text">{nftDescription}</p>
              <div className="card-footer text-muted">
                Last bid value: 1.5egld
              </div>
              <div className="card-footer text-muted mb-3">
                Next possible bid value: 1.5egld
              </div>
              <Timer duration={60} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


