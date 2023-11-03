import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { customColors, dropShadow } from "App.styles";

const NavLinkStylized = styled(NavLink)`

  margin-left: 15px;
  border-radius: 8px;
  text-decoration: none;
  color: ${customColors.secondaryColor};

  &:hover {
    color: ${customColors.blue};
    outline: 2px solid ${customColors.blue};
  }

  &.active {
    color: ${customColors.primaryColor};
    background-color: ${customColors.blue};
    filter: drop-shadow(${dropShadow});
  }
`;
export { NavLinkStylized };
