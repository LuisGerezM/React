import { GlobalButton } from "components/Buttons/GlobalButton/GlobalButton";
import { useWrapNewsButtonActions } from "views/News/hooks/useWrapNewsButtonActions";
import { WrapNewsButtonActionsStyled } from "views/News/styled-components/FormShowNews.styled";

export const WrapNewsButtonActions = ({ item }) => {
  const { handleUpdateNew, handleDeleteNew } = useWrapNewsButtonActions();

  return (
    <>
      <WrapNewsButtonActionsStyled className="WrapNewsButtonActionsStyled">
        <GlobalButton
          buttonClass="col col-5"
          onClick={() => handleUpdateNew(item)}
          text="Editar"
        />
        <GlobalButton
          buttonClass="col col-5"
          color="danger"
          onClick={() => handleDeleteNew(item)}
          text="Eliminar"
        />
      </WrapNewsButtonActionsStyled>
    </>
  );
};
