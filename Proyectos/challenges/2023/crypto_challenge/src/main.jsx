import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { WalletDataSelectedUserProvider } from './context/wallet-data-selected-user.context';
import App from './App';

const container = document.getElementById('root');

createRoot(container).render(
  <Provider store={store}>
    <WalletDataSelectedUserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WalletDataSelectedUserProvider>
  </Provider>
);
