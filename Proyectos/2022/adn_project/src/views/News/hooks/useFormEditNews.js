import { useModalConfirmContext } from "context/ModalConfirmProvier";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export const useFormEditNews = (data) => {
  const { handleConfirm, loading } = useModalConfirmContext();
  const {
    user: { email },
  } = useSelector((store) => store.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: data?.title,
      author: data?.author,
      newsBody: data?.newsBody,
    },
    mode: "onChange",
  });

  const onSubmit = (newData) => {
    const newDataToEdit = {
      ...data,
      ...newData,
      editedDate: +new Date(),
      editedBy: email,
    };
    handleConfirm(newDataToEdit);
  };

  return { register, errors, handleSubmit, onSubmit, loading };
};
