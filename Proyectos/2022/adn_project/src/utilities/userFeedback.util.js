import { sharingInformationServiceWithAlert } from "services/sharing-information/sharing-information.service";

export const userFeedback = ({ text, variant = "success" }) => {
  const objectUserFeedback = {
    showAlert: true,
    variant,
    text,
  };

  sharingInformationServiceWithAlert.setSubject({ objectUserFeedback });
};
