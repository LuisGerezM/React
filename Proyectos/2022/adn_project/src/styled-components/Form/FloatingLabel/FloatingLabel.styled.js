import { FloatingLabel } from "react-bootstrap";
import styled from "styled-components";
import {
  backgroundAndColorByTheme,
  inputTextCssStyle,
} from "styled-components/App.styled";

export const FloatingLabelStyled = styled(FloatingLabel)`
  ${inputTextCssStyle};
  ${backgroundAndColorByTheme};
`;
