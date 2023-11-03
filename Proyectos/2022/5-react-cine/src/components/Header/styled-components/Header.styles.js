import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { customColors } from "App.styles";

const NavbarStylized = styled(Navbar)`
  background-color: ${customColors.almostWhite};
  padding: 8px 15px 10px 15px;
  box-shadow: 0 2px 5px ${customColors.almostWhite};
`;

export { NavbarStylized };
