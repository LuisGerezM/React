/**
 *
 * @param {[{}]} arrayCryptos - array with personal crypto information
 * @param {Number} moneyAvailable - money available to invest
 * @returns - Number with the total amount invested
 */
export const movementTotalMoneyByClientWallet = (arrayCryptos, moneyAvailable) =>
  arrayCryptos.reduce((acc, prev) => acc + prev.amountMoneyInvested, moneyAvailable);

/**
 *
 * @param {[{}]} cryptoList - array with crypto information list
 * @param {[{}]} cryptosByWalletSelected - array with personal cryptos information
 * @returns - Number with the total amount invested
 */
export const movementTotalMoneyInvestedByClientWallet = (cryptoList, cryptosByWalletSelected) => {
  if (!cryptosByWalletSelected.length) return 0;

  const addingTotalByCurrentCryptoValue = cryptosByWalletSelected.reduce((acc, prev) => {
    const findCryptoWithCurrentValue = cryptoList.findIndex(crypto => crypto.id === prev.id);

    if (findCryptoWithCurrentValue === -1)
      throw new Error(
        'Ocurrió un error al buscar una criptomoneda. - movement Total Money Invested By Client Wallet- '
      );

    return acc + prev.amountCryptoBuy * cryptoList[findCryptoWithCurrentValue].price;
  }, 0);

  return addingTotalByCurrentCryptoValue;
};
