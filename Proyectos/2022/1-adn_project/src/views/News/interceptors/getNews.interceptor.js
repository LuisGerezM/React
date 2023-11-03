import { chekingDocumentExists } from "services/serviceQueryFirebase/chekingDocumentExists.service";
import { orderArrayBy } from "utilities/orderArrayBy.util";
import { newsAdapter } from "../adapters/news.adapter";

const {
  REACT_APP...: NEWSCOLLECTION,
  REACT_APP...: NEWSDOCUMENT,
} = process.env;

export const getNews = async () => {
  try {
    const queryExistDoc = await chekingDocumentExists(
      NEWSCOLLECTION,
      NEWSDOCUMENT
    );

    if (queryExistDoc.status === "error" || !queryExistDoc?.results?.exists()) {
      throw new Error(queryExistDoc.message);
    } else {
      const arrayNews = queryExistDoc.results.data()[`${NEWSDOCUMENT}`];

      return {
        status: "success",
        data: newsAdapter(orderArrayBy({ array: arrayNews, by: "date" })),
      };
    }
  } catch (error) {
    console.error("error getNews", error.message);
    return { status: error.message };
  }
};
