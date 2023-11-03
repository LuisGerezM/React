import styled from "styled-components";
import { inputTextCssStyle } from "styled-components/App.styled";
import { additionalColors } from "styled-components/Theme.styled";

const WrapButtonSubmitStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonSubmitStyled = styled.button`
  ${inputTextCssStyle}
  background-color: ${({ theme }) => theme.greenTheme};
  color: ${({ theme }) => theme.background} !important;
  padding: 0.5rem;
  border-radius: 8px;
  outline: 3px solid ${({ theme }) => theme.greenTheme};
  transition: 0.5s;

  filter: drop-shadow(
    0px 6px 6px
      ${({ theme }) =>
        theme.name === "dark"
          ? "rgba(174, 179, 203, 0.5)"
          : "rgba(0, 0, 0, 0.5)"}
  );

  &:hover {
    background-color: ${additionalColors.betweenBlueGreed};
    color: ${additionalColors.white};
    outline: 3px solid ${additionalColors.betweenBlueGreed};
  }
`;

export { ButtonSubmitStyled, WrapButtonSubmitStyled };
