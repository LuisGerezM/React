import { updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  userFailure,
  userRequest,
  userResetNotification,
  userSuccess,
} from "redux/states/user";
import { getUser } from "../interceptor/getUser.interceptor";
import { lenguageAppSchema } from "schemas/app.schema";
import { statusResponse } from "utilities/statusResponse.util";
import { userFeedback } from "utilities/userFeedback.util";
import { PublicRoutes } from "models/routes";

export const useLogin = () => {
  const { user, success_request, error, status_code, loadingUser } =
    useSelector((store) => store.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    try {
      dispatch(userRequest());

      const fetchUser = await getUser();

      if (fetchUser.status !== "success") throw new Error(fetchUser.status);

      const {
        data: { userIsAuth, userDataAdapted },
      } = fetchUser;

      updateDoc(userIsAuth.docRef, {
        token: userDataAdapted.token,
      });

      dispatch(
        userSuccess({
          userName: userDataAdapted.dataUser.userName,
          email: userDataAdapted.dataUser.email,
          role: userDataAdapted.dataUser.role,
          status: userIsAuth.status,
          token: userDataAdapted.token,
        })
      );
    } catch (error) {
      console.log({ error });
      console.error("error useLogin - handleLoginWithGoogle", error.message);

      dispatch(userFailure(error.message));
    }
  };

  useEffect(() => {
    if (user.email && user.userToken)
      navigate(PublicRoutes.HOME, { replace: true });
  }, [user]);

  useEffect(() => {
    if (error) {
      let text = "";
      if (error === "Firebase: Error (auth/popup-closed-by-user).") {
        text = statusResponse("errorCloseGooglePopUp");
      } else {
        text =
          statusResponse("errorChekingUserUnidentified") +
          ". " +
          lenguageAppSchema("contactTheAdmin");
      }

      userFeedback({ text, variant: "danger" });
      dispatch(userResetNotification());
    }
  }, [error, status_code, dispatch]);

  useEffect(() => {
    if (user.role && success_request) {
      const text =
        statusResponse("loginSuccessfully") + ". Bienvenido " + user.email;

      userFeedback({ text });

      dispatch(userResetNotification());
      navigate("/home", { replace: true });
    }
  }, [success_request, user, status_code, dispatch, navigate]);

  return { handleLoginWithGoogle, loadingUser };
};
