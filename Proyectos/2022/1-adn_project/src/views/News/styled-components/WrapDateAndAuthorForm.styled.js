import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";

export const WrapDateAndAuthorFormStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${fadeIn({ time: "1.5s" })}
`;
