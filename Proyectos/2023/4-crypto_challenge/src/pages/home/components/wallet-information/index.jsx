import HeaderWalletInformation from './header-wallet-information/HeaderWalletInformation';
import FooterWalletInformation from './footer-wallet-information/FooterWalletInformation';
import BodyWalletInformation from '@/components/body-wallet-information';

import { WalletInformationContainer } from './styles';

const WalletInformation = ({ wallet: { id, nameWallet, totalMoney, moneyAvailable } }) => {
  return (
    <WalletInformationContainer className='wallet-information-container'>
      <HeaderWalletInformation subTitleText={nameWallet} id={id} />
      <BodyWalletInformation totalMoney={totalMoney} moneyAvailable={moneyAvailable} />
      <FooterWalletInformation id={id} />
    </WalletInformationContainer>
  );
};

export default WalletInformation;
