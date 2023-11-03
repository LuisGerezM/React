import NavLinkReactRouter from "components/NavLinkReactRouter/NavLinkReactRouter";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loginRoute, pubRoutes } from "schemas/routes.schema";
import { DropDownComponent } from "../DropDownComponent/DropDownComponent";

export const NavbarFull = ({ handleCloseToggle }) => {
  const { user, userToken } = useSelector((store) => store.user);

  return (
    <Nav className="justify-content-end flex-grow-1 ">
      {pubRoutes.map((route) => (
        <NavLinkReactRouter
          key={route.name}
          to={route.path}
          name={route.name}
          icon={route.icon}
          handleCloseToggle={handleCloseToggle}
        />
      ))}
      {user.email && user.role && userToken ? (
        <DropDownComponent user={user} handleCloseToggle={handleCloseToggle} />
      ) : (
        <NavLinkReactRouter
          to={loginRoute.path}
          name={loginRoute.name}
          icon={loginRoute.icon}
          handleCloseToggle={handleCloseToggle}
        />
      )}
    </Nav>
  );
};
