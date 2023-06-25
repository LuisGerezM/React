import { styled } from "styled-components";

export const Image = styled.img`
  width: 1.3rem;

  &:hover {
    filter: saturate(700%);
    cursor: pointer;
  }
`;
