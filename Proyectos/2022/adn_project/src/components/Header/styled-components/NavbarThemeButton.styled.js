import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { themeBackGround } from "styled-components/App.styled";

export const ThemeBtnSTyled = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${themeBackGround};
  transition: 0.5s;
  ${fadeIn}

  &:hover {
    filter: brightness(1.5);
  }

  &:focus {
    outline: none;
  }
`;
