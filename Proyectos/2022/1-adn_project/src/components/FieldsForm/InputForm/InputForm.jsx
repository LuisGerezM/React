import { useErrorsValidationForm } from "hooks/ErrorsValidationForm/useErrorsValidationForm";
import { useFormContext } from "react-hook-form";
import { InputStyled } from "styled-components/Form/InputForm/InputForm.styled";

export default function InputForm({
  name = "",
  type = "text",
  disable = false,
  placeholder = "",
  validationFields,
}) {
  const { errorsValidationForm } = useErrorsValidationForm();
  const { register, errors } = useFormContext();

  return (
    <>
      <InputStyled
        type={type}
        placeholder={placeholder}
        error={errors && errors[name]}
        disabled={disable}
        autoComplete="off"
        {...register(name, validationFields[name])}
      />
      {errors && errorsValidationForm(errors, name)}
    </>
  );
}
