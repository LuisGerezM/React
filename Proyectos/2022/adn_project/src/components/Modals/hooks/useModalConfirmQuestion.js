import { useModalConfirmContext } from "context/ModalConfirmProvier";

export const useModalConfirmQuestion = (data) => {
  const { handleConfirm } = useModalConfirmContext();

  const onSubmit = (e) => {
    e.preventDefault();
    handleConfirm(data);
  };

  return { onSubmit };
};
