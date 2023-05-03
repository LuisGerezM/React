import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { sharingInformationWithAlertService } from "../../../services/sharing-information-with-alert";

export const AlertDistinctComponents2 = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [dataAlert, setDataAlert] = useState({});

  const subscription$ = sharingInformationWithAlertService.getSubject();

  console.log({ subscription$ });

  useEffect(() => {
    subscription$.subscribe((data) => {
      console.log("DATA en component2 with ALERT -->>", { data });

      if (data.objectToSend.showAlert) setDataAlert(data.objectToSend);
    });
  }, []);

  useEffect(() => {
    if (dataAlert && dataAlert.showAlert) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setDataAlert({});
      }, 2500);
    }

    return () => {
      console.log("return efecto - dataAlert - componente2msgalert");
    };
  }, [dataAlert]);

  return (
    <div>
      {showAlert && (
        <Alert
          variant={dataAlert.variant}
          style={{
            position: "fixed",
            right: "0",
            top: "100px",
            padding: "16px",
            width: "20rem",
          }}
        >
          {dataAlert.variant === "success" ? "😎" : "😥"} {dataAlert.text}
        </Alert>
      )}
      <hr />
    </div>
  );
};
