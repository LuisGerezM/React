import { resetStatus } from '@/redux/states/wallets';
import { feedbackUser } from '@/utilities/alerts/feedback-user.util';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useUserFeedbackAndResetState = (setShouldNavigate = undefined) => {
  const { success, error } = useSelector(store => store.walletsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success.status) {
      dispatch(resetStatus());
      setShouldNavigate && setShouldNavigate(true);
      feedbackUser({ title: success.message });
    }
  }, [success]);

  useEffect(() => {
    if (success.error) {
      dispatch(resetStatus());
      feedbackUser({ icon: 'error', title: error.message });
    }
  }, [error]);

  return { dispatch };
};
