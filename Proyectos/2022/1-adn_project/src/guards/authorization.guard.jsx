import { SpinnerLoad } from "components/SpinnerLoad/SpinnerLoad";
import { useAuthorizationGuard } from "hooks/guards/useAuthorizationGuard";
import { PublicRoutes } from "models/routes";
import { Navigate, Outlet } from "react-router-dom";

export const AuthorizationGuard = () => {
  const { loadingPrivateRoute, isAuth } = useAuthorizationGuard();

  if (loadingPrivateRoute) return <SpinnerLoad />;

  return isAuth ? <Outlet /> : <Navigate replace to={PublicRoutes.HOME} />;
};

export default AuthorizationGuard;
