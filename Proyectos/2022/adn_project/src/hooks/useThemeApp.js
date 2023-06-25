import { useState } from "react";
import { themesStyled } from "styled-components/Theme.styled";

export const useThemeApp = () => {
  const [themeSelect, setThemeSelect] = useState("light");
  const handleChangeTheme = (value) => setThemeSelect(value);

  return { themeSelect, themesStyled, handleChangeTheme };
};
