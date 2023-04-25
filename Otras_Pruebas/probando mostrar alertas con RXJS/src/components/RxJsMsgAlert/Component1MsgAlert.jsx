import { sharingInformationWithAlertService } from "../../services/sharing-information-with-alert";

export const Component1MsgAlert = () => {
  const objectToSend = {
    showAlert: true,
    variant: "danger",
    text: "un text",
  };

  const handleClick = () => {
    sharingInformationWithAlertService.setSubject({ objectToSend });
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar informacion ALERT</button>
    </div>
  );
};
