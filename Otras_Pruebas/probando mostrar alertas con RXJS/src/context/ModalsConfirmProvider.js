import { createContext, useContext, useState } from "react";

const UnContext = createContext();

const UnProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const [receivedData, setReceivedData] = useState("");
  const [dataToConfirm, setDataToConfirm] = useState(undefined);

  const handleConfirm = (data, from) => {
    setDataToConfirm({ data, from });
    setModalShow(false);
  };

  const handleCloseModal = () => {
    setReceivedData("");
    setModalShow(false);
  };

  const handleOpenModal = (data) => {
    setReceivedData(data);
    setModalShow(true);
  };

  const handleResetDataConfirm = () => {
    setReceivedData("");
    setDataToConfirm(undefined);
  };

  return (
    <UnContext.Provider
      value={{
        modalShow,
        receivedData,
        dataToConfirm,
        handleConfirm,
        handleCloseModal,
        handleOpenModal,
        handleResetDataConfirm,
      }}
    >
      {children}
    </UnContext.Provider>
  );
};

const useUnContext = () => {
  const context = useContext(UnContext);
  if (context === undefined) throw new Error("Un context must be used within a Un provider");

  return context;
};

export { useUnContext, UnProvider };
