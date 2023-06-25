import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import {
  disabledBackGroundTheme,
  disabledColorTheme,
  inputTextCssStyle,
  responsiveDesign,
  themeBackGround,
  typography,
} from "styled-components/App.styled";
import { additionalColors } from "styled-components/Theme.styled";

const borderPaint = (checked, nameButton) =>
  checked === nameButton
    ? `2px solid ${additionalColors.lightBlue}`
    : `2px solid ${additionalColors.betweenBlueGreed}`;

const whatButtonPaintBackground = (checked, nameButton) =>
  checked === nameButton ? additionalColors.lightBlue : themeBackGround;

const whatButtonPaintColor = (checked, nameButton, theme) =>
  checked === nameButton ? additionalColors.white : theme.primaryColor;

const ToggleButtonStyled = styled.button`
  ${inputTextCssStyle}
  padding: 0.5rem;
  background-color: ${({ disabled, checked, nameButton }) =>
    disabled
      ? disabledBackGroundTheme
      : whatButtonPaintBackground(checked, nameButton)};
  color: ${({ theme, disabled, checked, nameButton }) =>
    disabled
      ? disabledColorTheme
      : whatButtonPaintColor(checked, nameButton, theme)} !important;

  outline: ${({ disabled, checked, nameButton }) =>
    disabled
      ? `1px solid ${disabledBackGroundTheme}`
      : borderPaint(checked, nameButton)};
  border-radius: 8px;
  transition: 0.5s;

  ${typography.desktopInputTexts};

  filter: drop-shadow(
    0px 6px 6px
      ${({ theme }) =>
        theme.name === "dark"
          ? "rgba(174, 179, 203, 0.5)"
          : "rgba(0, 0, 0, 0.5)"}
  );

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? disabledBackGroundTheme : additionalColors.betweenBlueGreed};
    color: ${({ theme, disabled }) =>
      disabled ? disabledColorTheme : theme.primaryColor};
    outline: 1px solid ${({ theme }) => additionalColors.betweenBlueGreed};
  }

  &:active {
    outline: 2px solid ${({ theme }) => theme.blue};
  }

  ${fadeIn({ time: "1.5s" })}

  ${responsiveDesign.desktop} {
    padding: 1rem;
  }
`;

export { ToggleButtonStyled };
