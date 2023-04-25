import { sharingInformationWithAlertService } from "../../../services/sharing-information-with-alert";

export const AlertDistinctComponents1 = () => {
  const objectToSend = {
    showAlert: true,
    variant: "success",
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
