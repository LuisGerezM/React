import { customColors, desktop } from "App.styles";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardStylized = styled(Card)`
  height: 580px;
  transition: 1s;
  overflow: hidden;
  border: 7px groove ${customColors.secondaryColor};

  ${desktop} {
    &:hover {
      transform: scale3d(1.2, 1.1, 0.3);
      z-index: 2;
    }
  }
`;

const CardDivStylized = styled.div`
  height: ${({ height }) => height};
`;

export { CardStylized, CardDivStylized };
