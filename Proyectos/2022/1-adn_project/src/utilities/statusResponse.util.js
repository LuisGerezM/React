import { lenguageAppSchema } from "schemas/app.schema";

export const statusResponse = (status) => {
  const checkCodeStatus = {
    createNewsSuccessfully: lenguageAppSchema("createNewsSuccess"),
    loginSuccessfully: lenguageAppSchema("loginSuccess"),
    operationSuccessfully: lenguageAppSchema("operationSuccess"),
    errorAuthorizationUser: lenguageAppSchema("unAuthorizationUser"),
    errorChekingDocumentExists: lenguageAppSchema("doNotIdentifyDocument"),
    errorChekingUserUnidentified: lenguageAppSchema("unidentifiedUser"),
    errorCloseGooglePopUp: lenguageAppSchema("closeGooglePopUp"),
    errorThereAreProblemsTryLater: lenguageAppSchema(
      "thereAreProblemsTryLater"
    ),
  };

  return checkCodeStatus[status]
    ? checkCodeStatus[status]
    : lenguageAppSchema("thereAreProblemsContactAdministrator");
};
