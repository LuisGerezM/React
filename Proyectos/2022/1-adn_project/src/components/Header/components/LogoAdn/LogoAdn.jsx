import { ImageStyled } from "styled-components/App.styled";
import adnLogoCircle from "assets/img/adnLogoCircle.svg";

export const LogoAdn = ({ nameClass }) => {
  return (
    <div className={nameClass}>
      <ImageStyled
        image={adnLogoCircle}
        height="50px"
        width="50px"
        minHeight="50px"
        backgroundSize="contain"
      />
    </div>
  );
};
