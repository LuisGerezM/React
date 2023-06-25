import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  inputTextCssStyle,
  responsiveDesign,
  themeBackGround,
} from "styled-components/App.styled";

const LinkStyled = styled(Link)`
  ${inputTextCssStyle}
  width: ${({ from }) => (from ? "100%" : "50%")};
  background-color: ${themeBackGround}!important;
  color: ${({ theme }) => theme.secondaryColor}!important;
  border-radius: 8px;
  outline: ${({ theme, from }) => (from ? `2px solid ${theme.blue}` : from)};
  padding: 5px !important;
  text-decoration: none;
  text-align: center;

  ${responsiveDesign.desktop} {
    width: 124px;
    text-align: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.blue} !important;
    color: ${themeBackGround} !important;
    padding: ${({ from }) => (from ? "5px" : "10px 10px")} !important;
  }
`;

export { LinkStyled };
