import { createContext, useState } from "react";
import { useTouchFilterStar } from "hooks/useTouchFilterStar/useTouchFilterStar";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [renderMoviesArray, setRenderMoviesArray] = useState([]);
  const [msgErrorMovies, setMsgErrorMovies] = useState("");

  const [isInDetail, setIsInDetail] = useState(false);

  const {
    handleClickFilterStar,
    handleResetStateFilterStar,
    loadingFilterMovies,
    handleLoadingFilterMovies,
    filterMoviesByQualification,
    state: { loadingFilter, lastSelectedStar, arrayStars },
  } = useTouchFilterStar(movies, setMsgErrorMovies, setRenderMoviesArray);

  const [searchMovie, setSearchMovie] = useState("");

  const handleSetMovies = (value) => setMovies(value);
  const handleSetRenderMoviesArray = (value) => setRenderMoviesArray(value);
  const handleSetMsgErrorMovies = (value) => setMsgErrorMovies(value);

  const handleSearchMovie = (nameMovie) => {
    handleResetStateFilterStar();
    setSearchMovie(nameMovie);
  };

  const handlerIsInDetails = (value) => {
    handleResetStateFilterStar(0);
    setIsInDetail(value);
  };

  return (
    <MoviesContext.Provider
      value={{
        handleSetMovies,
        renderMoviesArray,
        handleSetRenderMoviesArray,
        searchMovie,
        handleSearchMovie,
        filterMoviesByQualification,
        handleClickFilterStar,
        arrayStars,
        loadingFilter,
        loadingFilterMovies,
        handleLoadingFilterMovies,
        lastSelectedStar,
        handleResetStateFilterStar,
        isInDetail,
        handlerIsInDetails,
        msgErrorMovies,
        handleSetMsgErrorMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContext, MoviesProvider };
