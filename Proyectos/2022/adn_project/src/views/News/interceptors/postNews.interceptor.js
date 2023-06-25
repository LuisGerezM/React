import { authAndDocExistInFirebase } from "services/serviceQueryFirebase/authAndDocExistInFirebase.service";
import { saveDataInFirebase } from "services/serviceQueryFirebase/saveDataInFirebase.service";
import { v4 as uuidv4 } from "uuid";

const {
  REACT_APP...: NEWSCOLLECTION,
  REACT_APP...: NEWSDOCUMENT,
} = process.env;

export const postNews = async (dataForm, responsibleUser) => {
  try {
    const formDataNews = {
      id: uuidv4(),
      date: +new Date(),
      active: true,
      responsibleUser,
      ...dataForm,
      deletedDate: "",
      deletedBy: "",
    };

    const queryExistDoc = await authAndDocExistInFirebase(
      responsibleUser,
      NEWSCOLLECTION,
      NEWSDOCUMENT
    );

    if (!queryExistDoc.results.exists()) {
      await saveDataInFirebase(queryExistDoc.docRef, NEWSDOCUMENT, []);
    } else {
      const arrayNews = queryExistDoc.results.data()[`${NEWSDOCUMENT}`];

      const addNews = [...arrayNews, formDataNews];
      const saveData = await saveDataInFirebase(
        queryExistDoc.docRef,
        NEWSDOCUMENT,
        addNews
      );

      if (saveData.status !== "success") throw new Error(saveData.status);

      return { status: "success" };
    }
  } catch (error) {
    console.error("error setNews", error.message);
    return { status: "error", data: error };
  }
};
