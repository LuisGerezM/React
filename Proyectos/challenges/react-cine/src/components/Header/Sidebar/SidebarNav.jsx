import { Nav } from "react-bootstrap";
import { NavLinkStylized } from "../styled-components/SidebarNav.styles";

export const SidebarNav = () => {
  return (
    <Nav className="justify-content-end px-md-2 ">
      <NavLinkStylized className="w-100 m-0 p-2 px-md-5" to="/">
        Inicio
      </NavLinkStylized>
    </Nav>
  );
};
