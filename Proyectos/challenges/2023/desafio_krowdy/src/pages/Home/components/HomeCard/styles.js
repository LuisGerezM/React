import { css, styled } from "styled-components";
import { disabledCssStyle } from "@/styled-components/App.styled";
import { themeColors } from "@/styled-components/Theme.styled";

export const Card = styled.div`
  width: 321px;
  height: 400px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${themeColors.txtGray};
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 4px 4px 3px ${themeColors.blackShadow};

  filter: drop-shadow(0px 5px 5px ${themeColors.blackShadow});

  .card-body {
    width: 100%;
    height: 295px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-color: ${themeColors.mattBlue};
    color: ${themeColors.white};

    filter: drop-shadow(0px 5px 5px ${themeColors.blackShadow});
  }

  .card-body-video-preview {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .custom-video-preview-repeat {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      box-shadow: 4px 4px 3px ${themeColors.blackShadow};
    }
  }

  .card-body-message {
    text-align: center;
  }

  .card-body-btn {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 45px;
    left: 10px;
    ${props =>
      props.hasvideorecord.status
        ? css`
            background-color: ${themeColors.transparent};
            color: ${themeColors.white};
            border: 2px solid ${themeColors.skyBlue};

            &:hover {
              background-color: ${themeColors.skyBlue};
              border: 2px solid ${themeColors.skyBlue};
              cursor: pointer;
            }
          `
        : disabledCssStyle}

    .card-body-btn-img {
      ${props => !props.hasvideorecord.status && disabledCssStyle};
    }
  }

  .card-footer {
    height: 5.3rem;
    width: 100%;
    text-align: center;
  }
`;
