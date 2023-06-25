import styled from "styled-components";
import { SmallTextsStyled } from "styled-components/App.styled";

export const ErrorsValidationFormStyled = styled.div`
  color: ${({ theme }) => theme.red};
  font-weight: bold;
  ${SmallTextsStyled};
`;
