import { Navbar, Offcanvas } from "react-bootstrap";
import { TitleNavbar } from "../TitleNavbar/TitleNavbar";
import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  return (
    <Navbar.Offcanvas
      className="d-flex justify-content-start align-items-start"
      id={`offcanvasNavbar-expand-md`}
      aria-labelledby={`offcanvasNavbarLabel-expand-md`}
      placement="start"
    >
      <Offcanvas.Header className="pe-5" closeButton>
        <div className="d-flex d-md-none col-5">
          <TitleNavbar />
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <SidebarNav />
        {/* <SidebarForm /> */}
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};
