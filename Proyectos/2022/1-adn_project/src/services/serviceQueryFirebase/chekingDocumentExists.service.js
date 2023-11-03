import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "services/serviceFirebase/firebaseConfig.service";
import { statusResponse } from "utilities/statusResponse.util";

const db = getFirestore(app);

export const chekingDocumentExists = async (collection, queryDoc) => {
  try {
    const docRef = doc(db, `${collection}/${queryDoc}`);
    const results = await getDoc(docRef);

    if (results.exists()) return { status: "success", docRef, results };
    else throw new Error("errorChekingDocumentExists");
  } catch (error) {
    console.error("error chekingDocumentExists", error.message);
    return {
      status: "error",
      message: statusResponse(error.message),
    };
  }
};
