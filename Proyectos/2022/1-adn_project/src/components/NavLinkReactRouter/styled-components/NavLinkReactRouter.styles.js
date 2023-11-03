import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  backgroundAndColorByTheme,
  inputTextCssStyle,
  responsiveDesign,
  someOtherProperties,
} from "styled-components/App.styled";

const NavLinkStyled = styled(NavLink)`
  ${inputTextCssStyle}
  margin: 5px 5px;
  border-radius: ${someOtherProperties.globalRadius};
  padding: 5px 0 0 5px;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: 0.5s;

  ${responsiveDesign.desktop} {
    margin: 0 5px;
    padding: 5px 5px 0 0;
    justify-content: ${({ privated }) =>
      privated === "true" ? "flex-start" : "center"};
    text-align: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.blue} !important;
    color: ${({ theme }) => theme.primaryColor} !important;
  }

  &.active {
    ${backgroundAndColorByTheme}
    outline: 2px solid ${({ theme }) => theme.blue} !important;
  }
`;

export { NavLinkStyled };
