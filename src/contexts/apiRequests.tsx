import axios from 'axios';
import * as config from '../config';
import { contractAddress } from '../config';


const getNftInfo = async (collection: string, nonce: number) => {
    try {
        const { data } = await axios.get(
          `${config.network.apiAddress}/nfts/MLE-a05e4e-0a`,
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

const fetchSignificantAccountNfts = (collection: string) =>
  async function getSignificantAccountNfts(address: string) {
    try {
      const { data } = await axios.get(
        `${config.network.apiAddress}/accounts/${address}/nfts?collections=${collection}&size=1000`,
        {
          timeout: 10000
        }
      );

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

const fetchTransaction = () =>
  async function getTransaction(txHash: string) {
    try {
      const { data } = await axios.get(
        `${config.network.apiAddress}/transactions/${txHash}`,
        {
          timeout: 10000
        }
      );

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

const fetchShopItems = () =>
  async function getShopItems() {
    try {
      const { data } = await axios.get(
        `${config.network.apiAddress}/accounts/${contractAddress}/nfts`,
        {
          timeout: 10000
        }
      );

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


// export const getZionPasses = fetchSignificantAccountNfts(
//   config.COLLECTION_TICKER
// );
// export const getTransaction = fetchTransaction();
// export const getRemainingShopItems = () =>
//   fetchSignificantAccountNfts(config.STORE_ITEMS_TOKEN_IDENTIFIER)(
//     STAKING_SC_ADDRESS
//   );
