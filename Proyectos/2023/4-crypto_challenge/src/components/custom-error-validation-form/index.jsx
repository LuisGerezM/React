import { CustomSmallText } from '@/components/typography';
import { WrapErrorsValidationForm } from './styles';

const CustomErrorsValidationForm = ({ errors, errorKey }) => {
  return errors[errorKey] ? (
    <WrapErrorsValidationForm className='form-errors-validation'>
      <CustomSmallText
        smallTextClass='form-errors-validation-text'
        color='primaryRed'
        text={errors[errorKey].message}
      />
    </WrapErrorsValidationForm>
  ) : (
    <></>
  );
};

export default CustomErrorsValidationForm;
