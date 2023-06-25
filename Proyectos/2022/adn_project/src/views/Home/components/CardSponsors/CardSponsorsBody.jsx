import { InputTextsStyled } from "styled-components/App.styled";
import { CardBodyStyled } from "views/Home/styled-components/CardSponsors/CardSponsorsBody.styled";

export const CardSponsorsBody = ({ name, text }) => {
  return (
    <CardBodyStyled>
      <InputTextsStyled>{name}</InputTextsStyled>
      <InputTextsStyled>{text}</InputTextsStyled>
    </CardBodyStyled>
  );
};
