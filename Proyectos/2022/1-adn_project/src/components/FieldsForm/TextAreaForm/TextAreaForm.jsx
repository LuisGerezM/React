import { useErrorsValidationForm } from "hooks/ErrorsValidationForm/useErrorsValidationForm";
import { useFormContext } from "react-hook-form";
import { TextAreaStyled } from "styled-components/Form/TextArea/TextArea.styled";

export const TextAreaForm = ({
  placeholder = "",
  disable = false,
  name,
  validationFields,
}) => {
  const { errorsValidationForm } = useErrorsValidationForm();
  const { register, errors } = useFormContext();

  return (
    <>
      <TextAreaStyled
        className="form-control"
        placeholder={placeholder}
        error={errors && errors[name]}
        disabled={disable}
        {...register(name, validationFields[name])}
      />
      {errors && errorsValidationForm(errors, name)}
    </>
  );
};
