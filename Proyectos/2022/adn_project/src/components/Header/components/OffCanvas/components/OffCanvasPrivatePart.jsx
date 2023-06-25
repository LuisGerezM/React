import { useSelector } from "react-redux";
import { HrStyled } from "styled-components/App.styled";
import { NavAdmin } from "../../Navs/NavAdmin";
import { NavResponsive } from "../../Navs/NavResponsive";

const { REACT_APP...: RA } = process.env;

export const OffCanvasPrivatePart = ({
  handleCloseToggle,
  display = false,
}) => {
  const { user, userToken } = useSelector((store) => store.user);

  return (
    <>
      {user.email && userToken && (
        <div className={display ? "d-flex" : "d-flex d-md-none"}>
          <NavResponsive handleCloseToggle={handleCloseToggle} />
        </div>
      )}
      <HrStyled />
      {user.role === RA && userToken && (
        <div className={display ? "d-flex" : "d-flex d-md-none"}>
          <NavAdmin handleCloseToggle={handleCloseToggle} />
        </div>
      )}
    </>
  );
};
