import styled from 'styled-components';

export const Image = styled.img`
  display: ${({ loadimg }) => (loadimg === 'true' ? 'none' : 'block')};
  width: ${({ imgwidth }) => imgwidth || '100%'};
  height: ${({ imgHeight }) => imgHeight || '100%'};

  &:hover {
    filter: brightness(2.5);
  }
`;
