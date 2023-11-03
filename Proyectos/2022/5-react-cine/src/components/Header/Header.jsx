import { Container, Navbar } from "react-bootstrap";
import { NavbarForm } from "./NavbarForm/NavbarForm";
import { Sidebar } from "./Sidebar/Sidebar";
import { NavbarStylized } from "./styled-components/Header.styles";
import { TitleNavbar } from "./TitleNavbar/TitleNavbar";

export const Header = () => {
  return (
    <NavbarStylized expand="md" className="mb-3 mx-0">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <div className="d-none d-md-flex col-md-2">
          <TitleNavbar />
        </div>
        <Sidebar />
        <NavbarForm />
      </Container>
    </NavbarStylized>
  );
};
