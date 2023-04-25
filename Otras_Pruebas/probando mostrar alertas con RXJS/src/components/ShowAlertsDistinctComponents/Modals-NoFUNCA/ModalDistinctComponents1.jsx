import { useEffect } from "react";
import { Link } from "react-router-dom";
import { sharingInformationWithModalService } from "../../../services/sharing-information-with-modal-service";

export const ModalDistinctComponents1 = () => {
  const handleClick = () => {
    const objectToSend = {
      from: "Component1WithModal",
      data: { id: "12345", text: "articulo XXXXXXXXX", showModalConfirm: true },
    };

    sharingInformationWithModalService.setSubject({ objectToSend });
  };

  const subscription$ = sharingInformationWithModalService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data?.action === "confirm" && data?.from === "Component1WithModal") {
        console.log("delete success-->> ModalDistinctComponents1 ", data.idToDelete);
      }
    });
  });

  return (
    <div>
      <button onClick={handleClick}>Enviar informacion MODAL</button>
      <Link to="/OtroComponenteQueUsaModal">ir a OtroComponenteQueUsaModal</Link>
    </div>
  );
};
