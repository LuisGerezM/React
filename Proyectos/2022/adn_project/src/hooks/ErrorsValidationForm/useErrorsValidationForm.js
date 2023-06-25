import { ErrorsValidationFormStyled } from "styled-components/ErrorsValidationForm/ErrorsValidationForm.styled";

export const useErrorsValidationForm = () => {
  const errorsValidationForm = (errors, errorKey) => {
    return errors[errorKey] ? (
      <ErrorsValidationFormStyled className="ErrorsValidationFormStyled">
        {errors[errorKey].message}
      </ErrorsValidationFormStyled>
    ) : (
      ""
    );
  };

  return { errorsValidationForm };
};
