import { CustomText } from '@/components/typography';

import { WrapBodyWalletInformation } from './styled';

const BodyWalletInformation = ({
  bodyWalletInformationClass = '',
  totalMoney,
  moneyAvailable,
  justifyContentBodyWalletInfo = 'start',
}) => {
  return (
    <WrapBodyWalletInformation
      className={`wallet-body wrap-body-wallet-info ${bodyWalletInformationClass}`}
      justifycontentbodywalletinfo={justifyContentBodyWalletInfo}
      data-testid='custom-class-body-wallet-info'
    >
      <div className='wrap-body-wallet-info'>
        <CustomText textClass='wrap-body-wallet-info-totalmoney-description' text='Total: ' />
        <CustomText textClass='wrap-body-wallet-info-totalmoney-value' text={'$' + totalMoney} />
      </div>
      <div className='wrap-body-wallet-info'>
        <CustomText
          textClass='wrap-body-wallet-info-moneyAvailable-description'
          text='Disponible: '
          title='Cantidad disponible para invertir'
        />
        <CustomText
          textClass='wrap-body-wallet-info-moneyAvailable-value'
          text={'$' + moneyAvailable}
        />
      </div>
    </WrapBodyWalletInformation>
  );
};
export default BodyWalletInformation;
