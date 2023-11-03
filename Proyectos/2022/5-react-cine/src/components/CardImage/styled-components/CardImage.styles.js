import { customColors } from "App.styles";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardImageStylized = styled(Card.Img)`
  height: ${({ height }) => height};
  border: 4px groove ${customColors.secondaryColor};

  &:hover {
    border: 2px solid ${customColors.secondaryColor};
  }
`;

export { CardImageStylized };
