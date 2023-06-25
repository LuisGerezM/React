import { lenguageAppSchema } from "schemas/app.schema";
import { SmallTextsStyled } from "styled-components/App.styled";
import { formatDate } from "utilities/formatDate.util";
import { ColCreateAndEditStyled } from "views/News/styled-components/WrapCreateAndEdit.styled";

export const ColCreateAndEdit = ({ children }) => {
  const {
    text,
    textDate,
    data: { type, date },
  } = children;

  return (
    <ColCreateAndEditStyled sm={5}>
      <SmallTextsStyled>
        {lenguageAppSchema(text)}: {type}
      </SmallTextsStyled>
      <SmallTextsStyled>
        {lenguageAppSchema(textDate)}: {formatDate({ date: date })}
      </SmallTextsStyled>
    </ColCreateAndEditStyled>
  );
};
