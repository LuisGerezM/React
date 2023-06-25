import { FormInputSearch } from "components/InputSearch/FormInputSearch";
import { lenguageAppSchema } from "schemas/app.schema";
import { newsDataToFieldsInputSearch } from "schemas/news/formShowNews.schema";
import { TitleTextStyled } from "styled-components/App.styled";
import { useNewsContext } from "views/News/context/NewsProvider";
import { WrapHeaderNewsStyled } from "views/News/styled-components/WrapHeaderNews.styled";

export const HeaderSection = () => {
  const {
    handleMessageError,
    disabledSearchButton,
    handleChangeInputFilter,
    handleSubmitInputFilter,
  } = useNewsContext();

  return (
    <WrapHeaderNewsStyled className="WrapHeaderNewsStyled">
      <TitleTextStyled className="mb-2">
        {lenguageAppSchema("noticeADN")} ADN:
      </TitleTextStyled>
      <FormInputSearch
        handleMessageError={handleMessageError}
        disabledSearchButton={disabledSearchButton}
        handleChange={handleChangeInputFilter}
        handleSubmit={handleSubmitInputFilter}
        whithCheckInput={true}
        fieldsInputSearch={newsDataToFieldsInputSearch}
      />
    </WrapHeaderNewsStyled>
  );
};
