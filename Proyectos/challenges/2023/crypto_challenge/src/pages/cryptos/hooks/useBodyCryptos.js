import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useBodyCryptos = ({ handleShowModalWhithThisInfo, walletId, cryptoList }) => {
  const personalCryptosByWallets = useSelector(store => store.personalCryptosSlice);

  const [cryptoListToRender, setCryptoListToRender] = useState(null);
  const [loadingcryptoListToRender, setLoadingCryptoListToRender] = useState(true);

  const handleAddCrypto = crypto => {
    handleShowModalWhithThisInfo({ walletId, crypto });
  };

  useEffect(() => {
    setCryptoListToRender(
      cryptoList.filter(crypto => {
        return !personalCryptosByWallets[walletId].cryptos.find(
          personalCrypto => personalCrypto.id === crypto.id
        );
      })
    );
    setLoadingCryptoListToRender(false);
    return () => {
      setCryptoListToRender(null);
    };
  }, [personalCryptosByWallets]);

  return { loadingcryptoListToRender, cryptoListToRender, handleAddCrypto };
};
