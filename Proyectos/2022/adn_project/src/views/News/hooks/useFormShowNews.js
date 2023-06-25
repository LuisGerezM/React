import { useEffect } from "react";
import { useSelector } from "react-redux";
import { statusResponse } from "utilities/statusResponse.util";
import { userFeedback } from "utilities/userFeedback.util";
import { getNews } from "../interceptors/getNews.interceptor";
import { putNews } from "../interceptors/putNews.interceptor";
import { TYPES_NEWS_REDUCER } from "./useNewsReducer";

export const useFormShowNews = (
  dispatch,
  dataToConfirm,
  handleResetDataConfirm
) => {
  const {
    user: { email },
  } = useSelector((store) => store.user);

  const fetchNews = async () => {
    try {
      const fetchingNews = await getNews();

      if (fetchingNews.status !== "success")
        throw new Error(fetchingNews.status);

      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_SUCCESS,
        payload: {
          news: fetchingNews.data,
          success_message: "get News success",
        },
      });
    } catch (error) {
      console.error("useFormShowNews - fetchNews", error.message);
      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_FAILURE,
        payload: error.message,
      });
    } finally {
      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_RESET_NOTIFICATION,
      });
    }
  };

  useEffect(() => {
    dispatch({
      type: TYPES_NEWS_REDUCER.NEWS_REQUEST,
    });

    fetchNews();

    return () => {
      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_RESET,
      });
    };
  }, []);

  const updateNews = async () => {
    try {
      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_REQUEST,
      });

      const updateNew = await putNews(dataToConfirm.data, email);

      if (updateNew.status !== "success") throw new Error(updateNew.data);

      const text = statusResponse("operationSuccessfully");
      userFeedback({ text });

      fetchNews();
    } catch (error) {
      console.error("error FormShowNews - updateNews", error.message);
      const text = statusResponse("errorThereAreProblemsTryLater");
      userFeedback({ text, variant: "danger" });
      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_RESET_NOTIFICATION,
      });
    }
  };

  useEffect(() => {
    if (dataToConfirm && dataToConfirm.from === "FormShowNews") {
      updateNews();
      handleResetDataConfirm();
    }

    return () => {
      handleResetDataConfirm();
    };
  }, [dataToConfirm]);
};
