import styled from "styled-components";

import ReactWhatsapp from "react-whatsapp";
import { backgroundAndColorByTheme } from "styled-components/App.styled";
import { Card } from "react-bootstrap";

const CardFooterStyled = styled(Card.Footer)`
  ${backgroundAndColorByTheme}
  padding: .5rem 0;
  overflow: hidden;
`;

const ReactWhatsappStyled = styled(ReactWhatsapp)`
  ${backgroundAndColorByTheme}
  border: none;
`;

export { CardFooterStyled, ReactWhatsappStyled };
