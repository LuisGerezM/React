import { FormControl, Button, Dropdown, Image, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import {
  backgroundAndColorByTheme,
  primaryColorTheme,
  themeBackGround,
} from "styled-components/App.styled";
import { additionalColors } from "styled-components/Theme.styled";

const NavbarStyled = styled(Navbar)`
  box-shadow: ${({ theme }) => `0 3px 5px ${theme.boxShadow}`};
  ${backgroundAndColorByTheme}
  padding: 8px 15px 10px 15px;
  z-index: 3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: 0.5s;

  ${fadeIn}
`;

const ToggleStyled = styled(Navbar.Toggle)`
  background-color: ${({ theme: { primaryColor }, theme }) =>
    primaryColor === " hsl(230, 17%, 14%)"
      ? theme.background
      : theme.secondaryColor};

  ${fadeIn}
`;

const FormControlStyled = styled(FormControl)`
  ${backgroundAndColorByTheme}
  border: ${({ theme }) => theme.borderTheme}!important;

  ${fadeIn}
`;

const ButtonFormStyled = styled(Button)`
  margin-right: 15px;
  padding: 0 12px;
  background-color: ${({ theme }) => theme.blue};
  color: ${additionalColors.white}!important;

  ${fadeIn}
`;

const DropdownToggleStyled = styled(Dropdown.Toggle)`
  background-color: ${themeBackGround}!important;
  border: none !important;
  padding: 0;

  transition: 0.5s;

  &:hover {
    background-color: ${themeBackGround} !important;
    border: none !important;
  }

  &:after {
    display: none;
  }
`;

const ImageStyled = styled(Image)`
  width: 40px;
`;

const DropdownMenuStyled = styled(Dropdown.Menu)`
  left: -102px !important;
  background-color: ${themeBackGround} !important;
  border: ${({ theme }) => theme.borderTheme} !important;
  transition: 0.5s;

  ${fadeIn({ time: "0.6s" })}
`;

const DropdownItemStyled = styled(Dropdown.Item)`
  color: ${primaryColorTheme} !important;

  ${fadeIn({ time: "0.6s" })}

  &:hover {
    color: ${({ theme }) =>
      theme.name === "dark"
        ? theme.background
        : theme.secondaryColor} !important;
  }
`;

const WrapMenuButtonStyled = styled.div`
  border-radius: 25%;
  cursor: pointer;

  transition: 0.2s;
  ${fadeIn}

  &:hover {
    border: 2px solid ${({ theme }) => theme.secondaryColor};
  }
`;

export {
  FormControlStyled,
  ButtonFormStyled,
  DropdownToggleStyled,
  ImageStyled,
  DropdownMenuStyled,
  DropdownItemStyled,
  NavbarStyled,
  ToggleStyled,
  WrapMenuButtonStyled,
};
