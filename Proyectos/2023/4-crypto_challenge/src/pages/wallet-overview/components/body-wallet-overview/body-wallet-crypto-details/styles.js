import { fadeIn } from '@/styles/animation.styles';
import { styled } from 'styled-components';

export const WrapBodyWalletCryptoDetails = styled.div`
  border-top: 3px outset ${props => props.theme.colors.oregonBlue};
  border-bottom: 3px outset ${props => props.theme.colors.oregonBlue};
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
`;

export const CryptoDetails = styled.div`
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
`;

export const CryptoDetailsFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  ${fadeIn}
`;
