import { sharingInformationService } from "../../services/sharing-information-service";

export const Component1 = () => {
  const handleClick = () => {
    sharingInformationService.setSubject(true);
  };

  const handleClickNo = () => {
    sharingInformationService.setSubject(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar informacion</button>
      <button onClick={handleClickNo}>NO Enviar informacion</button>
    </div>
  );
};
