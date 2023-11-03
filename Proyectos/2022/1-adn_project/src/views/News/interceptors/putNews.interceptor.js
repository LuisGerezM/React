import { authAndDocExistInFirebase } from "services/serviceQueryFirebase/authAndDocExistInFirebase.service";
import { saveDataInFirebase } from "services/serviceQueryFirebase/saveDataInFirebase.service";

const {
  REACT_APP...: NEWSCOLLECTION,
  REACT_APP...: NEWSDOCUMENT,
} = process.env;

export const putNews = async (dataForm, responsibleUser) => {
  try {
    const queryExistDoc = await authAndDocExistInFirebase(
      responsibleUser,
      NEWSCOLLECTION,
      NEWSDOCUMENT
    );

    if (!queryExistDoc.results.exists()) {
      throw new Error("No existe collección");
    } else {
      const arrayNews = queryExistDoc.results.data()[`${NEWSDOCUMENT}`];

      const newArrayNews = arrayNews.map((items) =>
        items.id !== dataForm.id ? items : dataForm
      );

      const saveData = await saveDataInFirebase(
        queryExistDoc.docRef,
        NEWSDOCUMENT,
        newArrayNews
      );

      if (saveData.status !== "success") throw new Error(saveData.status);

      return { status: "success" };
    }
  } catch (error) {
    console.error("error putNews", error.message);
    return { status: "error", data: error };
  }
};
