import { createContext, useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { editTotalByClientWalletAccordMarketMovement } from '@/redux/states/personal-cryptos';

import { movementTotalMoneyInvestedByClientWallet } from '@/utilities/movement-total-money-by-client-wallet.util';

export const WalletDataSelectedUserContext = createContext();

export const WalletDataSelectedUserProvider = ({ children }) => {
  const personalCryptosByWallets = useSelector(store => store.personalCryptosSlice);
  const cryptoList = useSelector(store => store.cryptoCurrencySlice);
  const dispatch = useDispatch();

  const [walletClient, setWalletClient] = useState({});
  const [loadingDataClientWallet, setLoadingDataClientWallet] = useState(true);
  const [totalInvestedInCrypto, setTotalInvestedInCrypto] = useState(null);

  const handleWalletClient = value => setWalletClient(value);

  const handleLoadingDataClientWallet = value => setLoadingDataClientWallet(value);

  useEffect(() => {
    if (walletClient?.id && loadingDataClientWallet) handleLoadingDataClientWallet(false);
  }, [walletClient]);

  useEffect(() => {
    if (walletClient?.id && personalCryptosByWallets[walletClient.id]) {
      const cryptosByWalletSelected = personalCryptosByWallets[walletClient.id].cryptos;

      const findTotalInvested = movementTotalMoneyInvestedByClientWallet(
        cryptoList,
        cryptosByWalletSelected
      );

      setTotalInvestedInCrypto(findTotalInvested);
    }
  }, [personalCryptosByWallets, walletClient]);

  useEffect(() => {
    if (walletClient?.id) {
      dispatch(editTotalByClientWalletAccordMarketMovement(walletClient));
    }
  }, [cryptoList]);

  return (
    <WalletDataSelectedUserContext.Provider
      value={{
        walletClient,
        handleWalletClient,
        loadingDataClientWallet,
        handleLoadingDataClientWallet,
        totalInvestedInCrypto,
      }}
    >
      {children}
    </WalletDataSelectedUserContext.Provider>
  );
};

export const useWalletDataSelectedUserContext = () => {
  const context = useContext(WalletDataSelectedUserContext);
  if (context === undefined)
    throw new Error(
      'A "Wallet Data Selected User Context" must be used within a "Wallet Data Selected User Provider"'
    );

  return context;
};
