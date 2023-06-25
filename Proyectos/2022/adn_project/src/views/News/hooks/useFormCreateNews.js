import { useModalConfirmContext } from "context/ModalConfirmProvier";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { statusResponse } from "utilities/statusResponse.util";
import { userFeedback } from "utilities/userFeedback.util";
import { postNews } from "../interceptors/postNews.interceptor";

export const useFormCreateNews = (navigateToNews) => {
  const { handleOpenModal, setChild, handleAction, dataToConfirm, action } =
    useModalConfirmContext();

  const {
    user: { email },
  } = useSelector((store) => store.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { title: "", author: "", newsBody: "" },
    mode: "onChange",
  });

  const [loadingNewsSubmit, setLoadingNewsSubmit] = useState(false);

  useEffect(() => {
    const onSubmit = async (data) => {
      try {
        setLoadingNewsSubmit(true);

        const setNews = await postNews(data, email);

        if (setNews.status !== "success") throw new Error(setNews.status);

        const text = statusResponse("createNewsSuccessfully");
        userFeedback({ text });

        reset();
        navigateToNews("news");
      } catch (error) {
        console.error("error - FormCreateNews - onSubmit", error.message);
        const text = statusResponse("errorThereAreProblemsTryLater");
        userFeedback({ text, variant: "danger" });
      } finally {
        setLoadingNewsSubmit(false);
      }
    };

    if (dataToConfirm?.from === "FormCreateNews" && action === "confirm") {
      onSubmit(dataToConfirm.data);
    }
  }, [dataToConfirm]);

  const handleConfirm = (data) => {
    const objectToShow = {
      from: "FormCreateNews",
      data,
    };

    handleAction("confirm");
    setChild("ModalConfirm");
    handleOpenModal(objectToShow);
  };

  return { register, errors, handleSubmit, handleConfirm, loadingNewsSubmit };
};
