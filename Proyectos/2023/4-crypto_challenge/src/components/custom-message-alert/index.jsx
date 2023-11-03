import { CustomText } from '../typography';

import { Alert } from './styles';

export const CustomMessageAlert = ({ message, widthAlert, type = 'success', textClass }) => {
  return (
    <Alert type={type} widthAlert={widthAlert}>
      <CustomText textClass={textClass} text={message} color='white' />
    </Alert>
  );
};
