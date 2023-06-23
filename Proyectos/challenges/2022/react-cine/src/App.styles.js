import { Row } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

const desktopStartWidth = 768;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;

const customColors = {
  VeryDarkBlue: "hsl(232, 19%, 15%)",
  primaryColor: "hsl(0, 0%, 100%)",
  secondaryColor: "hsl(228, 12%, 44%)",
  almostWhite: "hsl(0, 0%, 97%)",
  blue: "hsl(208, 92%, 53%)",
  red: "hsl(348, 97%, 39%)",
  betweenBlueGreed: "hsla(187, 97%, 29%, 1)",
};

const dropShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

const TitleText = styled.h1`
  color: ${customColors.almostWhite}!important;
`;

const SubTitleText = styled.h5`
  color: ${({ from }) =>
    from === "movie-details"
      ? customColors.almostWhite
      : customColors.VeryDarkBlue};
`;

const Text = styled.h6`
  color: ${({ from }) =>
    from === "movie-details"
      ? customColors.almostWhite
      : customColors.VeryDarkBlue};
`;

const RowStylized = styled(Row)`
  margin: 0;
  min-height: calc(100vh - 84px);
`;

export {
  RowStylized,
  customColors,
  dropShadow,
  desktop,
  TitleText,
  SubTitleText,
  Text,
};

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: hsl(228, 28%, 20%)
    }
`;
