import { Navbar } from "react-bootstrap";
import { OffcanvasBodyStyled } from "../../styled-components/OffCanvas/OffCanvas.styled";
import { NavbarFull } from "../Navs/NavbarFull";
import { OffCanvasPrivatePart } from "./components/OffCanvasPrivatePart";
import { OffCanvasHeader } from "./OffCanvasHeader";

export const OffCanvas = ({ handleCloseToggle }) => {
  return (
    <Navbar.Offcanvas
      id={`offcanvasNavbar-expand-md`}
      aria-labelledby={`offcanvasNavbarLabel-expand-md`}
      placement="start"
    >
      <OffCanvasHeader />
      <OffcanvasBodyStyled>
        <NavbarFull handleCloseToggle={handleCloseToggle} />
        <OffCanvasPrivatePart handleCloseToggle={handleCloseToggle} />
      </OffcanvasBodyStyled>
    </Navbar.Offcanvas>
  );
};
