import { useEffect, useState } from "react";
import { sharingInformationServiceWithAlert } from "services/sharing-information/sharing-information.service";

export const useAlertUserFeedback = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [dataAlert, setDataAlert] = useState({});

  const subscription$ = sharingInformationServiceWithAlert.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data?.objectUserFeedback?.showAlert)
        setDataAlert(data.objectUserFeedback);
    });
  }, []);

  useEffect(() => {
    if (dataAlert && dataAlert.showAlert) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setDataAlert({});
      }, 3000);
    }
  }, [dataAlert]);

  return { showAlert, dataAlert };
};
