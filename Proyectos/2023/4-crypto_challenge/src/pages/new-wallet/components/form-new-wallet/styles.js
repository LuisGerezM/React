import { styled } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 8px;
  padding: 2rem;
  border: 2px solid ${props => props.theme.colors.oregonBlue};
  box-shadow: ${props => props.theme.boxShadow};

  .form-to-buy-or-sell-crypto-form-input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    .input-field {
      width: 100%;

      &:focus {
        border-color: ${props => props.theme.colors.oregonBlue};
        outline: none;
        box-shadow: 0 0 5px blue;
      }
    }
  }

  .form-to-buy-or-sell-crypto-form-wrap-btns {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
  }
`;
