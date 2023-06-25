import { lenguageAppSchema } from "schemas/app.schema";
import { SubtitleTextStyled } from "styled-components/App.styled";
import { InputCheck } from "./InputCheck";
import { WrapCheckFilterStyled } from "./styled-components/WrapCheckFilter.styled";
import { WrapChecksStyled } from "./styled-components/WrapChecks.styled";

export const CheckFilter = ({ fields }) => {
  return (
    <WrapCheckFilterStyled className="mb-3">
      <SubtitleTextStyled>
        {lenguageAppSchema("filterToText")}
      </SubtitleTextStyled>
      <WrapChecksStyled>
        {fields?.check.fieldsCheck.map((item, idx) => (
          <InputCheck key={idx} item={item} />
        ))}
      </WrapChecksStyled>
    </WrapCheckFilterStyled>
  );
};
