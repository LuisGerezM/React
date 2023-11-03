import { PublicRoutes } from "models/routes";
import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesNoMatch = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to={PublicRoutes.HOME} />} />
    </Routes>
  );
};
