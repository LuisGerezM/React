import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { walletMiddleware } from './middleware/newWalletMiddleware';

import cryptoCurrencySlice from './states/crypto-currency';
import walletsSlice from './states/wallets';
import personalCryptosSlice from './states/personal-cryptos';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cryptoCurrencySlice,
  walletsSlice,
  personalCryptosSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, walletMiddleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
