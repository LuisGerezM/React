import { useUnContext } from "../../../context/ModalsConfirmProvider";
import { MyVerticallyCenteredModal } from "../../MyVerticallyCenteredModal";

export const ModalWithContextApi = () => {
  const { modalShow, receivedData, handleConfirm, handleCloseModal } = useUnContext();
  console.log({ receivedData });
  return (
    <div>
      Component con modal
      <hr />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => handleCloseModal()}
        handleConfirm={handleConfirm}
        data={receivedData?.data}
        from={receivedData?.from}
      />
    </div>
  );
};
