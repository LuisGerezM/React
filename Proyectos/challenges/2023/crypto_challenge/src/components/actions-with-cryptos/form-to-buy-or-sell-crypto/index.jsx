import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { buyPersonalCryptos, sellPersonalCryptos } from '@/redux/states/personal-cryptos';
import { userConfirm } from '@/utilities/alerts/user-confirm.util';
import { validationFieldWithCtrol } from '@/utilities/validationFields.util';

import { CustomButton } from '@/components/custom-button';
import CustomErrorsValidationForm from '@/components/custom-error-validation-form';
import { InputField } from '@/components/custom-field-form/Input';

import { Form } from './styles';

export const FormToBuyOrSellCrypto = ({
  walletId,
  crypto,
  numericalValidationFieldToControl,
  handleSubmitFormClicked,
  typeForm = 'buy',
  label,
}) => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const placeholder = `Selecciona la cantidad a ${typeForm !== 'sell' ? 'comprar' : 'vender'}`;

  const onSubmit = async data => {
    const confirmAction = await userConfirm();

    if (confirmAction) {
      dispatch(
        typeForm !== 'sell'
          ? buyPersonalCryptos({ walletId, data, crypto, typeForm })
          : sellPersonalCryptos({ walletId, data, crypto, typeForm })
      );

      reset();

      handleSubmitFormClicked();
    }
  };

  return (
    <FormProvider {...{ register, errors }}>
      <Form className='form-to-buy-or-sell-crypto-form'>
        <div className='form-to-buy-or-sell-crypto-form input-container'>
          <InputField
            label={label}
            inputClass='form-to-buy-or-sell-crypto-form input-container-amountMoneyInvested'
            name='amountMoneyInvested'
            placeholder={placeholder}
            validation={validationFieldWithCtrol(numericalValidationFieldToControl)}
          />
          {errors && <CustomErrorsValidationForm errors={errors} errorKey='amountMoneyInvested' />}
        </div>
        <div className='form-to-buy-or-sell-crypto-form-submit'>
          <CustomButton
            type='submit'
            buttonClass='form-to-buy-or-sell-crypto-form-submit-btn'
            btnstylized='secondary'
            text='Aceptar'
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </Form>
    </FormProvider>
  );
};
