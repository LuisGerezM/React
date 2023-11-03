import { Container } from "react-bootstrap";
import { OffCanvas } from "./components/OffCanvas/OffCanvas";
import { NavbarStyled, ToggleStyled } from "./styled-components/Header.styled";
import { OffCanvasNavAdminFullSize } from "./components/OffCanvas/OffCanvasNavAdminFullSize";
import { useHeader } from "./hooks/useHeader";
import { LogoAdn } from "./components/LogoAdn/LogoAdn";
import { MenuButtonIcon } from "./components/MenuButtonIcon/MenuButtonIcon";
import { NavLastLogoAndBtnTheme } from "./components/Navs/NavLastLogoAndBtnTheme";

export const Header = ({ themeSelect, handleChangeTheme }) => {
  const {
    user,
    userToken,
    showPrivateOptionsNav,
    clickToggleBtn,
    clickNavAdminFullSizeBtn,
    isPhone,
    handleCloseToggle,
    handleNavAdminFullSize,
  } = useHeader();

  return (
    <>
      <NavbarStyled expand="md" className="NavbarStyled">
        <Container fluid>
          <ToggleStyled
            ref={clickToggleBtn}
            aria-controls={`offcanvasNavbar-expand-md`}
          />

          <LogoAdn nameClass="col col-1 d-none d-md-flex" />

          {user.email && userToken && !isPhone && (
            <MenuButtonIcon
              onClick={handleNavAdminFullSize}
              ref={clickNavAdminFullSizeBtn}
            />
          )}

          <OffCanvas handleCloseToggle={handleCloseToggle} />

          <NavLastLogoAndBtnTheme
            themeSelect={themeSelect}
            handleChangeTheme={handleChangeTheme}
          />
        </Container>
      </NavbarStyled>
      <OffCanvasNavAdminFullSize
        showPrivateOptionsNav={showPrivateOptionsNav}
        handleNavAdminFullSize={handleNavAdminFullSize}
      />
    </>
  );
};
