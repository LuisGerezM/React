import {
  OffcanvasHeaderStyled,
  OffcanvasTitleStyled,
} from "components/Header/styled-components/OffCanvas/OffCanvas.styled";

export const OffCanvasHeader = () => {
  return (
    <OffcanvasHeaderStyled closeButton>
      <OffcanvasTitleStyled id={`offcanvasNavbarLabel-expand-md`}>
        ADN
      </OffcanvasTitleStyled>
    </OffcanvasHeaderStyled>
  );
};
