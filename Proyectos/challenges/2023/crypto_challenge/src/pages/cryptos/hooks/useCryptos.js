import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { dialogCloseSubject$, dialogOpenSubject$ } from '@/components/custom-modal';

export const useCryptos = () => {
  const personalCryptosByWallets = useSelector(store => store.personalCryptosSlice);
  const cryptoList = useSelector(store => store.cryptoCurrencySlice);

  const {
    state: { from, walletClientId },
  } = useLocation();

  const [showModalWithThisInfo, setShowModalWithThisInfo] = useState(null);

  useEffect(() => {
    if (showModalWithThisInfo) dialogOpenSubject$.setSubject(true);
  }, [showModalWithThisInfo]);

  const handleShowModalWhithThisInfo = value =>
    setShowModalWithThisInfo({
      ...value,
      moneyAvailable: personalCryptosByWallets[walletClientId].moneyAvailable,
      amountAvaible: personalCryptosByWallets[walletClientId].amountAvaible,
    });

  const handleSubmitFormClicked = () => dialogCloseSubject$.setSubject(false);

  return {
    from,
    personalCryptosByWallets,
    walletClientId,
    cryptoList,
    handleShowModalWhithThisInfo,
    showModalWithThisInfo,
    handleSubmitFormClicked,
  };
};
