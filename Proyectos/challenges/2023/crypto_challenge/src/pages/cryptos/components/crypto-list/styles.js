import { fadeIn } from '@/styles/animation.styles';
import { styled } from 'styled-components';

export const WrapCryptoList = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  min-height: 3.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const CryptoDetails = styled.article`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  ${fadeIn}

  .wrap-criptolist-details-image {
    width: 50px;
    min-width: 7%;

    @media (${({ theme }) => theme.responsive.xs}) {
      width: 30px;
      min-width: 15%;
    }
  }

  .wrap-criptolist-details-name {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    min-width: 50%;
    padding-left: 0.4rem;

    @media (${({ theme }) => theme.responsive.xs}) {
      min-width: 45%;
    }
  }

  .wrap-criptolist-details-percent-and-price {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    min-width: 25%;

    @media (${({ theme }) => theme.responsive.xs}) {
      flex-flow: column nowrap;
      justify-content: center;
      align-items: start;
    }
  }

  .wrap-criptolist-details-btn {
    min-width: 5%;

    @media (${({ theme }) => theme.responsive.xs}) {
      width: 30px;
      min-width: 10%;
    }
  }
`;
