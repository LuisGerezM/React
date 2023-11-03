import { Fragment } from 'react';

import BodyWalletInformation from '@/components/body-wallet-information';
import CustomCard from '@/components/custom-card';
import { CustomTitle } from '@/components/typography';

export const HeaderCryptos = ({ nameWallet, totalMoney, moneyAvailable }) => {
  return (
    <Fragment>
      <CustomTitle titleClass='cryptos-nameclient' color='darkBlue' text={nameWallet} />
      <CustomCard cardClass='cryptos-card' width='50%'>
        <BodyWalletInformation
          bodyWalletInformationClass='cryptos-bodyWalletInformation'
          totalMoney={totalMoney}
          moneyAvailable={moneyAvailable}
          justifyContentBodyWalletInfo='center'
        />
      </CustomCard>
    </Fragment>
  );
};
