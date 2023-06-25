import { Form } from "react-bootstrap";
import styled from "styled-components";
import {
  backgroundAndColorByTheme,
  inputTextCssStyle,
} from "styled-components/App.styled";

const FormCheckStyled = styled(Form.Check)`
  ${inputTextCssStyle}
  ${backgroundAndColorByTheme}
  display: flex;
  align-items: center;
  transition: 0.5s;

  .form-check-input {
    background-color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.secondaryColor};
    margin-right: 5px;
    transition: 0.5s;

    &:checked {
      background-color: ${({ theme }) => theme.blue};
      border-color: ${({ theme }) => theme.blue};
    }
  }

  .form-check-label {
    padding-top: 2px;
  }
`;

export { FormCheckStyled };
