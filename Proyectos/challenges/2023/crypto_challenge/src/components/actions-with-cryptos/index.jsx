import { movementAmountMoneyProduced } from '@/utilities/movement-amount-money-produced';
import { toFixedCryptoNumber } from '@/utilities/to-fixed-crypto-number.util';

import { CustomImage } from '@/components/custom-image';
import { CustomSubTitle, CustomText } from '@/components/typography';

import { FormToBuyOrSellCrypto } from './form-to-buy-or-sell-crypto';
import { InfoCryptoSelected, WrapActionsWithCryptos } from './styles';

/**
 * Render a form to buy or sell cryptocurrencies.
 *
 * @param {object} showFormWithThisInfo - Object with the necessary information to display the form.
 * - walletId {string} - ID of the wallet.
 * crypto {object} - Cryptocurrency information.
 * - amountCryptoBuy {number} - Amount of purchased cryptocurrencies (optional).
 * moneyAvailable {number} - Money available to buy cryptocurrencies.
 * - amountAvailableToSell {number} - Amount available to sell (amountMoneyInvested).
 * @param {function} handleSubmitFormClicked - Function called when form is submitted.
 * @param {string} typeForm - Type of form: "buy", "update" or "sell".
 *
 */
export const ActionsWithCryptos = ({
  showFormWithThisInfo: {
    walletId,
    crypto,
    moneyAvailable,
    amountMoneyInvested,
    amountAvailableToSell,
    amountCryptoBuy = null,
  },
  handleSubmitFormClicked,
  typeForm = 'buy',
}) => {
  const label = typeForm !== 'sell' ? 'Comprar cripto' : 'Vender cripto';

  const dataWithPersonalCrypto = {
    amountMoneyInvested: amountAvailableToSell,
    amountCryptoBuy,
  };

  const numericalValidationFieldToControl =
    typeForm !== 'sell'
      ? moneyAvailable
      : movementAmountMoneyProduced(dataWithPersonalCrypto, crypto) + amountMoneyInvested;

  return (
    <WrapActionsWithCryptos className='form-to-buy-or-sell-crypto'>
      <CustomSubTitle
        subtitleClass='form-to-buy-or-sell-crypto-action'
        text={`Acción: ${label}`}
        color='darkBlue'
      />
      <InfoCryptoSelected className='form-to-buy-or-sell-crypto-cryptoselect'>
        <div className='form-to-buy-or-sell-crypto-cryptoselect-wrap-text-and-image'>
          <CustomText
            textClass='form-to-buy-or-sell-crypto-cryptoselect-text'
            text={`Seleccionaste: ${crypto.name}`}
            color='darkBlue'
            fontWeight='heavy'
          />

          <CustomImage
            imgClass='form-to-buy-or-sell-crypto-details-image'
            src={crypto?.image}
            alt='Crypto selected image'
            title={`Imagen de la criptomoneda ${crypto?.name}`}
            imgWidth=''
          />
        </div>
        <div className='form-to-buy-or-sell-crypto-cryptoselect-wrap-price'>
          <CustomText
            textClass='form-to-buy-or-sell-crypto-price'
            text={`Precio: $${crypto.price}`}
            color='darkBlue'
            fontWeight='heavy'
          />
        </div>
        <CustomText
          textClass='form-to-buy-or-sell-crypto-amountcrypto'
          text={`Cantidad cripto: ${toFixedCryptoNumber(amountCryptoBuy, 8)}`}
          color='darkBlue'
          fontWeight='heavy'
        />
        <CustomText
          textClass='form-to-buy-or-sell-crypto-moneyAvailable'
          text={`Disponible: $${numericalValidationFieldToControl}`}
          color='darkBlue'
          title='Cantidad disponible para invertir'
          fontWeight='heavy'
        />
      </InfoCryptoSelected>

      <FormToBuyOrSellCrypto
        label={label}
        handleSubmitFormClicked={handleSubmitFormClicked}
        numericalValidationFieldToControl={numericalValidationFieldToControl}
        typeForm={typeForm}
        walletId={walletId}
        crypto={crypto}
      />
    </WrapActionsWithCryptos>
  );
};
