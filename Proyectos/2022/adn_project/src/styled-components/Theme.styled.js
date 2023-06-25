const additionalColors = {
  veryDarkBlue: "hsl(232, 19%, 15%)",
  darkDesaturatedBlue: "hsl(228, 28%, 20%)",
  blue: "hsl(208, 92%, 53%)",
  lightBlue: "hsl(203, 89%, 53%)",
  betweenBlueGreed: "hsla(187, 97%, 29%, 1)",
  LimeGreen: "hsl(163, 72%, 41%)",
  green: "hsl(146, 68%, 55%)",
  red: "hsl(348, 97%, 39%)",
  brightRed: "hsl(356, 69%, 56%)",
  golden: "#CDA156",
  gray: "hsl(230, 22%, 74%)",
  lightGray: "hsl(216, 0%, 71%)",
  white: "hsl(0, 0%, 100%)",
};

const possibleThemes = {
  LightTheme: {
    name: "light",
    background: "hsl(0, 0%, 100%)",
    primaryColor: " hsl(230, 17%, 14%)",
    secondaryColor: "hsl(228, 12%, 44%)",
    boxShadow: "hsl(228, 12%, 44%)",
    blue: "hsl(203, 89%, 53%)",
    red: "hsl(356, 69%, 56%)",
    borderTheme: "1px solid hsl(228, 28%, 20%)",
    darkBlueTheme: additionalColors.veryDarkBlue,
    greenTheme: additionalColors.LimeGreen,
    warningYellow: "hsl(37, 97%, 70%)",
  },
  DarkTheme: {
    name: "dark",
    background: "hsl(230, 17%, 14%)",
    primaryColor: "hsl(0, 0%, 100%)",
    secondaryColor: "hsl(230, 22%, 74%);",
    boxShadow: "hsl(230, 22%, 74%)",
    blue: "hsl(208, 92%, 53%)",
    red: "hsl(348, 97%, 39%)",
    borderTheme: "1px solid hsl(228, 12%, 44%)",
    darkBlueTheme: additionalColors.veryDarkBlue,
    greenTheme: additionalColors.green,
    warningYellow: "#D6B645",
  },
};

const themesStyled = {
  light: possibleThemes.LightTheme,
  dark: possibleThemes.DarkTheme,
};

export { additionalColors, possibleThemes, themesStyled };
