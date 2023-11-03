import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authAndDocExistInFirebase } from "services/serviceQueryFirebase/authAndDocExistInFirebase.service";
import { statusResponse } from "utilities/statusResponse.util";
import { userFeedback } from "utilities/userFeedback.util";

const { REACT_APP...: USERCOLLECTION, REACT_APP...: RA } =
  process.env;

export const useAuthorizationGuard = () => {
  const userState = useSelector((store) => store.user);

  const [loadingPrivateRoute, setLoadingPrivateRoute] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const userIsAuth = async () => {
      try {
        const isAuth = await authAndDocExistInFirebase(
          userState.user.email,
          USERCOLLECTION,
          userState.user.email
        );

        const success = isAuth.status;
        const token = isAuth?.results?.data()?.token;

        if (success !== "success" || userState.userToken !== token)
          throw new Error(statusResponse("errorAuthorizationUser"));

        const email = isAuth.results.data().dataUser.email;

        if (userState.user.email !== email || userState.user.role !== RA)
          throw new Error(statusResponse("errorAuthorizationUser"));

        setIsAuth(true);
      } catch (error) {
        console.error("error AuthGuard", error.message);
        userFeedback({
          text: error.message,
          variant: "danger",
        });
        setIsAuth(false);
      } finally {
        setLoadingPrivateRoute(false);
      }
    };

    userIsAuth();
  }, []);

  return { loadingPrivateRoute, isAuth };
};
