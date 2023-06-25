import { styled } from 'styled-components';

export const WrapHeaderWalletOverview = styled.div`
  .wallet-body {
    width: 35%;
  }

  .wrap-wallet-overview-header-actions {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 60%;

    .wrap-wallet-overview-header-actions-btn-showtransasctions {
      margin-left: 0.8rem;
      @media (${({ theme }) => theme.responsive.xs}) {
        margin-left: 0;
        margin-top: 0.8rem;
      }
    }

    @media (${({ theme }) => theme.responsive.xs}) {
      flex-flow: column nowrap;
    }
  }

  .wrap-header-wallet-overview-subtitle {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;
