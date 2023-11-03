import { srcIcons } from '@/models/src-icons.models';
import { useNearScreen } from '@/hooks/use-near-screen';

import { CustomButton } from '@/components/custom-button';
import { CustomDataCryptoList } from '@/components/custom-data-crypto-list';
import { CustomImage } from '@/components/custom-image';

import { CryptoDetails, WrapCryptoList } from './styles';

export const CryptoList = ({ crypto, handleAddCrypto }) => {
  const [show, ref] = useNearScreen();

  return (
    <WrapCryptoList className='wrap-criptolist' ref={ref}>
      {show && (
        <CryptoDetails className='wrap-criptolist-details'>
          <CustomDataCryptoList
            imgClass='wrap-criptolist-details-image'
            altImg='crypto icon'
            titleImg='Icono de la criptomoneda'
            nameAndSymbolClass='wrap-criptolist-details-name'
            wrapPercentAndPriceClass='wrap-criptolist-details-percent-and-price'
            percentAndPriceClass='wrap-criptolist-details-percent'
            crypto={crypto}
          />
          <CustomButton
            buttonClass='wrap-criptolist-details-btn'
            onClick={() => handleAddCrypto(crypto?.id)}
            withShadow={false}
          >
            <CustomImage
              imgClass='wrap-criptolist-details-btn-image'
              src={srcIcons.ADD_ICON}
              alt='add icon'
              title='Agregar esta criptomoneda'
            />
          </CustomButton>
        </CryptoDetails>
      )}
    </WrapCryptoList>
  );
};
