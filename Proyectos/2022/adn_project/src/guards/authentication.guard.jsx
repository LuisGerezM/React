import { SpinnerLoad } from "components/SpinnerLoad/SpinnerLoad";
import { useAuthenticationGuard } from "hooks/guards/useAuthenticationGuard";
import { PublicRoutes } from "models/routes";
import { Navigate, Outlet } from "react-router-dom";

export const AuthenticationGuard = () => {
  const { loadingPrivateRoute, isAuth } = useAuthenticationGuard();

  if (loadingPrivateRoute) return <SpinnerLoad />;

  return isAuth ? <Outlet /> : <Navigate replace to={PublicRoutes.HOME} />;
};

export default AuthenticationGuard;
