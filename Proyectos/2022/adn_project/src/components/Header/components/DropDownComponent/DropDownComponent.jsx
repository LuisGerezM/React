import {
  DropdownItemStyled,
  DropdownMenuStyled,
  DropdownToggleStyled,
  ImageStyled,
} from "components/Header/styled-components/Header.styled";
import { Dropdown } from "react-bootstrap";
import { HrStyled } from "styled-components/App.styled";
import { lenguageAppSchema } from "schemas/app.schema";
import userThumb from "assets/img/user.svg";
import { useDropDownComponent } from "components/Header/hooks/useDropDownComponent";

export const DropDownComponent = ({ user }) => {
  const { handleLogout } = useDropDownComponent();

  return (
    <>
      <HrStyled />
      <Dropdown
        className="d-flex justify-content-start justify-content-md-center align-items-center ps-2 ps-md-3 ps-lg-0"
        drop="down"
      >
        <DropdownToggleStyled id="dropdown-autoclose-true">
          <ImageStyled src={userThumb} />
        </DropdownToggleStyled>
        <DropdownMenuStyled>
          <DropdownItemStyled>{user.email}</DropdownItemStyled>
          <DropdownItemStyled>
            {lenguageAppSchema("editUserText")}
          </DropdownItemStyled>
          <DropdownItemStyled onClick={handleLogout}>
            {lenguageAppSchema("closeSessionText")}
          </DropdownItemStyled>
        </DropdownMenuStyled>
      </Dropdown>
      <HrStyled />
    </>
  );
};
