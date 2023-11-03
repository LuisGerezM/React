import { statusResponse } from "utilities/statusResponse.util";
import { chekingDocumentExists } from "./chekingDocumentExists.service";

const { REACT_APP...: USERCOLLECTION, REACT_APP...: USERPERSIST } =
  process.env;

export const checkAuthorizedUser = async (emailUser) => {
  try {
    const documentExist = await chekingDocumentExists(
      `${USERCOLLECTION}`,
      emailUser
    );

    if (documentExist.status !== "success")
      throw new Error(documentExist.status);

    const tokenPersist = JSON.parse(
      sessionStorage.getItem(USERPERSIST)
    ).userToken;

    const retrievedToken = documentExist.results.data().token;

    if (retrievedToken !== tokenPersist)
      throw new Error(statusResponse("errorChekingUserUnidentified"));

    return documentExist;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
