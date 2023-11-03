import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { updateCryptoCurrency } from '@/redux/states/crypto-currency';

import { URLs } from '@/models/urls-services.models';
import fetchAPI from '@/services/fetchAPI.service';

import { cryptoAdapter } from '@/adapter/crypto.adapter';

import { orderArrayBy } from '@/utilities/order-array-by.util';

export const usePersistenceCryptoCurrency = () => {
  const [backUpCryptoList, setBackUpCryptoList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = URLs.allCryptos;
        const fetching = await fetchAPI({ url });
        if (fetching.error) dispatch(updateCryptoCurrency(backUpCryptoList));
        else {
          const adaptedCryptos = orderArrayBy(
            fetching.map(crypto => cryptoAdapter(crypto)),
            'price'
          );
          setBackUpCryptoList(adaptedCryptos);
          dispatch(updateCryptoCurrency(adaptedCryptos));
        }
      } catch (error) {
        console.error('Error use persistence list crypto', error.message);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 225000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};
