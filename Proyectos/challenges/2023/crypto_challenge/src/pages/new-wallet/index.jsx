import { FormProvider, useForm } from 'react-hook-form';

import { FormNewWallet } from './components/form-new-wallet';

import { WrapNewWallet } from './styles';

export const NewWallet = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <WrapNewWallet className='new-wallet'>
      <FormProvider {...{ register, errors, handleSubmit, getValues }}>
        <FormNewWallet />
      </FormProvider>
    </WrapNewWallet>
  );
};
