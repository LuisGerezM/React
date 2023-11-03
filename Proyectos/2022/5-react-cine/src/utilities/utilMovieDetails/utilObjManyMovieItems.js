export const utilObjManyMovieItems = (dataMovie) => {
  return {
    first: [
      {
        subtitle: "Fecha Estreno",
        element: dataMovie.adaptedMovieDetails.release_date,
      },
      {
        subtitle: "Popularidad",
        element: dataMovie.adaptedMovieDetails.popularity,
      },
      {
        subtitle: "Género",
        element: dataMovie.adaptedMovieDetails.genres,
      },
    ],
    second: [
      {
        subtitle: "Voto promedio",
        element: dataMovie.adaptedMovieDetails.vote_average,
      },
      {
        subtitle: "Cantidad de votos",
        element: dataMovie.adaptedMovieDetails.vote_count,
      },
      {
        subtitle: "Compañías de producción",
        element: dataMovie.adaptedMovieDetails.production_companies,
      },
    ],
  };
};
