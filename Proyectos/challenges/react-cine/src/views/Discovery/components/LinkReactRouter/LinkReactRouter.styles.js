import { Link } from "react-router-dom";

import { customColors, dropShadow } from "App.styles";
import styled from "styled-components";

const LinkStylized = styled(Link)`
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: ${customColors.almostWhite};
    padding: 8px 8px;
    outline: 2px solid ${customColors.betweenBlueGreed};
    color: ${customColors.betweenBlueGreed};
    filter: drop-shadow(${dropShadow});
  }
`;

export { LinkStylized };
