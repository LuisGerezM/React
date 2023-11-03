import { addPersonalCryptos } from '../states/personal-cryptos';

export const walletMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === 'wallets/addWallet') {
    const { id, moneyAvailable } = action.payload;

    const parsemoneyAvailableToNumber = Number(moneyAvailable);
    const dataToPersonalCryptos = {
      id,
      cryptos: [],
      totalMoney: parsemoneyAvailableToNumber,
      moneyAvailable: parsemoneyAvailableToNumber,
      transactions: {},
    };

    store.dispatch(addPersonalCryptos(dataToPersonalCryptos));
  }

  return result;
};
