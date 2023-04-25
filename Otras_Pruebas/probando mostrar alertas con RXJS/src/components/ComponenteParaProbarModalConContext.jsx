import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useUnContext } from "../context/ModalsConfirmProvider";

export const ComponenteParaProbarModalConContext = () => {
  const { dataToConfirm, handleOpenModal, handleResetDataConfirm } = useUnContext();

  const clickButtonModal = () => {
    const objectToSend = {
      from: "Component1WithModal",
      data: { id: "12345", text: "articulo XXXXXXXXX", showModalConfirm: true },
    };
    handleOpenModal(objectToSend);
  };

  useEffect(() => {
    if (dataToConfirm && dataToConfirm.from === "Component1WithModal") {
      handleResetDataConfirm();
    }

    return () => {
      handleResetDataConfirm();
    };
  }, [dataToConfirm]);

  return (
    <div>
      ComponenteParaProbarModalConContext
      <Button onClick={clickButtonModal}>Boton</Button>
    </div>
  );
};
