import { Offcanvas } from "react-bootstrap";
import { OffcanvasBodyStyled } from "../../styled-components/OffCanvas/OffCanvas.styled";
import { OffCanvasPrivatePart } from "./components/OffCanvasPrivatePart";
import { OffCanvasHeader } from "./OffCanvasHeader";

export const OffCanvasNavAdminFullSize = ({
  showPrivateOptionsNav,
  handleNavAdminFullSize,
}) => {
  return (
    <Offcanvas show={showPrivateOptionsNav} onHide={handleNavAdminFullSize}>
      <OffCanvasHeader />
      <OffcanvasBodyStyled>
        <OffCanvasPrivatePart
          handleCloseToggle={handleNavAdminFullSize}
          display={true}
        />
      </OffcanvasBodyStyled>
    </Offcanvas>
  );
};
