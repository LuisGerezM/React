import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addWallet } from '@/redux/states/wallets';

import { routes } from '@/models/routes.models';

import { userConfirm } from '@/utilities/alerts/user-confirm.util';
import { useUserFeedbackAndResetState } from '@/hooks/use-user-feedback-and-reset-state';

export const useFormNewWallet = () => {
  const { wallets } = useSelector(store => store.walletsSlice);

  const [shouldNavigate, setShouldNavigate] = useState(false);

  const { dispatch } = useUserFeedbackAndResetState(setShouldNavigate);

  const { errors, handleSubmit, getValues } = useFormContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (shouldNavigate) navigate(routes.HOME, { replace: true });

    return () => setShouldNavigate(false);
  }, [shouldNavigate]);

  const handleCancelOperation = () => {
    navigate(routes.HOME, { replace: true });
  };

  const onSubmit = async data => {
    try {
      const confirmAction = await userConfirm();

      if (confirmAction) {
        dispatch(addWallet({ ...data, id: uuidv4() }));
      }
    } catch (error) {
      console.error('Error form new wallet', error.message);
    }
  };

  return { wallets, getValues, errors, handleSubmit, onSubmit, handleCancelOperation };
};
