import { createContext, useContext, useState } from "react";
import { lenguageAppSchema } from "schemas/app.schema";

const ModalConfirmContext = createContext();

const ModalConfirmProvier = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const [receivedData, setReceivedData] = useState("");
  const [dataToConfirm, setDataToConfirm] = useState(undefined);
  const [action, setAction] = useState("");
  const [child, setChild] = useState(undefined);
  const [reConfirm, setReConfirm] = useState("");

  const handleConfirm = (data) => {
    if (reConfirm) handleReConfirm(receivedData.from, data);
    else setReConfirm(lenguageAppSchema("areYouSurePleaseConfirmAgainText"));
  };

  const handleReConfirm = (from, data) => {
    setDataToConfirm({ from, data });
    setChild(undefined);
    handleCloseModal();
  };

  const handleAction = (action) => {
    setAction(action);
  };

  const handleCloseModal = () => {
    setReceivedData("");
    setReConfirm("");
    setChild(undefined);
    setModalShow(false);
  };

  const handleOpenModal = (data) => {
    setReceivedData(data);
    setModalShow(true);
  };

  const handleResetDataConfirm = () => {
    setAction("");
    setReceivedData("");
    setReConfirm("");
    setDataToConfirm(undefined);
  };

  return (
    <ModalConfirmContext.Provider
      value={{
        modalShow,
        receivedData,
        dataToConfirm,
        child,
        action,
        reConfirm,
        handleConfirm,
        handleCloseModal,
        handleOpenModal,
        handleResetDataConfirm,
        setChild,
        handleAction,
        handleReConfirm,
      }}
    >
      {children}
    </ModalConfirmContext.Provider>
  );
};

const useModalConfirmContext = () => {
  const context = useContext(ModalConfirmContext);
  if (context === undefined)
    throw new Error(
      "Modal Confirm context must be used within a Modal Confirm provider"
    );

  return context;
};

export { useModalConfirmContext, ModalConfirmProvier };
