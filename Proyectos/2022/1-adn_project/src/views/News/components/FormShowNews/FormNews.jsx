import { GlobalButton } from "components/Buttons/GlobalButton/GlobalButton";
import { useShowMoreAction } from "hooks/showMoreAction/useShowMoreAction";
import { Form } from "react-bootstrap";
import {
  InputNewsDisabledStyled,
  TextAreaNewsDisabledStyled,
} from "views/News/styled-components/FormShowNews.styled";
import { WrapButtonActionStyled } from "views/News/styled-components/WrapButtonAction.styled";
import { DateAndAuthorForm } from "../DateAndAuthorForm/DateAndAuthorForm";

export const FormNews = ({ item, disabled = true }) => {
  const { txtBtn, handleSeeMore, seeComplete, addButton } = useShowMoreAction(
    item.newsBody
  );

  return (
    <Form>
      <InputNewsDisabledStyled
        className="col col-12 my-2"
        disabled={disabled}
        defaultValue={item.title}
      />
      <TextAreaNewsDisabledStyled
        className="col col-12"
        as="textarea"
        disabled={disabled}
        value={seeComplete}
        from="fromNews"
        textSize={seeComplete.length}
      />

      {addButton && (
        <WrapButtonActionStyled>
          <GlobalButton color="default" onClick={handleSeeMore} text={txtBtn} />
        </WrapButtonActionStyled>
      )}

      <DateAndAuthorForm disabled={disabled} item={item} />
    </Form>
  );
};
