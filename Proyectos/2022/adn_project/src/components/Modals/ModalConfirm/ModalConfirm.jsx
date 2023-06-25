import { useModalConfirmContext } from "context/ModalConfirmProvier";
import { ModalConfirmComponent } from "./ModalConfirmComponent";

export const ModalConfirm = () => {
  const { modalShow, receivedData, handleConfirm, handleCloseModal, child } =
    useModalConfirmContext();

  return (
    <ModalConfirmComponent
      show={modalShow}
      onHide={handleCloseModal}
      handleConfirm={handleConfirm}
      data={receivedData?.data}
      from={receivedData?.from}
      child={child}
    />
  );
};
