import { Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import { fadeIn } from "./animation.styled";

const tabletStartWidth = 600;
const desktopStartWidth = 768;

const responsiveDesign = {
  tablet: `@media (min-width: ${tabletStartWidth}px)`,
  desktop: `@media (min-width: ${desktopStartWidth}px)`,
};

const someOtherProperties = {
  globalBorder: "1px solid rgba(233, 233, 233, 1)",
  globalRadius: "8px",
  globalShadowBoxCards: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

const primaryColorTheme = ({ theme }) => theme.primaryColor;
const themeBackGround = ({ theme }) => theme.background;

const disabledColorTheme = ({ theme }) => theme.darkBlueTheme;
const disabledBackGroundTheme = ({ theme }) => theme.secondaryColor;

const HrStyled = styled.hr`
  height: 2px !important;
  color: ${primaryColorTheme};
`;

const fontFamily = "'Rubik', sans-serif";

const typography = {
  mobileTitlesStyled: () => css`
    font: 700 40px/40px ${fontFamily};
  `,
  mobileSsubTitlesStyled: () => css`
    font: 400 16px/16px ${fontFamily};
  `,
  mobileInputTexts: () => css`
    font: 400 13px/14px ${fontFamily};
  `,
  mobileSmallTexts: () => css`
    font: 300 11px/20px ${fontFamily};
  `,
  titlesStyled: () => css`
    font: 700 64px/76px ${fontFamily};
  `,
  subTitlesStyled: () => css`
    font: 400 20px/20px ${fontFamily};
  `,
  desktopInputTexts: () => css`
    font: 300 15px/19px ${fontFamily};
  `,
  desktopButtonTexts: () => css`
    font: 600 16px/19px ${fontFamily};
  `,
  desktopSmallTexts: () => css`
    font: 300 14px/20px ${fontFamily};
  `,
};

const titleCssStyle = css`
  color: ${primaryColorTheme} !important;
  ${typography.mobileTitlesStyled()}

  ${responsiveDesign.desktop} {
    ${typography.titlesStyled()}
  }
`;

const subtitleCssStyle = css`
  color: ${primaryColorTheme} !important;
  ${typography.mobileSsubTitlesStyled()}
  line-height: 30px;

  ${responsiveDesign.desktop} {
    ${typography.subTitlesStyled()}
  }
`;

const inputTextCssStyle = css`
  color: ${primaryColorTheme} !important;
  ${typography.mobileInputTexts()}

  ${responsiveDesign.desktop} {
    ${typography.desktopInputTexts()}
  }
`;

const smallTextCssStyle = css`
  color: ${primaryColorTheme} !important;
  ${typography.mobileSmallTexts()}

  ${responsiveDesign.desktop} {
    ${typography.desktopSmallTexts()}
  }
`;

const TitleTextStyled = styled.h1`
  ${() =>
    css`
      ${titleCssStyle}
    `};
`;

const SubtitleTextStyled = styled.h3`
  ${() =>
    css`
      ${subtitleCssStyle}
    `};
`;

const InputTextsStyled = styled.h6`
  ${() =>
    css`
      ${inputTextCssStyle}
    `};
`;

const SmallTextsStyled = styled.h6`
  ${() =>
    css`
      ${smallTextCssStyle}
    `};
`;

const backgroundAndColorByTheme = css`
  background-color: ${themeBackGround};
  color: ${primaryColorTheme};
`;

const focusInputStyledByTheme = css`
  background-color: ${({ theme }) => theme.background} !important;
  color: ${({ theme }) => theme.primaryColor} !important;
  border: 1px solid ${({ theme }) => theme.blue} !important;
  outline: 1px solid ${({ theme }) => theme.blue} !important;
`;

const RowStyled = styled(Row)`
  margin: 0;
  min-height: calc(100vh - 87px);
  padding-top: 6rem;
  ${fadeIn}
`;

const ImageStyled = styled.div`
  background-image: url(${({ image }) => (image ? image : "not image")});
  background-repeat: no-repeat;
  background-size: ${({ backgroundSize }) =>
    backgroundSize ? backgroundSize : "cover"};
  background-position: top center;
  height: ${({ height }) => (height ? height : "250px")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "250px")};
  width: ${({ width }) => (width ? width : "100%")};

  ${fadeIn}
`;

export {
  someOtherProperties,
  responsiveDesign,
  HrStyled,
  backgroundAndColorByTheme,
  typography,
  RowStyled,
  ImageStyled,
  TitleTextStyled,
  SubtitleTextStyled,
  InputTextsStyled,
  SmallTextsStyled,
  smallTextCssStyle,
  titleCssStyle,
  subtitleCssStyle,
  inputTextCssStyle,
  focusInputStyledByTheme,
  primaryColorTheme,
  themeBackGround,
  disabledColorTheme,
  disabledBackGroundTheme,
};
