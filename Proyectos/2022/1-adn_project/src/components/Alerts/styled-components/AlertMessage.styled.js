import styled from "styled-components";
import { Alert } from "react-bootstrap";
import { typeAlert } from "./AlertUserFeedback.styled";

const AlertMessageStyled = styled(Alert)`
  background-color: ${({ type, theme }) =>
    typeAlert(type, theme, "background")};
  color: ${({ type, theme }) => typeAlert(type, theme, "color")};
  border: 1px solid
    ${({ type, theme }) => typeAlert(type, theme, "borderColor")};
  transition: 0.5s;
`;

export { AlertMessageStyled };
