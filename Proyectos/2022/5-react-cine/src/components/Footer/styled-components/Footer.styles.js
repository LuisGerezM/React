import styled from "styled-components";
import { customColors } from "App.styles";

const FooterStylized = styled.footer`
  margin: 0;
  padding: 5px 0;
  background-color: ${customColors.almostWhite};
  box-shadow: 0px -4px 5px ${customColors.almostWhite};
`;

const LiStylized = styled.li`
  list-style: none;
`;

export { FooterStylized, LiStylized };
