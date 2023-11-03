import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { CustomText } from '@/components/typography';

import { Input, Label } from './styles';

export const InputField = ({
  label,
  inputClass = '',
  type = 'text',
  name,
  placeholder = '',
  validation,
}) => {
  const { register } = useFormContext();

  return (
    <Fragment>
      <Label className='input-field-label'>
        <CustomText text={label} color='darkBlue' />
      </Label>
      <Input
        className={`input-field-input ${inputClass}`}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name, validation[name])}
      />
    </Fragment>
  );
};
