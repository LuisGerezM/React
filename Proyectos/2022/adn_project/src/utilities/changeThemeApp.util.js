const changeTheme = (handleChangeTheme, theme) => {

    if (theme === "light") {
      handleChangeTheme("dark");
    } else {
      handleChangeTheme("light");
    }
  };
  
  const icon = (theme) => (theme === "light" ? "moon" : "sunFill");
  
  export { icon, changeTheme };
  