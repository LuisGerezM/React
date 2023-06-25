import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '@/models/routes.models';

import { toFixedCryptoNumber } from '@/utilities/to-fixed-crypto-number.util';

import BodyWalletInformation from '@/components/body-wallet-information';
import { CustomButton } from '@/components/custom-button';
import CustomCard from '@/components/custom-card';
import { CustomModal, dialogOpenSubject$ } from '@/components/custom-modal';
import { CustomSubTitle } from '@/components/typography';
import Transactions from '../transactions';

import { WrapHeaderWalletOverview } from './styles';

export const HeaderWalletOverview = ({
  totalInvestedInCrypto,
  walletClient: { totalMoney, moneyAvailable, id: idWallet, transactions },
}) => {
  const navigate = useNavigate();

  const [showModalWithThisInfo, setShowModalWithThisInfo] = useState(null);

  useEffect(() => {
    if (showModalWithThisInfo) dialogOpenSubject$.setSubject(true);
  }, [showModalWithThisInfo]);

  const newCrypto = idWallet => {
    navigate(routes.CRYPTOS, {
      state: {
        from: `${routes.WALLET_OVERVIEW}/${idWallet}`,
        walletClientId: idWallet,
      },
      replace: true,
    });
  };

  const handleShowModalWithThisInfo = value => setShowModalWithThisInfo(value);

  const showTransaction = transactions => handleShowModalWithThisInfo(transactions);

  const transactionsExist = Object.keys(transactions).length > 0;

  return (
    <WrapHeaderWalletOverview className='wrap-header-wallet-overview'>
      <CustomCard
        cardClass='wrap-header-wallet-overview wrap-wallet-overview-header'
        alignItems='center'
        justifyContent='space-around'
        deleteMarginX={true}
      >
        <BodyWalletInformation totalMoney={totalMoney} moneyAvailable={moneyAvailable} />

        <div className='wrap-header-wallet-overview wrap-wallet-overview-header-actions'>
          <CustomButton
            buttonClass='wrap-wallet-overview-header-actions-btn-newcripto'
            width='80%'
            btnstylized='success'
            text='Nueva cripto'
            onClick={() => newCrypto(idWallet)}
          />
          {Object.keys(transactions).length > 0 && (
            <CustomButton
              buttonClass='wrap-wallet-overview-header-actions-btn-showtransasctions'
              width='80%'
              btnstylized='secondary'
              text='Transacciones'
              onClick={() => showTransaction(transactions)}
            />
          )}
        </div>
      </CustomCard>
      <CustomSubTitle
        subtitleClass='wrap-header-wallet-overview-subtitle'
        text={`Total Invertido: $${
          Number.isInteger(totalInvestedInCrypto)
            ? totalInvestedInCrypto
            : toFixedCryptoNumber(totalInvestedInCrypto, 5)
        }`}
        color='darkBlue'
        fontWeight='heavy'
      />
      {showModalWithThisInfo && (
        <CustomModal>
          <Transactions
            transactionsInfo={showModalWithThisInfo}
            handleShowModalWithThisInfo={handleShowModalWithThisInfo}
            transactionsExist={transactionsExist}
          />
        </CustomModal>
      )}
    </WrapHeaderWalletOverview>
  );
};
