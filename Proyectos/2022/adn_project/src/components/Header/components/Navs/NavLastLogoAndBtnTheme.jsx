import { Navbar } from "react-bootstrap";
import { LogoAdn } from "../LogoAdn/LogoAdn";
import { NavbarThemeButton } from "../NavbarThemeButton/NavbarThemeButton";

export const NavLastLogoAndBtnTheme = ({ themeSelect, handleChangeTheme }) => {
  return (
    <Navbar className="p-0 col col-6 col-sm-3 col-md-1 d-flex justify-content-end align-items-center justify-content-md-end">
      <NavbarThemeButton
        theme={themeSelect}
        handleChangeTheme={handleChangeTheme}
      />
      <LogoAdn nameClass="col col-5 d-flex d-md-none justify-content-center" />
    </Navbar>
  );
};
