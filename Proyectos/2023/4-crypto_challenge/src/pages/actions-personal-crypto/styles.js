import { styled } from 'styled-components';

export const WrapActionsPersonalCrypto = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 70vh;

  @media (${({ theme }) => theme.responsive.xs}) {
    align-items: center;
    justify-content: start;
  }

  .wrap-actions-personal-crypto-btn {
    margin-bottom: 2rem;
  }
`;
