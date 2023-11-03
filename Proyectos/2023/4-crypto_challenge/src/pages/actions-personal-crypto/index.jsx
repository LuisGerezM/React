import { CustomButton } from '@/components/custom-button';

import { useActionsPersonalCrypto } from './hooks/useActionsPersonalCrypto';
import { WrapActionsPersonalCrypto } from './styles';
import { ActionsWithCryptos } from '@/components/actions-with-cryptos';

const ActionsPersonalCrypto = () => {
  const { handleGoBack, showFormWithThisInfo, typeSearchParams, handleSubmitFormClicked } =
    useActionsPersonalCrypto();

  return (
    <WrapActionsPersonalCrypto className='wrap-actions-personal-crypto'>
      <CustomButton
        buttonClass='wrap-actions-personal-crypto-btn'
        width='13rem'
        btnstylized='success'
        text='Volver atrás'
        onClick={handleGoBack}
      />
      <ActionsWithCryptos
        showFormWithThisInfo={showFormWithThisInfo}
        typeForm={typeSearchParams}
        handleSubmitFormClicked={handleSubmitFormClicked}
      />
    </WrapActionsPersonalCrypto>
  );
};

export default ActionsPersonalCrypto;
