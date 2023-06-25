import { styled } from 'styled-components';
import { fadeIn } from '@/styles/animation.styles';

export const WrapActionsWithCryptos = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  ${fadeIn}

  @media (${({ theme }) => theme.responsive.xs}) {
    padding-left: 0;
    padding-right: 0;
  }

  .form-to-buy-or-sell-crypto-action {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const InfoCryptoSelected = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 3.5rem;

  @media (${({ theme }) => theme.responsive.xs}) {
    line-height: 3.5rem;
  }

  .form-to-buy-or-sell-crypto-cryptoselect-wrap-text-and-image {
    height: 5rem;
    display: flex;
    align-items: center;

    .form-to-buy-or-sell-crypto-cryptoselect-text {
      line-height: 2rem;

      @media (${({ theme }) => theme.responsive.xs}) {
        line-height: 1.3rem;
      }
    }
  }

  .form-to-buy-or-sell-crypto-details-image {
    width: 15%;
    height: 70%;
    margin-left: 1rem;
    margin-bottom: 1.5rem;

    @media (${({ theme }) => theme.responsive.xs}) {
      min-width: 15%;
      height: 50%;
    }
  }

  .form-to-buy-or-sell-crypto-price {
    display: flex;
    align-items: center;
  }
`;
