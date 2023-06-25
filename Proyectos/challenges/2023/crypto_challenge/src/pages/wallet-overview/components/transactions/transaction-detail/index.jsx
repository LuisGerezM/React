import { useState } from 'react';

import { toFixedCryptoNumber } from '@/utilities/to-fixed-crypto-number.util';
import { dateFormat } from '@/utilities/date-format.util';

import { CustomSubTitle, CustomText } from '@/components/typography';
import CustomCard from '@/components/custom-card';

import { AccordionBody, AccordionContainer, WrapAccordionCard } from './styles';

export const TransactionsDetails = ({ transactionsInfo }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordionItem = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const transactionTypeSchema = {
    buy: 'Compra',
    sell: 'Venta',
    update: 'Actualización',
  };

  return Object.keys(transactionsInfo).map((transactionByType, index) => (
    <AccordionContainer
      className='accordion-container'
      key={'transactions-details-accordion-container' + transactionByType + index}
      typetransaction={transactionByType}
      activeindex={(activeIndex === index).toString()}
    >
      <div className='transactions-details-accordion-item' key={index}>
        <div
          className='transactions-details-accordion-header'
          onClick={() => toggleAccordionItem(index)}
        >
          <CustomSubTitle
            className='transactions-details-accordion-header-subtitle'
            text={transactionTypeSchema[transactionByType]}
            color={transactionByType === 'update' ? 'darkBlue' : 'white'}
          />
        </div>
        {activeIndex === index && (
          <AccordionBody className='transactions-details-accordion-body'>
            {transactionsInfo[transactionByType].map(transaction => (
              <WrapAccordionCard
                className='transactions-details-accordion-body-wrapaccordioncard'
                key={transaction.id}
              >
                <CustomCard
                  cardClass='transactions-details-accordion-body-wrapaccordioncard-card'
                  key={'custom-card-' + transaction.id}
                >
                  <div className='transactions-details-accordion-body-wrapaccordioncard-card-wrapcrypto'>
                    <CustomText
                      textClass='transactions-details-accordion-body-wrapaccordioncard-card-wrapcrypto-element date'
                      text={'Fecha: ' + dateFormat.toLocaleString(transaction.date)}
                    />

                    <CustomText
                      textClass='transactions-details-accordion-body-wrapaccordioncard-card-wrapcrypto-element crypto'
                      text={'Cripto: ' + transaction.crypto}
                    />
                    <CustomText
                      textClass='transactions-details-accordion-body-wrapaccordioncard-card-wrapcrypto-element date'
                      text={'Inversión: $' + transaction.amountMoneyInvested}
                    />
                    <CustomText
                      textClass='transactions-details-accordion-body-wrapaccordioncard-card-wrapcrypto-element amountcrypto'
                      text={
                        'Cantidad cripto: ' +
                        `${toFixedCryptoNumber(
                          transactionByType === 'sell'
                            ? transaction.amountCryptoToSell
                            : transaction.amountCryptoBuy,
                          8
                        )}`
                      }
                      amountCryptoToSell
                    />
                  </div>
                </CustomCard>
              </WrapAccordionCard>
            ))}
          </AccordionBody>
        )}
      </div>
    </AccordionContainer>
  ));
};
