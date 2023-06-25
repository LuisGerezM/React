import styled from "styled-components";
import {
  backgroundAndColorByTheme,
  focusInputStyledByTheme,
  inputTextCssStyle,
} from "styled-components/App.styled";

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 15rem !important;
  ${inputTextCssStyle};
  ${backgroundAndColorByTheme};
  outline: 1px solid ${({ theme }) => theme.gray} !important;

  &:focus {
    ${focusInputStyledByTheme}
  }
`;
