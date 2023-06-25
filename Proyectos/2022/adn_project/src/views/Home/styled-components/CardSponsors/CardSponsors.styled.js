import styled from "styled-components";
import { Card } from "react-bootstrap";
import { additionalColors } from "styled-components/Theme.styled";

const CardStyled = styled(Card)`
  border: 5px outset ${additionalColors.betweenBlueGreed};

  &:hover {
    border: 5px inset ${additionalColors.betweenBlueGreed};
  }
`;

export { CardStyled };
