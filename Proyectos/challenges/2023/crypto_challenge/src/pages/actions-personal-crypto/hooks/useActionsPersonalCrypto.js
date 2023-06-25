import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';

import { userConfirm } from '@/utilities/alerts/user-confirm.util';

export const useActionsPersonalCrypto = () => {
  const personalCryptosByWallets = useSelector(store => store.personalCryptosSlice);
  const cryptosList = useSelector(store => store.cryptoCurrencySlice);

  const { idCrypto, idWallet: walletId } = useParams();

  const typeSearchParams = useSearchParams()[0].get('type');

  const navigate = useNavigate();

  /**
   * Navigate back in the browser history
   */
  const handleGoBack = () => navigate(-1);

  const findPersonalCryptoSelected = personalCryptosByWallets[walletId].cryptos.find(
    crypto => crypto.id === idCrypto
  );

  const isUpdate =
    typeSearchParams === 'update' ? personalCryptosByWallets[walletId].moneyAvailable : null;

  const isSell =
    typeSearchParams !== 'update' ? findPersonalCryptoSelected.amountMoneyInvested : null;

  const refreshDataCryptoSelected = cryptosList.find(
    crypto => crypto.id === findPersonalCryptoSelected.id
  );

  const showFormWithThisInfo = {
    walletId,
    crypto: {
      id: refreshDataCryptoSelected.id,
      image: refreshDataCryptoSelected.image,
      name: refreshDataCryptoSelected.name,
      price: refreshDataCryptoSelected.price,
    },
    amountCryptoBuy: findPersonalCryptoSelected.amountCryptoBuy,
    amountMoneyInvested: findPersonalCryptoSelected.amountMoneyInvested,
    moneyAvailable: isUpdate,
    amountAvailableToSell: isSell,
  };

  const handleSubmitFormClicked = async () => {
    const messageAction = typeSearchParams === 'update' ? 'comprar' : 'vender';

    const confirmAction = await userConfirm(
      `Operación exitosa. Deseas ${messageAction} más de esta criptomoneda ${refreshDataCryptoSelected.name} ?`
    );

    if (!confirmAction) handleGoBack();
  };

  return { handleGoBack, showFormWithThisInfo, typeSearchParams, handleSubmitFormClicked };
};
