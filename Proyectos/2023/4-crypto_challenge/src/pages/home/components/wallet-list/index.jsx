import { useWalletList } from '../../hooks/useWalletList';

import CustomCard from '@/components/custom-card';
import { CustomMessageAlert } from '@/components/custom-message-alert';
import { DefaultSpinner } from '@/components/custom-spinners';
import WalletInformation from '../wallet-information';

import { WrapWalletList } from './styles';

const WalletList = () => {
  const { loadingWalletList, allDataUserWallets, showLoadMessage } = useWalletList();

  if (loadingWalletList) return <DefaultSpinner loadClass='wallet-list' />;

  return (
    <WrapWalletList className='wallet-list'>
      {allDataUserWallets?.length > 0 ? (
        allDataUserWallets.map(wallet => (
          <CustomCard key={wallet.id} width='24rem'>
            <WalletInformation wallet={wallet} />
          </CustomCard>
        ))
      ) : (
        <CustomMessageAlert message='Aún no tienes carteras' type='danger' />
      )}
      {showLoadMessage && (
        <CustomMessageAlert textClass='wallet-list-msgload' message='Cargando más carteras...' />
      )}
    </WrapWalletList>
  );
};

export default WalletList;
