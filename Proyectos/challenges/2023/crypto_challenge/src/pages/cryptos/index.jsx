import { useCryptos } from './hooks/useCryptos';

import { LinkReactRouter } from '@/components/custom-link-react-router';
import { CustomMessageAlert } from '@/components/custom-message-alert';
import { CustomModal } from '@/components/custom-modal';
import { BodyCryptos } from './components/body-cryptos';
import { HeaderCryptos } from './components/header-cryptos';
import { ActionsWithCryptos } from '@/components/actions-with-cryptos';

import { HR, WrapCryptos } from './styles';

const Cryptos = () => {
  const {
    from,
    personalCryptosByWallets,
    walletClientId,
    cryptoList,
    handleShowModalWhithThisInfo,
    showModalWithThisInfo,
    handleSubmitFormClicked,
  } = useCryptos();

  return (
    <WrapCryptos className='cryptos'>
      <LinkReactRouter
        linkClass='cryptos-linkrr'
        btnstylized='success'
        to={from}
        text='Ir a mi cartera'
      />
      <HeaderCryptos
        nameWallet={personalCryptosByWallets[walletClientId].nameWallet}
        totalMoney={personalCryptosByWallets[walletClientId].totalMoney}
        moneyAvailable={personalCryptosByWallets[walletClientId].moneyAvailable}
      />
      <HR />
      {cryptoList.length ? (
        <BodyCryptos
          cryptoList={cryptoList}
          walletId={personalCryptosByWallets[walletClientId].id}
          handleShowModalWhithThisInfo={handleShowModalWhithThisInfo}
        />
      ) : (
        <CustomMessageAlert
          type='danger'
          textClass='wallet-list-msgload'
          message='Ocurrió un problema al recuperar las criptomonedas...'
        />
      )}

      {showModalWithThisInfo && (
        <CustomModal>
          <ActionsWithCryptos
            showFormWithThisInfo={showModalWithThisInfo}
            handleSubmitFormClicked={handleSubmitFormClicked}
          />
        </CustomModal>
      )}
    </WrapCryptos>
  );
};

export default Cryptos;
