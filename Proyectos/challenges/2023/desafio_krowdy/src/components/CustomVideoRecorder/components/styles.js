import { styled } from "styled-components";
import { themeColors } from "@/styled-components/Theme.styled";
import { fadeIn } from "@/styled-components/animation.styled";

export const WrapAlreadyHaveRecordedVideo = styled.div`
  background-color: ${themeColors.darkBlue};
  width: 100%;
  height: 98%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 4px 4px 3px ${themeColors.blackShadow};
  ${fadeIn}

  .already-recorded-video-wrap-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .already-recorded-video-wrap-btn-updated {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${themeColors.white};

    &:hover {
      background-color: ${themeColors.txtGray};
      cursor: pointer;
    }
  }

  .already-recorded-video-wrap-btn-prev {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 8px;
    border: 2px solid ${themeColors.greenBlue};
    color: ${themeColors.greenBlue};
    background-color: ${themeColors.transparent};

    &:hover {
      color: ${themeColors.darkBlue};
      background-color: ${themeColors.greenBlue};
      cursor: pointer;
    }
  }
`;
