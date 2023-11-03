import NavLinkReactRouter from "components/NavLinkReactRouter/NavLinkReactRouter";
import { privRoutes } from "schemas/routes.schema";
import { HrStyled } from "styled-components/App.styled";

export const OffCanvasPrivateRoutes = ({ handleCloseToggle }) => {
  return (
    <>
      <HrStyled />
      {privRoutes.map((route) => (
        <NavLinkReactRouter
          key={route.name}
          to={route.path}
          name={route.name}
          icon={route.icon}
          handleCloseToggle={handleCloseToggle}
        />
      ))}
      <HrStyled />
    </>
  );
};
