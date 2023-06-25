import { setDoc } from "firebase/firestore";
import { statusResponse } from "utilities/statusResponse.util";

export const saveDataInFirebase = async (docRef, collection, document) => {
  try {
    await setDoc(docRef, {
      [`${collection}`]: document,
    });

    return { status: "success" };
  } catch (error) {
    console.error("error saveDataInFirebase", error.message);
    return {
      status: statusResponse(error.message),
    };
  }
};
