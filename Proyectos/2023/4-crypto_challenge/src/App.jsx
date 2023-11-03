import { Route, Routes } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

import { routes } from './models/routes.models';

import { usePersistenceCryptoCurrency } from './hooks/use-persistence-crypto-currency';
import { DefaultSpinner } from './components/custom-spinners';
import Cryptos from './pages/cryptos';
import Home from './pages/home';
import WalletOverview from './pages/wallet-overview';

import { NewWallet } from './pages/new-wallet';
import { GlobalStyle } from './styles/reset.styles';
import Theme from './styles/theme.styles';
import ActionsPersonalCrypto from './pages/actions-personal-crypto';

const App = () => {
  usePersistenceCryptoCurrency();
  return (
    <Theme>
      <GlobalStyle />
      <PersistGate loading={<DefaultSpinner loadClass='app' />} persistor={persistor}>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={`${routes.CRYPTOS}`} element={<Cryptos />} />
          <Route path={`${routes.WALLET_OVERVIEW}/:idWallet`} element={<WalletOverview />} />
          <Route
            path={`${routes.BUY_MORE_CRYPTO}/:idWallet/:idCrypto`}
            element={<ActionsPersonalCrypto />}
          />
          <Route path={`${routes.NEW_WALLET}`} element={<NewWallet />} />
          <Route path='*' element={<div>No routes matched</div>} />
        </Routes>
      </PersistGate>
    </Theme>
  );
};
export default App;
