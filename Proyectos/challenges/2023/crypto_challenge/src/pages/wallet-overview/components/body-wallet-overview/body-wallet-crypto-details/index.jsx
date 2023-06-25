import { useNavigate } from 'react-router-dom';

import { routes } from '@/models/routes.models';

import { useNearScreen } from '@/hooks/use-near-screen';
import { movementAmountMoneyProduced } from '@/utilities/movement-amount-money-produced';
import { toFixedCryptoNumber } from '@/utilities/to-fixed-crypto-number.util';

import { CustomDataCryptoList } from '@/components/custom-data-crypto-list';
import { CustomButton } from '@/components/custom-button';
import { CustomText } from '@/components/typography';

import { CryptoDetails, CryptoDetailsFooter, WrapBodyWalletCryptoDetails } from './styles';

export const BodyWalletCryptoDetails = ({ crypto, updateCryptoData, idWallet }) => {
  const [show, ref] = useNearScreen();

  const navigate = useNavigate();

  const selectedCurrencyUpdated = updateCryptoData[crypto.id];

  const handleActionsCrypto = (idCrypto, actionType) => {
    navigate(`${routes.BUY_MORE_CRYPTO}/${idWallet}/${idCrypto}?type=${actionType}`);
  };

  const amountGenerated = movementAmountMoneyProduced(crypto, updateCryptoData[crypto.id]);

  return (
    <WrapBodyWalletCryptoDetails className='body-wallet-crypto-details' ref={ref}>
      {show && (
        <>
          <CryptoDetails className='wrap-criptolist-details'>
            <CustomDataCryptoList
              imgClass='wrap-criptolist-details-image'
              altImg='crypto icon'
              titleImg='Icono de la criptomoneda'
              nameAndSymbolClass='wrap-criptolist-details-name'
              wrapPercentAndPriceClass='wrap-criptolist-details-percent-and-price'
              percentAndPriceClass='wrap-criptolist-details-percent'
              crypto={selectedCurrencyUpdated}
            />
            <CustomButton
              buttonClass='wrap-criptolist-details-btn'
              onClick={() => handleActionsCrypto(crypto?.id, 'sell')}
              btnstylized='danger'
            >
              <CustomText text='Sell' fontWeight='heavy' title='Vender esta criptomoneda' />
            </CustomButton>
          </CryptoDetails>
          <CryptoDetailsFooter className='wrap-criptolist-details-footer'>
            <CustomText
              text={'Invertido: $' + crypto.amountMoneyInvested}
              color='darkBlue'
              fontWeight='heavy'
              textalign='center'
            />
            <CustomText
              text={'Generado: $' + amountGenerated}
              color='darkBlue'
              fontWeight='heavy'
              textalign='center'
            />
            <CustomText
              text={'Unidades: ' + toFixedCryptoNumber(crypto?.amountCryptoBuy, 8)}
              color='darkBlue'
              fontWeight='heavy'
              textalign='center'
              title='Cantidad de esta criptomoneda comprada'
            />
            <CustomButton
              buttonClass='wrap-criptolist-details-footer-details-btn'
              onClick={() => handleActionsCrypto(crypto?.id, 'update')}
              btnstylized='secondary'
            >
              <CustomText text='Buy' fontWeight='heavy' title='Comprar más de esta criptomoneda' />
            </CustomButton>
          </CryptoDetailsFooter>
        </>
      )}
    </WrapBodyWalletCryptoDetails>
  );
};
