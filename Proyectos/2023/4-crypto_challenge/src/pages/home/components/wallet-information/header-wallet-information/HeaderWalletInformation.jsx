import { deleteWallet } from '@/redux/states/wallets';

import { srcIcons } from '@/models/src-icons.models';

import { userConfirm } from '@/utilities/alerts/user-confirm.util';
import { useUserFeedbackAndResetState } from '@/hooks/use-user-feedback-and-reset-state';

import { CustomButton } from '@/components/custom-button';
import { CustomImage } from '@/components/custom-image';
import { CustomSubTitle } from '@/components/typography';

import { WrapHeaderWalletInformation } from './styles';

const HeaderWalletInformation = ({ subTitleText, id }) => {
  const { dispatch } = useUserFeedbackAndResetState();

  const handleDeleteWallet = async (walletId, name) => {
    const confirmAction = await userConfirm(
      `Estás seguro que deseas eliminar la cartera: "${name}"?`
    );

    if (confirmAction) {
      dispatch(deleteWallet(walletId));
    }
  };

  return (
    <WrapHeaderWalletInformation className='wallet-overview-header wrap-header-wallet-info'>
      <CustomSubTitle
        text={subTitleText}
        subtitleClass='wallet-overview-header wrap-header-wallet-info-text'
      />
      <CustomButton
        buttonClass='wrap-header-wallet-info-btn'
        withShadow={false}
        onClick={() => handleDeleteWallet(id, subTitleText)}
      >
        <CustomImage
          imgClass='wrap-header-wallet-info-btn-img'
          src={srcIcons.DELETE_ICON}
          imgWidth='35px'
        />
      </CustomButton>
    </WrapHeaderWalletInformation>
  );
};
export default HeaderWalletInformation;
