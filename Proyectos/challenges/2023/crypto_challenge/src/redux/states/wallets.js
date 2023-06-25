import { createSlice, current } from '@reduxjs/toolkit';

const initialWalletsState = {
  loading: false,
  wallets: [],
  success: { status: false, message: '', action: '' },
  error: { status: false, message: '', action: '' },
};

const walletsSlice = createSlice({
  name: 'wallets',
  initialState: initialWalletsState,
  reducers: {
    addWallet: (state, action) => {
      const newWallet = { nameWallet: action.payload.nameWallet, id: action.payload.id };
      let wallets = [];

      if (!current(state).wallets.length) wallets = [newWallet];
      else wallets = [...current(state).wallets, newWallet];

      return {
        ...current(state),
        wallets,
        success: { status: true, message: 'Cartera agregada correctamente.' },
        action: 'addWallet',
      };
    },

    editNameAndMoneyByClientWallet: (state, action) => {
      console.log('editNameAndMoneyWallet -->> this task remains pending');
      return state;
    },

    deleteWallet: (state, action) => {
      return {
        ...current(state),
        wallets: current(state).wallets.filter(wallet => wallet.id !== action.payload),
        success: { status: true, message: 'Cartera eliminada correctamente.' },
        action: 'addWallet',
      };
    },

    resetStatus: (state, action) => ({
      ...state,
      loading: false,
      success: { status: false, message: '', action: '' },
      error: { status: false, message: '', action: '' },
    }),
  },
});

export const { addWallet, editNameAndMoneyByClientWallet, deleteWallet, resetStatus } =
  walletsSlice.actions;

export default walletsSlice.reducer;
