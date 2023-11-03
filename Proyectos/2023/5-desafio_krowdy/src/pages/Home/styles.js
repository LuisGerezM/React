import { styled, css } from "styled-components";
import { disabledCssStyle } from "@/styled-components/App.styled";
import { themeColors } from "@/styled-components/Theme.styled";
import { fadeIn } from "@/styled-components/animation.styled";

export const HomeHeader = styled.header`
  .home-header-btn {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${fadeIn}
`;

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  ${fadeIn}

  .home-section-body {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .home-section-footer {
    margin: 3rem 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    .home-section-footer-btn {
      width: 10rem;
      border-radius: 8px;
      border: 1px solid ${themeColors.danger};
      transition: 0.5s;
      ${props =>
        props.disabled
          ? disabledCssStyle
          : css`
              background-color: ${themeColors.danger};
              color: ${themeColors.white};
            `}

      &:hover {
        cursor: pointer;
        ${props =>
          props.disabled
            ? disabledCssStyle
            : css`
                color: ${themeColors.danger};
                background-color: ${themeColors.white};
              `}
      }
    }
  }
`;
