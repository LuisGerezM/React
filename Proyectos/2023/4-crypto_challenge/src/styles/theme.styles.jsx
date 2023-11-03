import { responsive } from './responsive.styles';

import { ThemeProvider } from 'styled-components';

// CHECK IF RUBIK IS AVAILABLE
const fontFallback = () => {
  const testFont = 'Rubik';
  const fallbackFont = 'sans-serif';

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `40px ${testFont}`;

  return context.font === `40px ${testFont}` ? testFont : fallbackFont;
};

const customColors = {
  white: '#f5f5f5',
  primaryNight: '#051549',
  primaryRed: '#FE1155',
  secondaryAzure: '#3A86FF',
  secondaryAzureDark700: '#003FA3',
  secondaryAzureLight100: '#ebf2ff',
  secundaryGreen: '#29cc6a',
  neutralGrey: '#68717D',
  neutralGreyLight: '#E1E1E1',
  neutralGreyLight100: '#FAFAFA',
  neutralGreyLight200: '#E4E4E4',
  neutralGreyDark: '#333333',
  neutralGreyDark400: '#4a4a4a',
  neutralGreyDark600: '#767676',
  persianGreen: '#035448',
  lightBlue: '#AFDBD2',
  lightSteelBlue: '#4C63B8',
  transparentBlue: '#025d920',
  skyBlue: '#8598C9',
  oregonBlue: '#4c96b8',
  darkBlue: '#1e202f',
  black: '#000000',
  blackRussian: '#26272e',
  blackRussianModal: '#26272e9c',
  onyx: '#36313D',
  blue: '#0000EE',
  error: '#cb013a',
  mistyRose: '#FFEBED',
  whiteRose: '#EBFFEF',
  carrotOrange: '#FFA947',
  greyDisabled: '#b6b7be',
  springGreen: '#29CC6A',
};

const theme = {
  colors: customColors,
  buttons: {
    success: {
      background: customColors.secondaryAzureDark700,
      border: `2px solid ${customColors.secondaryAzureDark700}`,
    },
    danger: {
      background: customColors.error,
      border: `2px solid ${customColors.error}`,
    },
    secondary: {
      background: customColors.persianGreen,
      border: `2px solid ${customColors.persianGreen}`,
    },
  },
  cards: {
    customCard: {
      background: `linear-gradient(to bottom, ${customColors.black},${customColors.blackRussian})`,
      border: `2px solid ${customColors.neutralGrey}`,
    },
    primaryCard: {
      backgroundColor: customColors.skyBlue,
    },
  },
  boxShadow: `4px 6px 5px ${customColors.neutralGreyDark}`,
  fontSizes: {
    desktop: {
      extraSmall: '1.2rem',
      small: '1.6rem',
      medium: '2.3rem',
      large: '3.3rem',
    },
    mobileAndTablet: {
      extraSmall: '0.8rem',
      small: '1rem',
      medium: '1.5rem',
      large: '2.3rem',
    },
  },
  fontWeights: {
    heavy: 900,
    bold: 400,
    light: 300,
  },
  // MEDIA SIZE
  responsive,
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
