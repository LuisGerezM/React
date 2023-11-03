import { fadeIn } from '@/styles/animation.styles';
import { styled } from 'styled-components';

export const WrapHome = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  ${fadeIn}

  .home-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .link-rr-wraplink {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .home-amountwallet {
    padding: 0.3rem 0.3rem 0;
    border-bottom: 2px solid ${props => props.theme.colors.secondaryAzureDark700};
    margin-bottom: 1.5rem;
  }
`;
