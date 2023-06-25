import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import {
  responsiveDesign,
  smallTextCssStyle,
} from "styled-components/App.styled";
import { additionalColors } from "styled-components/Theme.styled";

const WrapNewsFormStyled = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 2rem;
  border-radius: 8px;
  outline: 3px groove ${additionalColors.betweenBlueGreed};
  min-height: ${({ show }) => (show ? "auto" : "200px")};
  ${fadeIn({ time: "1.5s" })}
`;

const WrapNewsButtonActionsStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  ${fadeIn({ time: "1.5s" })}
`;

const InputNewsDisabledStyled = styled.input`
  border-radius: none;
  padding: 0.3rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.blue};
  background: ${({ theme }) => theme.background};
  transition: 0.5s;
  ${smallTextCssStyle}

  ${fadeIn({ time: "1.5s" })}


  &:focus {
    outline: 2px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.primaryColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondaryColor};
  }

  ${responsiveDesign.desktop} {
    padding: 1rem;
  }
`;

const defineHeight = {
  default: "15rem",
  expand: (size) => `${size / 3.2}px`,
};

const TextAreaNewsDisabledStyled = styled.input`
  ${({ textSize }) => console.log(textSize)}
  height: ${({ from, textSize }) =>
    from
      ? textSize > "750"
        ? defineHeight.expand(textSize)
        : defineHeight.default
      : "23rem"};
  border-radius: 8px;

  padding: 0.3rem;
  border: 2px solid ${({ theme }) => theme.blue};
  background: ${({ theme }) => theme.background};
  overflow: ${({ from }) => (from ? "hidden" : "auto")};
  resize: ${({ from }) => (from === "fromNews" ? "none" : "auto")};
  transition: 0.5s;
  ${smallTextCssStyle}

  ${fadeIn({ time: "1.5s" })}

  &:focus {
    outline: 2px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.primaryColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondaryColor};
  }

  ${responsiveDesign.desktop} {
    padding: 1rem;
  }
`;

export {
  WrapNewsButtonActionsStyled,
  InputNewsDisabledStyled,
  TextAreaNewsDisabledStyled,
  WrapNewsFormStyled,
};
