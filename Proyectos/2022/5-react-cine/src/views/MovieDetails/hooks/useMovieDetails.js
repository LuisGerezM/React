import { useContext, useEffect, useState } from "react";

import { MoviesContext } from "contexts/MoviesContext/MoviesProvider";
import { interMovieDetails } from "../interceptor/interMovieDetails";

import { useNavigate, useParams } from "react-router-dom";

import { utilObjManyMovieItems } from "utilities/utilMovieDetails/utilObjManyMovieItems";

export const useMovieDetails = () => {
  const { handlerIsInDetails } = useContext(MoviesContext);

  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({});
  const [manyMovieItems, setManyMovieItems] = useState({});

  const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);

  const { movieId } = useParams();

  const handlerLoadingMovieDetails = (value) => setLoadingMovieDetails(value);

  const getMovieDetails = async () => {
    const fetchingMovies = await interMovieDetails({ movieId });

    if (!fetchingMovies) return navigate("/", { replace: true });

    const objManyMovieItems = utilObjManyMovieItems(fetchingMovies);

    setManyMovieItems(objManyMovieItems);
    setMovieData(fetchingMovies.adaptedMovieDetails);
    handlerLoadingMovieDetails(false);
  };

  useEffect(() => {
    handlerIsInDetails(true);
    getMovieDetails();

    return () => {
      handlerIsInDetails(false);
      setMovieData({});
    };
  }, []);

  return {
    movieData,
    manyMovieItems,
    loadingMovieDetails,
  };
};
