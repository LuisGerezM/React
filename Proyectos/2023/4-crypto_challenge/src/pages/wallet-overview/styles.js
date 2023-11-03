import { fadeIn } from '@/styles/animation.styles';
import { styled } from 'styled-components';

export const WrapWalletOverview = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
  ${fadeIn}

  .link-rr-wraplink {
    @media (${({ theme }) => theme.responsive.xs}) {
      display: flex;
      justify-content: center;
    }
  }

  .wrap-wallet-overview-linkrr {
    width: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  .wrap-wallet-overview-header-nameclient {
    width: 100%;
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;
