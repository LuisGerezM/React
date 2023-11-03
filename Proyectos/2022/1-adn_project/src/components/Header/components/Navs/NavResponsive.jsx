import NavLinkReactRouter from "components/NavLinkReactRouter/NavLinkReactRouter";
import { Nav } from "react-bootstrap";
import { privRoutes } from "schemas/routes.schema";

export const NavResponsive = ({ handleCloseToggle }) => {
  return (
    <Nav className="flex-column justify-content-end flex-grow-1 ">
      {privRoutes.map((route) => (
        <NavLinkReactRouter
          key={route.name}
          to={route.path}
          name={route.name}
          icon={route.icon}
          handleCloseToggle={handleCloseToggle}
          privated={true}
        />
      ))}
    </Nav>
  );
};
