import { styled } from 'styled-components';

export const WrapCryptos = styled.div`
  width: 100%;
  height: 100%;

  .cryptos-linkrr {
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  .cryptos-nameclient {
    text-align: center;
    margin-bottom: 1rem;
  }

  .cryptos-card {
    margin: auto;

    &:hover {
      filter: brightness(2);
    }

    .cryptos-bodyWalletInformation {
      width: 90%;
      margin: auto;
    }
  }
`;

export const HR = styled.hr`
  height: 0.7rem;
  border-top: 2px solid ${props => props.theme.colors.neutralGreyDark600};
  border-bottom: 2px solid ${props => props.theme.colors.neutralGreyDark600};
  border-right: none;
  border-left: none;
  margin-top: 2rem;
  margin-bottom: 2rem;
  filter: drop-shadow(3px 2px 2px ${props => props.theme.colors.darkBlue});
`;
