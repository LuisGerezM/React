import { AlertUserFeedbackStyled } from "../styled-components/AlertUserFeedback.styled";
import { useAlertUserFeedback } from "./hooks/useAlertUserFeedback";

export const AlertUserFeedback = () => {
  const { showAlert, dataAlert } = useAlertUserFeedback();
  return (
    <>
      {showAlert && (
        <>
          <AlertUserFeedbackStyled type={dataAlert.variant}>
            {dataAlert.variant === "success" ? "😎" : "😥"} {dataAlert.text}
          </AlertUserFeedbackStyled>
        </>
      )}
    </>
  );
};
