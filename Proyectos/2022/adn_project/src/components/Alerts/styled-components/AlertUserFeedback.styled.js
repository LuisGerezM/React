import { Alert } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { additionalColors } from "styled-components/Theme.styled";

const typeAlert = (type, theme, property) => {
  const variants = {
    success: {
      background: theme.blue,
      color: additionalColors.white,
      borderColor: theme.blue,
    },
    danger: {
      background: theme.red,
      color: additionalColors.white,
      borderColor: theme.red,
    },
    warning: {
      background: theme.warningYellow,
      color: additionalColors.white,
      borderColor: additionalColors.golden,
    },
  };

  return variants[type][property];
};

const AlertUserFeedbackStyled = styled(Alert)`
  position: fixed;
  right: 0;
  top: 100px;
  padding: 16px;
  width: 20rem;
  background-color: ${({ type, theme }) =>
    typeAlert(type, theme, "background")};
  color: ${({ type, theme }) => typeAlert(type, theme, "color")};
  border: 1px solid
    ${({ type, theme }) => typeAlert(type, theme, "borderColor")};
  z-index: 5;

  ${fadeIn({ time: "1.5s" })}
`;

export { AlertUserFeedbackStyled, typeAlert };
