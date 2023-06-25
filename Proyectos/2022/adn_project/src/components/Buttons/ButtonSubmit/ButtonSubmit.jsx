import {
  ButtonSubmitStyled,
  WrapButtonSubmitStyled,
} from "components/Buttons/styled-components/ButtonSubmit.styled";
import { lenguageAppSchema } from "schemas/app.schema";

export const ButtonSubmit = ({ textBtn }) => {
  return (
    <WrapButtonSubmitStyled className="col col-12">
      <ButtonSubmitStyled className="col col-8" type="submit">
        {lenguageAppSchema(textBtn)}
      </ButtonSubmitStyled>
    </WrapButtonSubmitStyled>
  );
};
