export const adaptingMovieDetails = (movie) => {
  return {
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    popularity: movie.popularity,
    genres: movie.genres,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    production_companies: movie.production_companies,
    overview: movie.overview,
  };
};
