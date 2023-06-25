import { styled } from 'styled-components';

const transactionColor = {
  buy: 'persianGreen',
  sell: 'primaryRed',
  update: 'carrotOrange',
};

export const AccordionContainer = styled.div`
  border: 2px solid ${props => props.theme.colors[transactionColor[props.typetransaction]]};
  background-color: ${props => props.theme.colors[transactionColor[props.typetransaction]]};
  border-radius: 8px;
  margin: 1.5rem 0;

  .transactions-details-accordion-header {
    padding: 1rem;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: ${props =>
      props.activeindex === 'true'
        ? props.theme.colors.secondaryAzureDark700
        : props.theme.colors[transactionColor[props.typetransaction]]};

    &:hover {
      cursor: pointer;
      filter: brightness(1.5);
    }
  }
`;

export const AccordionBody = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

export const WrapAccordionCard = styled.div`
  .transactions-details-accordion-body-wrapaccordioncard-card-wrapcrypto {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    .transactions-details-accordion-body-wrapaccordioncard-card-wrapcrypto-element {
      margin-left: 0;

      @media (${({ theme }) => theme.responsive.mdAndLess}) {
        margin-left: 0.7rem;
      }
    }
  }
`;
