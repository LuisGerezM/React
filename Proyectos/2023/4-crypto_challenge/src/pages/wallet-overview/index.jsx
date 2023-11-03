import { routes } from '@/models/routes.models';

import { useWalletOverview } from './hooks/useWalletOverview';

import { LinkReactRouter } from '@/components/custom-link-react-router';
import { CustomMessageAlert } from '@/components/custom-message-alert';
import { DefaultSpinner } from '@/components/custom-spinners';
import { CustomTitle } from '@/components/typography';
import { BodyWalletOverview } from './components/body-wallet-overview/body-wallet-overview';
import { HeaderWalletOverview } from './components/header-wallet-overview';

import { WrapWalletOverview } from './styles';

const WalletOverview = () => {
  const { loadingDataClientWallet, walletClient, totalInvestedInCrypto, idWallet } =
    useWalletOverview();

  if (loadingDataClientWallet) return <DefaultSpinner />;

  return (
    <WrapWalletOverview className='wrap-wallet-overview'>
      <LinkReactRouter
        linkClass='wrap-wallet-overview-linkrr'
        btnstylized='success'
        to={routes.HOME}
        text='Ir a página de inicio'
      />
      <CustomTitle
        titleClass='wrap-wallet-overview-header-nameclient'
        color='darkBlue'
        text={walletClient?.nameWallet}
        fontWeight='heavy'
      />
      <HeaderWalletOverview
        walletClient={walletClient}
        totalInvestedInCrypto={totalInvestedInCrypto}
      />
      {!walletClient?.cryptos?.length ? (
        <CustomMessageAlert
          type='danger'
          textClass='wallet-list-msgload'
          message='Aún no tienes criptomonedas...'
        />
      ) : (
        <BodyWalletOverview
          cryptosInWallet={walletClient?.cryptos}
          updateCryptoData={walletClient?.updateCryptoData}
          idWallet={idWallet}
        />
      )}
    </WrapWalletOverview>
  );
};
export default WalletOverview;
