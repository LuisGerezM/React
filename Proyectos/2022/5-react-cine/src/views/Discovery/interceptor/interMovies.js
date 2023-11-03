import { apiCall } from "server/apiCall";
import { adapterMovies } from "../adapter/adapterMovies";

import { utilShowMessage } from "utilities/utilMessages/utilShowMessage";

const interceptorGetMoviesInfo = async ({ url, page }) => {
  try {
    const fetchingMovies = await apiCall({
      url,
      method: "GET",
    });

    if (!fetchingMovies.results) throw new Error(fetchingMovies.status_message);

    return {
      status: "success",
      pageNumber: fetchingMovies.page,
      results: adapterMovies(fetchingMovies.results),
    };
  } catch (error) {
    console.log("error", { error });
    utilShowMessage({ title: "ERROR", text: error.message });
    return {
      status: error,
    };
  }
};

export { interceptorGetMoviesInfo };
