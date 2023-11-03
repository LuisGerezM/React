import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateCryptoData } from '../utils/update-crypto-data';

import { useWalletDataSelectedUserContext } from '@/context/wallet-data-selected-user.context';

export const useWalletOverview = () => {
  const { wallets } = useSelector(store => store.walletsSlice);
  const personalCryptosByWallets = useSelector(store => store.personalCryptosSlice);
  const listCryptoCurrency = useSelector(store => store.cryptoCurrencySlice);

  const {
    walletClient,
    handleWalletClient,
    loadingDataClientWallet,
    handleLoadingDataClientWallet,
    totalInvestedInCrypto,
  } = useWalletDataSelectedUserContext();

  const { idWallet } = useParams();

  useEffect(() => {
    const findClientWallet = wallets.find(wallet => wallet.id === idWallet);

    if (findClientWallet.id) {
      const updateCustomerCryptocurrencyDataInObject = updateCryptoData(
        listCryptoCurrency,
        personalCryptosByWallets[findClientWallet.id].cryptos
      );

      handleWalletClient({
        ...findClientWallet,
        ...personalCryptosByWallets[findClientWallet.id],
        updateCryptoData: { ...updateCustomerCryptocurrencyDataInObject },
      });
    }

    return () => {
      handleLoadingDataClientWallet(true);
    };
  }, [idWallet, listCryptoCurrency]);

  return { loadingDataClientWallet, walletClient, totalInvestedInCrypto, idWallet };
};
