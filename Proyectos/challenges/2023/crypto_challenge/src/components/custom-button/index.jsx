import { CustomText } from '../typography';

import { Button } from './styles';

export const CustomButton = ({
  buttonClass = '',
  onClick,
  text = undefined,
  disabled = false,
  withShadow = true,
  btnstylized = undefined,
  width = undefined,
  type = 'text',
  children,
}) => {
  return (
    <Button
      className={`custom-button ${buttonClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      btnstylized={btnstylized}
      width={width}
      withshadow={withShadow.toString()}
    >
      {text ? <CustomText textalign='center' text={text} /> : children}
    </Button>
  );
};
