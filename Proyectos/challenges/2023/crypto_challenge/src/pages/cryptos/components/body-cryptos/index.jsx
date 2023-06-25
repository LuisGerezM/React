import { useBodyCryptos } from '../../hooks/useBodyCryptos';

import { DefaultSpinner } from '@/components/custom-spinners';
import { CryptoList } from '../crypto-list';

export const BodyCryptos = ({ cryptoList, walletId, handleShowModalWhithThisInfo }) => {
  const { loadingcryptoListToRender, cryptoListToRender, handleAddCrypto } = useBodyCryptos({
    handleShowModalWhithThisInfo,
    walletId,
    cryptoList,
  });

  if (loadingcryptoListToRender) return <DefaultSpinner loadClass='body-cryptos' />;

  return cryptoListToRender?.map(crypto => (
    <CryptoList
      key={`Cryptos-${crypto.id}`}
      crypto={crypto}
      handleAddCrypto={() => handleAddCrypto(crypto)}
    />
  ));
};
