import { css } from "styled-components";
import { themeColors } from "./Theme.styled";
import { responsiveTemplate } from "./responsiveTemplate.styled";
import { typography } from "./typography.styled";

const disabledCssStyle = css`
  background-color: ${themeColors.txtGray};
  color: ${themeColors.darkBlue};
  border: 2px solid ${themeColors.txtGray};
  ${typography.mobileTitle()}
  ${responsiveTemplate.desktop} {
    ${typography.title()}
  }

  ${responsiveTemplate.extraLarge} {
    ${typography.title()}
  }

  &:hover {
    background-color: ${themeColors.txtGray};
    color: ${themeColors.darkBlue};
    cursor: not-allowed;
  }

  &:active {
    background-color: ${themeColors.txtGray};
    color: ${themeColors.darkBlue};
  }
`;

const scrollbarCssStyles = css`
  &::-webkit-scrollbar {
    width: 12px;
    background: #e4e4e4;
  }

  &::-webkit-scrollbar-thumb {
    background: hsla(187, 97%, 29%, 0.3);
    border-radius: 5px;
    border: 1px solid hsla(187, 97%, 29%, 0.55);
    border-right: 1px solid #e4e4e4;

    &:hover {
      background: hsla(187, 97%, 29%, 0.6);
      border: 1px solid hsla(187, 97%, 29%, 0.85);
      border-right: 1px solid #e4e4e4;
    }

    &:active {
      background: hsla(187, 97%, 29%, 0.8);
      border: 1px solid hsla(187, 97%, 29%, 1);
      border-right: 1px solid #e4e4e4;
    }
  }
`;

export { scrollbarCssStyles, disabledCssStyle };
