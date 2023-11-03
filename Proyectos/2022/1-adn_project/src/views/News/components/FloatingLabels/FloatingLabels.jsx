import { validationFieldsFormCreateNews } from "schemas/news/validationFieldsFormCreateNews.schema";
import { FloatingLabelStyled } from "styled-components/Form/FloatingLabel/FloatingLabel.styled";
import InputForm from "../../../../components/FieldsForm/InputForm/InputForm";
import { TextAreaForm } from "../../../../components/FieldsForm/TextAreaForm/TextAreaForm";

export const FloatingLabels = ({ children }) => {
  const childrenRender = children.map((item, idx) => (
    <FloatingLabelStyled
      key={idx}
      controlId="floatingInput"
      label={item.label}
      className="mb-3"
    >
      {item.as ? (
        <TextAreaForm
          placeholder={item.placeholder}
          name={item.name}
          validationFields={validationFieldsFormCreateNews}
        />
      ) : (
        <InputForm
          placeholder={item.placeholder}
          name={item.name}
          validationFields={validationFieldsFormCreateNews}
        />
      )}
    </FloatingLabelStyled>
  ));

  return childrenRender;
};
