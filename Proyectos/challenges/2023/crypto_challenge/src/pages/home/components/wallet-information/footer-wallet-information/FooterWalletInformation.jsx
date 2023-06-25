import { useNavigate } from 'react-router-dom';
import { routes } from '@/models/routes.models';

import { CustomButton } from '@/components/custom-button';

import { WrapFooterWalletInformation } from './styles';

const FooterWalletInformation = ({ id }) => {
  const navigate = useNavigate();

  const handleWalletInformation = id => {
    navigate(`${routes.WALLET_OVERVIEW}/${id}`);
  };

  return (
    <WrapFooterWalletInformation className='wallet-overview-footer wrap-footer-wallet-info'>
      <CustomButton
        buttonClass='wrap-header-wallet-info-btn'
        text='Administrar'
        onClick={() => handleWalletInformation(id)}
        btnstylized='success'
      />
    </WrapFooterWalletInformation>
  );
};
export default FooterWalletInformation;
