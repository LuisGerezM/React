import { useEffect, useReducer, useState } from "react";
import { filterStarsReducer, initialStateStar } from "reducers/filterStarsReducer";
import { TYPES } from "reducers/types/filterStarTypes";

export const useTouchFilterStar = ( movies, setMsgErrorMovies, setRenderMoviesArray ) => {
  const [state, dispatch] = useReducer(filterStarsReducer, initialStateStar);

  const [loadingFilterMovies, setLoadingFilterMovies] = useState(false);

  const handleResetStateFilterStar = () => dispatch({ type: TYPES.CLEAN_STARS });

  const handleLoadingFilterMovies = (value) => setLoadingFilterMovies(value);

  const handleClickFilterStar = (event) => {
    handleLoadingFilterMovies(true);

    dispatch({ type: TYPES.FILTER_REQUEST });

    const starSelected = event.currentTarget.id;

    if (starSelected === state.lastSelectedStar) return dispatch({ type: TYPES.CLEAN_STARS });
    

    dispatch({ type: TYPES.PAINT_STARS, payload: starSelected });
  };

  const filterMoviesByQualification = (selectedScore) => {
    const maxRank = parseInt(selectedScore * 2);
    const minRank = parseInt(maxRank - 2);

    const moviesFilter = movies.filter( (movie) => minRank <= movie.vote_average && movie.vote_average <= maxRank ) ;

    if (!moviesFilter.length) setMsgErrorMovies(`No encontramos películas con calisificación entre ${minRank} y ${maxRank}`);
    
    setRenderMoviesArray(moviesFilter);
  };

  useEffect(() => {
    if (state.lastSelectedStar !== 0) filterMoviesByQualification(parseInt(state.lastSelectedStar));
    else setRenderMoviesArray(movies);

    handleLoadingFilterMovies(false);
  }, [state.lastSelectedStar]);

  return {
    handleClickFilterStar,
    state,
    handleResetStateFilterStar,
    loadingFilterMovies,
    handleLoadingFilterMovies,
    filterMoviesByQualification,
  };
};
