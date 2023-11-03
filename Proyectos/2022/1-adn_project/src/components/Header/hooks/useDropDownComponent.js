import { getAuth, signOut } from "firebase/auth";
import { PublicRoutes } from "models/routes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser } from "redux/states/user";
import { app } from "services/serviceFirebase/firebaseConfig.service";

const auth = getAuth(app);

export const useDropDownComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(resetUser());
    signOut(auth);
    navigate(PublicRoutes.HOME, { replace: true });
  };

  return { handleLogout };
};
