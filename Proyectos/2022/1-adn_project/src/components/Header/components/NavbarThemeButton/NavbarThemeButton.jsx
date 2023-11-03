import { IconTheme } from "assets/images";
import { ThemeBtnSTyled } from "components/Header/styled-components/NavbarThemeButton.styled";
import { changeTheme, icon } from "utilities/changeThemeApp.util";

export const NavbarThemeButton = ({ theme, handleChangeTheme }) => {
  return (
    <ThemeBtnSTyled
      className="toggle"
      onClick={() => changeTheme(handleChangeTheme, theme)}
    >
      <IconTheme type={icon(theme)} />
    </ThemeBtnSTyled>
  );
};
