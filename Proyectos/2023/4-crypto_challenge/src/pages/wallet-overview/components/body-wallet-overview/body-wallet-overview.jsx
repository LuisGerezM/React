import { BodyWalletCryptoDetails } from './body-wallet-crypto-details';

import { styled } from 'styled-components';

export const BodyWalletOverview = ({ cryptosInWallet, updateCryptoData, idWallet }) => {
  return (
    <WeapBodyWalletOverview className='body-wallet-overview'>
      {cryptosInWallet.map(crypto => (
        <BodyWalletCryptoDetails
          key={crypto.id}
          crypto={crypto}
          updateCryptoData={updateCryptoData}
          idWallet={idWallet}
        />
      ))}
    </WeapBodyWalletOverview>
  );
};

const WeapBodyWalletOverview = styled.div`
  margin-bottom: 3rem;
`;
