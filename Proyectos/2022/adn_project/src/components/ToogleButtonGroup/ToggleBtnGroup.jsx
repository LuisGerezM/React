import { ToggleButtonStyled } from "./styled-component/ToggleBtnGroup.styled";

export const ToggleBtnGroup = ({
  handleToggleBtnClick,
  clickToggleBtn,
  elements,
  idx,
}) => {
  return (
    <ToggleButtonStyled
      className="col col-12"
      id={`btns-actions-${idx}`}
      type="radio"
      name="btns"
      onClick={() => handleToggleBtnClick(elements.value)}
      data-toggle="toggle"
      checked={clickToggleBtn}
      nameButton={elements.value}
    >
      {elements.name}
    </ToggleButtonStyled>
  );
};
