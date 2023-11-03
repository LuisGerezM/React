import { AlertMessageStyled } from "components/Alerts/styled-components/AlertMessage.styled";

export const AlertMessageError = ({ messageError, textError }) => {
  return (
    <>
      {messageError && (
        <div>
          <AlertMessageStyled type="danger">{textError}</AlertMessageStyled>
        </div>
      )}
    </>
  );
};
