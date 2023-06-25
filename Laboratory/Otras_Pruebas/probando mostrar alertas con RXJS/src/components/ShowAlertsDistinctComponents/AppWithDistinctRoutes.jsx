import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { UnProvider } from "../../context/ModalsConfirmProvider";
import { ComponenteParaProbarModalConContext } from "../ComponenteParaProbarModalConContext";
import { AlertDistinctComponents2 } from "./Alerts/AlertDistinctComponents2";
import { ModalWithContextApi } from "./ModalsWithContext/ModalWithContextApi";

export const AppWithDistinctRoutes = () => {
  return (
    <BrowserRouter>
      <UnProvider>
        <AlertDistinctComponents2 />
        <ModalWithContextApi />
        <Routes>
          <Route path="/" element={<Navigate to="/modalsDistinct1" />} />
          <Route path="/modalsDistinct1" element={<ComponenteParaProbarModalConContext />} />
        </Routes>
      </UnProvider>
    </BrowserRouter>
  );
};
