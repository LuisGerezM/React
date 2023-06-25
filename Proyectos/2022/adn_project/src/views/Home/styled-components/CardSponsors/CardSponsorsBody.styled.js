import styled from "styled-components";
import { Card } from "react-bootstrap";
import { backgroundAndColorByTheme } from "styled-components/App.styled";

const CardBodyStyled = styled(Card.Body)`
  padding: 0.5rem;
  ${backgroundAndColorByTheme}
  text-align: center;
`;

export { CardBodyStyled };
