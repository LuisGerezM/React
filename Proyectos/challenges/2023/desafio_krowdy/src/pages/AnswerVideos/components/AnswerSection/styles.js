import { themeColors } from "@/styled-components/Theme.styled";
import { fadeIn } from "@/styled-components/animation.styled";
import { styled } from "styled-components";

export const BodyAnswerSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .answer-section-question {
    background-color: ${themeColors.grayBorder};
    color: ${themeColors.darkBlue};
    width: 83%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-radius: 8px;
    ${fadeIn}
  }
`;

export const FooterAnswerSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  ${fadeIn}

  .answer-section-footer-btn {
    color: ${themeColors.darkBlue};
    background-color: ${themeColors.white};
    border: 2px solid ${themeColors.darkBlue};
    width: 8rem;
    margin-top: 2rem;
    border-radius: 8px;
    transition: background-color 0.5s;
    box-shadow: 4px 4px 3px ${themeColors.blackShadow};

    &:hover {
      color: ${themeColors.white};
      background-color: ${themeColors.darkBlue};
      cursor: pointer;
    }
  }
`;
