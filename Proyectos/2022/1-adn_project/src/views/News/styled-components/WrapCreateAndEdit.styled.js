import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";

const RowCreateAndEditStyled = styled(Row)`
  display: flex;
  justify-content: center;
  ${fadeIn({ time: "1.5s" })}
`;

const ColCreateAndEditStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px 0 5px 0;
`;

export { RowCreateAndEditStyled, ColCreateAndEditStyled };
