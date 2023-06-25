import { validationFieldWithCtrol, validationFields } from '@/utilities/validationFields.util';

import { CustomButton } from '@/components/custom-button';
import CustomErrorsValidationForm from '@/components/custom-error-validation-form';
import { InputField } from '@/components/custom-field-form/Input';

import { useFormNewWallet } from '../../hooks/useFormNewWallet';
import { Form } from './styles';

export const FormNewWallet = () => {
  const { wallets, getValues, errors, handleSubmit, onSubmit, handleCancelOperation } =
    useFormNewWallet();

  return (
    <Form className='form-to-buy-or-sell-crypto-form'>
      <div className='form-to-buy-or-sell-crypto-form-input-container'>
        <InputField
          label='Nombre de la cartera'
          inputClass='nameWallet'
          name='nameWallet'
          placeholder='Ingresar nombre de la cartera...'
          validation={validationFieldWithCtrol({
            wallets,
            nameWallet: getValues('nameWallet'),
          })}
        />
        {errors && <CustomErrorsValidationForm errors={errors} errorKey='nameWallet' />}
      </div>
      <div className='form-to-buy-or-sell-crypto-form-input-container'>
        <InputField
          label='Cantidad de dinero'
          inputClass='moneyAvailable'
          name='moneyAvailable'
          placeholder='Ingresar cantidad de dinero...'
          validation={validationFields}
        />
        {errors && <CustomErrorsValidationForm errors={errors} errorKey='moneyAvailable' />}
      </div>

      <div className='form-to-buy-or-sell-crypto-form-wrap-btns'>
        <CustomButton
          text='Guardar'
          buttonClass='form-to-buy-or-sell-crypto-form-wrap-btns-success'
          btnstylized='secondary'
          onClick={handleSubmit(onSubmit)}
        />

        <CustomButton
          text='Cancelar'
          buttonClass='form-to-buy-or-sell-crypto-form-wrap-btns-cancel'
          btnstylized='danger'
          onClick={handleCancelOperation}
        />
      </div>
    </Form>
  );
};
