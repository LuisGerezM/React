import { customColors } from "App.styles";
import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

const ButtonGroupStylized = styled(ButtonGroup)`
  background-color: rgb(124, 130, 156) !important;
  padding: 0 0 5px 5px !important;
  border-radius: 8px;
  border: 5px outset ${customColors.secondaryColor};

  &:hover{
    border: 5px inset ${customColors.secondaryColor};
  }
`;

const ButtonStylized = styled(Button)`
  background-color: rgb(124, 130, 156) !important;
  border: none !important;
  padding: 0 !important;
  margin-right: 2px;
`;

export { ButtonGroupStylized, ButtonStylized };
