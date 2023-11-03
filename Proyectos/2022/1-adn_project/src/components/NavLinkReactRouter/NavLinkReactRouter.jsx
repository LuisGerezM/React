import { InputTextsStyled } from "styled-components/App.styled";
import { NavLinkStyled } from "./styled-components/NavLinkReactRouter.styles";

const NavLinkReactRouter = ({
  icon,
  name,
  to,
  handleCloseToggle = undefined,
  privated = undefined,
}) => {
  return (
    <NavLinkStyled
      className={
        privated
          ? "NavLinkStyled col col-12"
          : "NavLinkStyled col col-12 col-md-2"
      }
      onClick={handleCloseToggle}
      to={to}
      privated={privated ? "true" : "false"}
    >
      <InputTextsStyled>
        {icon} {name}
      </InputTextsStyled>
    </NavLinkStyled>
  );
};

export default NavLinkReactRouter;
