import { toFixedCryptoNumber } from './to-fixed-crypto-number.util';

/**
 * Sum of the money invested plus the money generated based on the movement of the cryptocurrency
 * @param {{}} crypto Object with data of personal crypto
 * @param {{}} updateCryptoData Object with updated crypto data
 * @returns Number - Mevement generated
 */
export const movementAmountMoneyProduced = (crypto, updateCryptoData) => {
  return (crypto.amountMoneyInvested - crypto.amountCryptoBuy * updateCryptoData.price).toString()
    .length > 10
    ? Number.isInteger(crypto.amountMoneyInvested - crypto.amountCryptoBuy * updateCryptoData.price)
      ? crypto.amountCryptoBuy * updateCryptoData.price - crypto.amountMoneyInvested
      : toFixedCryptoNumber(
          crypto.amountCryptoBuy * updateCryptoData.price - crypto.amountMoneyInvested,
          5
        )
    : crypto.amountCryptoBuy * updateCryptoData.price - crypto.amountMoneyInvested;
};
