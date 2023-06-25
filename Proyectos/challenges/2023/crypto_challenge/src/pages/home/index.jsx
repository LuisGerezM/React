import { routes } from '@/models/routes.models';

import { CustomSubTitle, CustomTitle } from '@/components/typography';
import { WalletList } from './components';
import { LinkReactRouter } from '@/components/custom-link-react-router';

import { WrapHome } from './styles';
import { useSelector } from 'react-redux';

const Home = () => {
  const { wallets } = useSelector(store => store.walletsSlice);

  return (
    <WrapHome className='home'>
      <CustomTitle titleClass='home-title' text='Investment Company' color='darkBlue' />
      <LinkReactRouter to={routes.NEW_WALLET} btnstylized='secondary' text='Nueva cartera' />
      <div className='home-amountwallet'>
        <CustomSubTitle text={`${wallets.length} Carteras en total`} color='darkBlue' />
      </div>
      <WalletList />
    </WrapHome>
  );
};

export default Home;
