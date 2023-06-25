export const updateCryptoData = (cryptos, personalCryptos) => {
  const updatedData = {};

  personalCryptos.forEach(personalCrypto => {
    const findCrypto = cryptos.find(crypto => crypto.id === personalCrypto.id);
    updatedData[personalCrypto.id] = { ...findCrypto };
  });

  return updatedData;
};
