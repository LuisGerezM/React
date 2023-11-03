import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { movementTotalMoneyByClientWallet } from '@/utilities/movement-total-money-by-client-wallet.util';
import { dateFormat } from '@/utilities/date-format.util';
import { orderArrayBy } from '@/utilities/order-array-by.util';
import { movementAmountMoneyProduced } from '@/utilities/movement-amount-money-produced';
import { toFixedCryptoNumber } from '@/utilities/to-fixed-crypto-number.util';

const personalCryptosSlice = createSlice({
  name: 'personalCryptos',
  initialState: {},
  reducers: {
    addPersonalCryptos: (state, action) => {
      const { id } = action.payload;

      const walletExist = current(state)[id];

      if (walletExist) throw new Error('La cartera ya existe');

      const newState = {
        ...current(state),
        [id]: action.payload,
      };

      return { ...newState };
    },

    buyPersonalCryptos: (state, action) => {
      const {
        walletId,
        data: { amountMoneyInvested },
        crypto: cryptoSelected,
        typeForm,
      } = action.payload;

      const amountMoneyInvestedParseToNumber = Number(amountMoneyInvested);

      const clientWalletData = current(state)[walletId];

      if (!clientWalletData)
        throw new Error(
          'Ocurrió un error al buscar la información del cliente, comunicate con el administrador'
        );

      // amount crypto buy
      const amountCryptoBuy = amountMoneyInvestedParseToNumber / cryptoSelected.price;

      // cryptos
      let cryptos = [];

      // add first crypto
      if (!clientWalletData.cryptos.length) {
        cryptos = [
          {
            id: cryptoSelected.id,
            amountMoneyInvested: amountMoneyInvestedParseToNumber,
            amountCryptoBuy,
          },
        ];
      } else {
        const findIndexCryptoSelected = clientWalletData.cryptos.findIndex(
          crypto => crypto.id === cryptoSelected.id
        );

        // updating value crypto
        if (findIndexCryptoSelected !== -1) {
          cryptos = orderArrayBy(
            clientWalletData.cryptos.map(crypto =>
              crypto.id !== cryptoSelected.id
                ? crypto
                : {
                    id: cryptoSelected.id,
                    amountMoneyInvested:
                      crypto.amountMoneyInvested + amountMoneyInvestedParseToNumber,
                    amountCryptoBuy: crypto.amountCryptoBuy + amountCryptoBuy,
                  }
            ),
            'amountMoneyInvested'
          );
        } else {
          // add new crypto
          cryptos = orderArrayBy(
            [
              ...clientWalletData.cryptos,
              {
                id: cryptoSelected.id,
                amountMoneyInvested: amountMoneyInvestedParseToNumber,
                amountCryptoBuy,
              },
            ],
            'amountMoneyInvested'
          );
        }
      }

      // money avaible
      const moneyAvailable = clientWalletData.moneyAvailable - amountMoneyInvestedParseToNumber;

      // total money
      const totalMoney = movementTotalMoneyByClientWallet(cryptos, moneyAvailable);

      // transactions
      let transactions;
      if (clientWalletData.transactions[typeForm]) {
        transactions = {
          ...clientWalletData.transactions,
          [typeForm]: orderArrayBy(
            [
              ...clientWalletData.transactions.buy,
              {
                id: uuidv4(),
                date: dateFormat.parseToTimestamp(new Date()),
                type: typeForm,
                walletClient: walletId,
                crypto: cryptoSelected.id,
                amountMoneyInvested: amountMoneyInvestedParseToNumber,
                moneyAvailable,
                totalMoney,
                amountCryptoBuy,
                amountCryptoToSell: null,
              },
            ],
            'amountMoneyInvested'
          ),
        };
      } else {
        transactions = {
          ...clientWalletData.transactions,
          [typeForm]: [
            {
              id: uuidv4(),
              date: dateFormat.parseToTimestamp(new Date()),
              type: typeForm,
              walletClient: walletId,
              crypto: cryptoSelected.id,
              amountMoneyInvested: amountMoneyInvestedParseToNumber,
              moneyAvailable,
              totalMoney,
              amountCryptoBuy,
              amountCryptoToSell: null,
            },
          ],
        };
      }

      return {
        ...current(state),
        [walletId]: {
          id: walletId,
          cryptos,
          moneyAvailable,
          totalMoney,
          transactions,
        },
      };
    },

    sellPersonalCryptos: (state, action) => {
      const {
        walletId,
        data: { amountMoneyInvested: amountMoneyToWithdrawn },
        crypto: cryptoSelected,
        typeForm,
      } = action.payload;

      const amountMoneyToWithdrawnParseToNumber = Number(amountMoneyToWithdrawn);

      const clientWalletData = current(state)[walletId];

      if (!clientWalletData)
        throw new Error(
          'Ocurrió un error al buscar la información de la cartera del cliente, comunicate con el administrador'
        );

      const findCryptoSelectedInWalletClient = clientWalletData.cryptos.find(
        crypto => crypto.id === cryptoSelected.id
      );

      if (!findCryptoSelectedInWalletClient)
        throw new Error(
          'Ocurrió un error al buscar la información de la criptomoneda, comunicate con el administrador'
        );

      // amount crypto sell
      const amountCryptoToSell = amountMoneyToWithdrawnParseToNumber / cryptoSelected.price;

      const udpatedInformationCryptoSell = {
        id: findCryptoSelectedInWalletClient.id,
        amountMoneyInvested:
          findCryptoSelectedInWalletClient.amountMoneyInvested -
          amountMoneyToWithdrawnParseToNumber,
        amountCryptoBuy: findCryptoSelectedInWalletClient.amountCryptoBuy - amountCryptoToSell,
      };

      // money avaible
      const moneyAvailable = clientWalletData.moneyAvailable + amountMoneyToWithdrawnParseToNumber;

      const cryptos = orderArrayBy(
        clientWalletData.cryptos.map(crypto =>
          crypto.id !== cryptoSelected.id ? crypto : udpatedInformationCryptoSell
        ),
        'amountMoneyInvested'
      );

      // total money
      const totalMoney = movementTotalMoneyByClientWallet(cryptos, moneyAvailable);

      // transactions
      let transactions;
      if (clientWalletData.transactions[typeForm]) {
        transactions = {
          ...clientWalletData.transactions,
          [typeForm]: orderArrayBy(
            [
              ...clientWalletData.transactions.sell,
              {
                id: uuidv4(),
                date: dateFormat.parseToTimestamp(new Date()),
                type: typeForm,
                walletClient: walletId,
                crypto: cryptoSelected.id,
                amountMoneyInvested: amountMoneyToWithdrawnParseToNumber,
                moneyAvailable,
                totalMoney,
                amountCryptoBuy: null,
                amountCryptoToSell,
              },
            ],
            'amountMoneyInvested'
          ),
        };
      } else {
        transactions = {
          ...clientWalletData.transactions,
          [typeForm]: [
            {
              id: uuidv4(),
              date: dateFormat.parseToTimestamp(new Date()),
              type: typeForm,
              walletClient: walletId,
              crypto: cryptoSelected.id,
              amountMoneyInvested: amountMoneyToWithdrawnParseToNumber,
              moneyAvailable,
              totalMoney,
              amountCryptoBuy: null,
              amountCryptoToSell,
            },
          ],
        };
      }

      return {
        ...current(state),
        [walletId]: {
          id: walletId,
          cryptos,
          moneyAvailable,
          totalMoney,
          transactions,
        },
      };
    },

    editTotalByClientWalletAccordMarketMovement: (state, action) => {
      const { cryptos, updateCryptoData, id } = action.payload;

      const amountGeneratedByAllPersonalCryptos = cryptos.reduce((acc, prev) => {
        return acc + movementAmountMoneyProduced(prev, updateCryptoData[prev.id]);
      }, 0);

      return {
        ...current(state),
        [id]: {
          ...current(state)[id],
          totalMoney: toFixedCryptoNumber(
            amountGeneratedByAllPersonalCryptos + current(state)[id].totalMoney,
            5
          ),
        },
      };
    },
  },
});

export const {
  buyPersonalCryptos,
  addPersonalCryptos,
  sellPersonalCryptos,
  editTotalByClientWalletAccordMarketMovement,
} = personalCryptosSlice.actions;

export default personalCryptosSlice.reducer;
