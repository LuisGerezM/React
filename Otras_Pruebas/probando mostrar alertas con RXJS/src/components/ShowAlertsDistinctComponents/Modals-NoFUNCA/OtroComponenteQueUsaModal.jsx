// componente que ENVIA la información

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { sharingInformationWithModalService } from "../../../services/sharing-information-with-modal-service";

export const OtroComponenteQueUsaModal = () => {
  const handleClick = () => {
    const objectToSend = {
      from: "OtroComponenteQueUsaModal",
      data: {
        id: "678910",
        text: "articulo <<<<zzzzzzzzz>>>>",
        showModalConfirm: true,
      },
    };

    sharingInformationWithModalService.setSubject({ objectToSend });
  };

  const subscription$ = sharingInformationWithModalService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data?.action === "confirm" && data?.from === "OtroComponenteQueUsaModal") {
        console.log("CONFIRMO la ELIMINACION -->> OtroComponenteQueUsaModal ", data.idToDelete);
      }
    });
    return () => {
      console.log("return efecto observable component1");
    };
  });

  return (
    <div>
      <button onClick={handleClick}>Enviar informacion MODAL - OtroComponenteQueUsaModal</button>
      <Link to="/modalsDistinct1">ir a modalDistinctComponents1</Link>
    </div>
  );
};
