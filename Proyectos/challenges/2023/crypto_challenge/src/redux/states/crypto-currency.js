import { createSlice } from '@reduxjs/toolkit';

const listOfCryptos = [];

const cryptoCurrencySlice = createSlice({
  name: 'listCryptocurrency',
  initialState: listOfCryptos,
  reducers: {
    updateCryptoCurrency: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateCryptoCurrency } = cryptoCurrencySlice.actions;

export default cryptoCurrencySlice.reducer;
