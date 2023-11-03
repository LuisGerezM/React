import { apiCall } from "server/apiCall";
import { utilShowMessage } from "utilities/utilMessages/utilShowMessage";
import { adaptingMovieDetails } from "../adapter/adaptingMovieDetails";

const { REACT_APP_BASE_URL: BASEURL, REACT_APP_API_KEY: APIKEY } = process.env;

const interMovieDetails = async ({ movieId }) => {
  try {
    const fetchingMovies = await apiCall({
      url: `${BASEURL}/movie/${movieId}?api_key=${APIKEY}&language=es-ES`,
      method: "GET",
    });

    if (!fetchingMovies.id) throw new Error(fetchingMovies.status_message);

    return {
      status: "success",
      pageNumber: fetchingMovies.page,
      adaptedMovieDetails: adaptingMovieDetails(fetchingMovies),
    };
  } catch (error) {
    console.log("error", { error });
    utilShowMessage({ title: "ERROR", text: error.message });
  }
};

export { interMovieDetails };
