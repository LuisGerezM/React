import styled from "styled-components";
import { responsiveDesign } from "styled-components/App.styled";

const WrapHeaderNewsStyled = styled.div`
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${responsiveDesign.desktop} {
    margin: 1rem 0 2rem 0;
  }
`;

export { WrapHeaderNewsStyled };
