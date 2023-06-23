import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "contexts/MoviesContext/MoviesProvider";
import { utilOrderArrayBy } from "utilities/utilOrderArrayBy";
import { interceptorGetMoviesInfo } from "../interceptor/interMovies";

const { REACT_APP_BASE_URL: BASEURL, REACT_APP_API_KEY: APIKEY } = process.env;

export const useDiscovery = () => {
  const {
    handleSetMovies,
    searchMovie,
    handleSetRenderMoviesArray,
    handleSetMsgErrorMovies,
  } = useContext(MoviesContext);

  const [loadingMovies, setLoadingMovies] = useState(true);

  const [page, setPage] = useState(1);

  const handleLoadingMovies = (value) => setLoadingMovies(value);

  const getMovies = async ({ url }) => {
    const gettingMoviesInfo = await interceptorGetMoviesInfo({ url, page });

    if (gettingMoviesInfo.status === "success") {
      setPage(gettingMoviesInfo.pageNumber);
      const orderArray = utilOrderArrayBy(gettingMoviesInfo.results);

      if (!gettingMoviesInfo.results) handleSetMsgErrorMovies("No encontramos la película que buscaste 😥");

      handleSetMovies(orderArray);
      handleSetRenderMoviesArray(orderArray);
    }
    
    handleSetMsgErrorMovies("Ups... Ocurrió un error, ponte en contacto con el administrador 😥");
    handleLoadingMovies(false);
  };

  useEffect(() => {
    handleLoadingMovies(true);

    const possibleQueries = {
      filteredQuery: () =>
        getMovies({ url: `${BASEURL}/search/movie?api_key=${APIKEY}&language=es-ES&query=${searchMovie}` }),
      generalQuery: () =>
        getMovies({ url: `${BASEURL}/discover/movie?api_key=${APIKEY}&language=es-ES&page=${page}` }),
    };

    searchMovie ? possibleQueries["filteredQuery"]() : possibleQueries["generalQuery"]();

    return () => {
      handleSetMovies([]);
      handleSetRenderMoviesArray([]);
    };
  }, [searchMovie, page]);

  return { loadingMovies };
};
