import { checkAuthorizedUser } from "./checkAuthorizedUser.service";
import { chekingDocumentExists } from "./chekingDocumentExists.service";

export const authAndDocExistInFirebase = async (
  email,
  collection,
  document
) => {
  const userAuthQuery = await checkAuthorizedUser(email);

  if (userAuthQuery.status !== "success")
    return { status: "error", message: userAuthQuery.message };

  const queryExistDoc = await chekingDocumentExists(collection, document);

  return queryExistDoc;
};
