import { CustomMessageAlert } from '@/components/custom-message-alert';
import { DefaultSpinner } from '@/components/custom-spinners';
import { useEffect, useState } from 'react';

import { TransactionsDetails } from './transaction-detail';

const Transactions = ({ transactionsExist, handleShowModalWithThisInfo, transactionsInfo }) => {
  const [loadingTransactions, setLoadingTransactions] = useState(true);

  useEffect(() => {
    setLoadingTransactions(false);

    return () => {
      handleShowModalWithThisInfo(null);
    };
  }, []);

  if (loadingTransactions) return <DefaultSpinner />;

  return (
    <div className='wrap-transactions'>
      {transactionsExist ? (
        <div className='wrap-transactions-but'>
          <TransactionsDetails transactionsInfo={transactionsInfo} />
        </div>
      ) : (
        <CustomMessageAlert textClass='transactions' message='Aun no existen transacciones...' />
      )}
    </div>
  );
};

export default Transactions;
