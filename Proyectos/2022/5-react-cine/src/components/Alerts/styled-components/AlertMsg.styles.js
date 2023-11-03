import { customColors } from "App.styles";
import { Alert } from "react-bootstrap";
import styled from "styled-components";

const AlertStylized = styled(Alert)`
  background-color: hsl(228, 28%, 20%);
  color: ${customColors.primaryColor} !important;
  border: 3px solid ${({ color }) => customColors[color]} !important;
  text-align: center;

  &:hover {
    background-color: ${customColors.VeryDarkBlue};
    border: 5px solid ${({ color }) => customColors[color]} !important;
  }
`;

export { AlertStylized };
