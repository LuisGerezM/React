import { Form } from "react-bootstrap";
import styled from "styled-components";
import {
  backgroundAndColorByTheme,
  focusInputStyledByTheme,
  inputTextCssStyle,
} from "styled-components/App.styled";

export const InputStyled = styled(Form.Control)`
  width: 100%;
  ${inputTextCssStyle}
  ${backgroundAndColorByTheme}
  outline: 1px solid ${({ theme }) => theme.gray} !important;
  transition: 0.5s;

  &:focus {
    ${focusInputStyledByTheme}
  }
`;
