import styled from "styled-components";
import { Modal } from "react-bootstrap";
import {
  backgroundAndColorByTheme,
  inputTextCssStyle,
} from "styled-components/App.styled";

const ModalHeaderStyled = styled(Modal.Header)`
  ${inputTextCssStyle}
  ${backgroundAndColorByTheme}
`;

const ModalBodyStyled = styled(Modal.Body)`
  ${inputTextCssStyle}
  ${backgroundAndColorByTheme}
`;

const ModalFooterStyled = styled(Modal.Footer)`
  ${inputTextCssStyle}
  ${backgroundAndColorByTheme}
  display: flex;
  justify-content: center;
`;

export { ModalFooterStyled, ModalHeaderStyled, ModalBodyStyled };
