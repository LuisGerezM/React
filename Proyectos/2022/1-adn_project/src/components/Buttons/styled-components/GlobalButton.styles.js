import { Button } from "react-bootstrap";
import styled from "styled-components";
import { inputTextCssStyle } from "styled-components/App.styled";
import { additionalColors } from "styled-components/Theme.styled";

const borderColors = (theme, color) => {
  const objColors = {
    acept: theme.blue,
    danger: theme.red,
    "google-signin": theme.blue,
    default: additionalColors.betweenBlueGreed,
  };

  return objColors[color];
};

const colors = (theme, color) => {
  const objColors = {
    acept: theme.blue,
    danger: theme.red,
    "google-signin": theme.blue,
    black: additionalColors.darkDesaturatedBlue,
    default: additionalColors.betweenBlueGreed,
  };

  return objColors[color];
};

const ButtonStyled = styled(Button)`
  ${inputTextCssStyle}
  background-color: ${({ theme }) => theme.background} !important;
  color: ${({ theme, color }) => colors(theme, color)} !important;
  border: 2px solid ${({ theme, color }) => borderColors(theme, color)} !important;
  transition: 0.5s;

  filter: drop-shadow(
    0px 6px 6px
      ${({ theme }) =>
        theme.name === "dark"
          ? "rgba(174, 179, 203, 0.5)"
          : "rgba(0, 0, 0, 0.5)"}
  );

  &:hover {
    background-color: ${({ theme, color }) => colors(theme, color)} !important;

    color: ${additionalColors.white} !important;
    border: 3px solid
      ${({ theme, color }) =>
        color === "acept"
          ? theme.blue
          : color === "danger"
          ? theme.red
          : color === "google-signin"
          ? theme.blue
          : additionalColors.betweenBlueGreed};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.boxShadow} !important;
    border: ${({ theme }) => theme.borderTheme} !important;
  }
`;

export { ButtonStyled };
