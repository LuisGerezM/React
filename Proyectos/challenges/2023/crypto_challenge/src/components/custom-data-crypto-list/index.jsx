import { Fragment } from 'react';

import { CustomImage } from '../custom-image';
import { CustomSmallText, CustomText } from '../typography';

export const CustomDataCryptoList = ({
  imgClass = '',
  altImg = '',
  titleImg = '',
  nameAndSymbolClass = '',
  wrapPercentAndPriceClass = '',
  percentAndPriceClass = '',
  crypto,
}) => {
  const colorPorcentageIsPositive = crypto?.percent > 0 ? 'persianGreen' : 'primaryRed';
  const porcentageIsPositive = crypto?.percent > 0 ? `+${crypto?.percent}` : crypto?.percent;

  return (
    <Fragment>
      <CustomImage
        imgClass={`custom-data-crypto-list ${imgClass}`}
        src={crypto?.image}
        alt={altImg}
        title={titleImg}
      />
      <div className={`custom-data-crypto-list-wrap-nameandsymbol ${nameAndSymbolClass}`}>
        <CustomText text={crypto?.symbol} color='darkBlue' />
        <CustomSmallText text={crypto?.name} color='darkBlue' />
      </div>

      <div
        className={`custom-data-crypto-list-details-percent-and-price ${wrapPercentAndPriceClass}`}
      >
        <CustomText
          className={percentAndPriceClass}
          color={crypto?.percent === 0 ? 'darkBlue' : colorPorcentageIsPositive}
          text={porcentageIsPositive}
        />
        <CustomText className={percentAndPriceClass} color='darkBlue' text={'$' + crypto?.price} />
      </div>
    </Fragment>
  );
};
