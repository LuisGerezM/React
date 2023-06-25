import { formatDate } from "utilities/formatDate.util";
import { InputNewsDisabledStyled } from "views/News/styled-components/FormShowNews.styled";
import { WrapDateAndAuthorFormStyled } from "views/News/styled-components/WrapDateAndAuthorForm.styled";

export const DateAndAuthorForm = ({ disabled, item }) => {
  return (
    <WrapDateAndAuthorFormStyled className="WrapDateAndAuthorFormStyled col col-12 d-flex justify-content-evenly">
      <InputNewsDisabledStyled
        className="col col-5"
        disabled={disabled}
        defaultValue={
          "Publicado: " + formatDate({ date: item.date, type: "slice" })
        }
      />
      <InputNewsDisabledStyled
        className="col col-5"
        disabled={disabled}
        defaultValue={item.author}
      />
    </WrapDateAndAuthorFormStyled>
  );
};
