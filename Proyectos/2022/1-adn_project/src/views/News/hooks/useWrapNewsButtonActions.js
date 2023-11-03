import { useModalConfirmContext } from "context/ModalConfirmProvier";

export const useWrapNewsButtonActions = () => {
  const { handleOpenModal, setChild, handleAction } = useModalConfirmContext();

  const handleUpdateNew = (newSelected) => {
    const objectToShow = {
      from: "FormShowNews",
      data: newSelected,
    };

    handleAction("update");
    setChild("ModalEditNews");
    handleOpenModal(objectToShow);
  };

  const handleDeleteNew = (newSelected) => {
    const objectToShow = {
      from: "FormShowNews",
      data: { ...newSelected, active: false },
    };

    handleAction("delete");
    setChild("ModalDeleteNews");
    handleOpenModal(objectToShow);
  };

  return { handleUpdateNew, handleDeleteNew };
};
