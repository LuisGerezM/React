import { patterns } from './patterns.util';

const msgValidation = {
  required: 'El campo es requerido.',
  moneyAvailable: { optionalUpdate: " Puedes agregar '0'." },
  patternNumber: 'Debes ingresar un número válido.',
  match: {
    nameWallet: 'Este nombre ya está en uso.',
    amountNoAvaible: 'Lo ingresado no puede superar la cantidad disponible.',
    numberZeroOrPositive: 'Debes ingresar 0 o un valor positivo',
  },
};

export const validationFields = {
  moneyAvailable: {
    required: {
      value: true,
      message: msgValidation.required + msgValidation.moneyAvailable.optionalUpdate,
    },
    pattern: {
      value: patterns.patternNumber,
      message: msgValidation.patternNumber,
    },
  },
};

export const validationFieldWithCtrol = data => ({
  nameWallet: {
    required: { value: true, message: msgValidation.required },
    validate: value => {
      const nameExist = data.wallets.some(
        wallet => wallet.nameWallet.toLowerCase() === value.toLowerCase()
      );

      if (nameExist) {
        if (data.nameWallet) return data.nameWallet === value || msgValidation.match.nameWallet;
      }

      return !nameExist || msgValidation.match.nameWallet;
    },
  },
  amountMoneyInvested: {
    required: { value: true, message: msgValidation.required },
    pattern: {
      value: patterns.patternNumber,
      message: msgValidation.patternNumber,
    },
    validate: value => {
      if (Number(value) < 0) return msgValidation.match.numberZeroOrPositive;

      return !(Number(value) > Number(data)) || msgValidation.match.amountNoAvaible;
    },
  },
});
