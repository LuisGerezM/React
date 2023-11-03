import { debounce } from "debounce";

export const useFormInput = (handleSearchMovie) => {
  const handleSearchedMovies = debounce((event) => {
    handleSearchMovie(event.target.value);
  }, 1000);

  return { handleSearchedMovies };
};
