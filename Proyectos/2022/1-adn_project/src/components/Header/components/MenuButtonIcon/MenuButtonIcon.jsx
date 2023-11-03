import menuIcon from "assets/img/menuIcon.svg";
import { WrapMenuButtonStyled } from "components/Header/styled-components/Header.styled";
import { forwardRef } from "react";
import { ImageStyled } from "styled-components/App.styled";

export const MenuButtonIcon = forwardRef(({ onClick }, ref) => {
  return (
    <WrapMenuButtonStyled className="col col-1 d-none d-md-flex">
      <ImageStyled
        image={menuIcon}
        height="50px"
        minHeight="50px"
        backgroundSize="contain"
        onClick={onClick}
        ref={ref}
      />
    </WrapMenuButtonStyled>
  );
});
