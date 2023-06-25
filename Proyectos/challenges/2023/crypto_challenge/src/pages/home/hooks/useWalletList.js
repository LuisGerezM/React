import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PAGE_SIZE = 5;

export const useWalletList = () => {
  const { wallets } = useSelector(store => store.walletsSlice);
  const personalCryptosByWallets = useSelector(store => store.personalCryptosSlice);

  const [allDataUserWallets, setAllDataUserWallets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [loadingWalletList, setLoadingWalletList] = useState(true);
  const [showLoadMessage, setShowLoadMessage] = useState(false);

  useEffect(() => {
    if (wallets.length > 0) {
      setLoadingWalletList(true);
      setAllDataUserWallets([]);
      setCurrentPage(1);
    }
  }, [wallets, personalCryptosByWallets]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;

    const newData = wallets.slice(startIndex, startIndex + PAGE_SIZE).map(wallet => {
      const personalCrypto = personalCryptosByWallets[wallet.id];

      return {
        ...wallet,
        ...personalCrypto,
      };
    });

    setAllDataUserWallets(prevValue => [...prevValue, ...newData]);
    setLoadingWalletList(false);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const isScrolledToBottom = scrollPosition === pageHeight;

      if (isScrolledToBottom && allDataUserWallets.length > 0) {
        setShowLoadMessage(true);

        setTimeout(() => {
          setShowLoadMessage(false);
        }, 2000);

        setCurrentPage(prevPage => prevPage + 1);
      }
    }, 200);

    if (allDataUserWallets.length >= wallets.length) {
      setShowLoadMessage(false);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [allDataUserWallets]);

  return { loadingWalletList, allDataUserWallets, showLoadMessage };
};
