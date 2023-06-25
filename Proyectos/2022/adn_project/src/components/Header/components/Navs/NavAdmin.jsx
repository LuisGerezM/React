import NavLinkReactRouter from "components/NavLinkReactRouter/NavLinkReactRouter";
import { Nav } from "react-bootstrap";
import { admRoutes } from "schemas/routes.schema";

export const NavAdmin = ({ handleCloseToggle }) => {
  return (
    <Nav className="flex-column justify-content-end flex-grow-1 ">
      {admRoutes.map((route) => (
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
