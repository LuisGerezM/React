import { useContext } from "react";
import { MoviesContext } from "contexts/MoviesContext/MoviesProvider";

import { useFormInput } from "hooks/useFormInput/useFormInput";

import { InputGroup } from "react-bootstrap";
import { magnifyingGlass } from "assets/images/images";
import { FormControlStylized } from "../styled-components/SidebarForm.styles";

export const FormInput = () => {
  const { handleSearchMovie, isInDetail } = useContext(MoviesContext);
  const { handleSearchedMovies } = useFormInput(handleSearchMovie);

  return (
    <InputGroup>
      <InputGroup.Text id="inputGroupPrepend">
        {magnifyingGlass}
      </InputGroup.Text>
      <FormControlStylized
        type="text"
        placeholder="Buscar película..."
        aria-label="Search"
        onChange={handleSearchedMovies}
        disabled={isInDetail}
      />
    </InputGroup>
  );
};
