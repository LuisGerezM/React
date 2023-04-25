import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { sharingInformationWithAlertService } from "../../services/sharing-information-with-alert";

export const Component2MsgAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [dataAlert, setDataAlert] = useState({});

  const subscription$ = sharingInformationWithAlertService.getSubject();

  console.log({ subscription$ });

  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data.objectToSend.showAlert) setDataAlert(data.objectToSend);
    });
  }, []);

  useEffect(() => {
    if (dataAlert && dataAlert.showAlert) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setDataAlert({});
      }, 2000);
    }
  }, [dataAlert]);

  return (
    <div>
      {showAlert && <Alert variant={dataAlert.variant}>{dataAlert.text}</Alert>}
      <hr />
    </div>
  );
};
