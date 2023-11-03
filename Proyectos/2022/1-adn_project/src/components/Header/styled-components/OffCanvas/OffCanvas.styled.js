import { Offcanvas } from "react-bootstrap";
import {
  inputTextCssStyle,
  themeBackGround,
} from "styled-components/App.styled";
import styled from "styled-components";

const OffcanvasHeaderStyled = styled(Offcanvas.Header)`
  ${inputTextCssStyle};
  background-color: ${({ theme }) => theme.secondaryColor}!important;
  transition: 0.5s;
`;

const OffcanvasTitleStyled = styled(Offcanvas.Title)`
  ${inputTextCssStyle};
  color: ${themeBackGround}!important;
  transition: 0.5s;
`;
const OffcanvasBodyStyled = styled(Offcanvas.Body)`
  ${inputTextCssStyle};
  background-color: ${themeBackGround}!important;
  transition: 0.5s;
  padding: 1rem;
`;

export { OffcanvasHeaderStyled, OffcanvasTitleStyled, OffcanvasBodyStyled };
