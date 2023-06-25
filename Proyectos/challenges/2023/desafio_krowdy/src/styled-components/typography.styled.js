import styled, { css } from "styled-components";
import { responsiveTemplate } from "./responsiveTemplate.styled";
import { themeColors } from "./Theme.styled";

const fontFamily = "'Rubik', sans-serif";

const typography = {
  mobileTitle: () => css`
    font: 700 30px/40px ${fontFamily};
  `,
  mobileSsubTitle: () => css`
    font: 400 17px/16px ${fontFamily};
  `,
  mobileInputText: () => css`
    font: 400 12px/14px ${fontFamily};
  `,
  mobileSmallText: () => css`
    font: 300 10px/20px ${fontFamily};
  `,
  title: () => css`
    font: 700 35px/10px ${fontFamily};
  `,
  subTitle: () => css`
    font: 400 20px/10px ${fontFamily};
  `,
  desktopInputText: () => css`
    font: 300 15px/5px ${fontFamily};
  `,
  desktopButtonText: () => css`
    font: 600 15px/5px ${fontFamily};
  `,
  desktopSmallText: () => css`
    font: 300 12px/5px ${fontFamily};
  `
};

const titleCssStyle = css`
  ${typography.mobileTitle()}

  ${responsiveTemplate.desktop} {
    ${typography.title()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.title()}
  }
`;

const subtitleCssStyle = css`
  ${typography.mobileSsubTitle()}
  line-height: 30px !important;

  ${responsiveTemplate.desktop} {
    ${typography.subTitle()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.subTitle()}
  }
`;

const inputTextCssStyle = css`
  ${typography.mobileInputText()}

  ${responsiveTemplate.desktop} {
    ${typography.desktopInputText()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.desktopInputText()}
  }
`;

const smallTextCssStyle = css`
  ${typography.mobileSmallText()}

  ${responsiveTemplate.desktop} {
    ${typography.desktopSmallText()};
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.desktopSmallText()};
  }
`;

const TitleText = styled.h1`
  color: ${({ color }) => color || themeColors.darkBlue};
  text-align: ${({ textAlign }) => textAlign || "center"};
  ${() =>
    css`
      ${titleCssStyle}
    `};
`;

const SubtitleText = styled.h3`
  color: ${({ color }) => color || themeColors.darkBlue};
  text-align: ${({ textAlign }) => textAlign || "center"};
  ${() =>
    css`
      ${subtitleCssStyle}
    `};
`;

const InputTexts = styled.h5`
  text-align: ${({ textAlign }) => textAlign || "center"};
  ${() =>
    css`
      ${inputTextCssStyle}
    `};
`;

const SmallTexts = styled.h6`
  text-align: ${({ textAlign }) => textAlign || "center"};
  ${() =>
    css`
      ${smallTextCssStyle};
    `};
`;

export {
  typography,
  TitleText,
  SubtitleText,
  InputTexts,
  SmallTexts,
  smallTextCssStyle,
  titleCssStyle,
  subtitleCssStyle,
  inputTextCssStyle
};
