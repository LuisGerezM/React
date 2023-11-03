import { GlobalButton } from "components/Buttons/GlobalButton/GlobalButton";
import { InputStyled } from "styled-components/Form/InputForm/InputForm.styled";
import { WrapInputSearchStyled } from "./styled-components/WrapInputSearch.styled";

export const InputSearch = ({ disabledSearchButton, handleChange }) => {
  return (
    <WrapInputSearchStyled className="col col-12 col-sm-6">
      <InputStyled
        type="search"
        placeholder="Buscar"
        className="me-1"
        aria-label="Search"
        name="search"
        onChange={handleChange}
      />

      <GlobalButton
        type="submit"
        text="🔍"
        color="default"
        disabled={disabledSearchButton}
      />
    </WrapInputSearchStyled>
  );
};
