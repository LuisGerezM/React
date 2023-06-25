import { styled } from 'styled-components';

export const WrapBodyWalletInformation = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;

  .wrap-body-wallet-info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: ${props => props.justifycontentbodywalletinfo};
    padding-top: 1.5rem;

    @media (${({ theme }) => theme.responsive.xs}) {
      justify-content: center;
    }

    .wrap-body-wallet-info-totalmoney-description,
    .wrap-body-wallet-info-moneyAvailable-description {
      margin-right: 0.5rem;
    }
  }
`;
