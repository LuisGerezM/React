import { useModalConfirmContext } from "context/ModalConfirmProvier";
import { useSelector } from "react-redux";

export const useModalDeleteNews = (data) => {
  const { handleConfirm } = useModalConfirmContext();
  const {
    user: { email },
  } = useSelector((store) => store.user);

  const onSubmit = (e) => {
    e.preventDefault();
    const newDataToDelete = {
      ...data,
      deletedDate: +new Date(),
      deletedBy: email,
    };
    handleConfirm(newDataToDelete);
  };

  return { onSubmit };
};
