import { useContext } from "react";
import { AlertMsg } from "components/Alerts/AlertMsg";
import { MovieCard } from "./components/MovieCard/MovieCard";

import { MoviesContext } from "contexts/MoviesContext/MoviesProvider";
import { useDiscovery } from "./hooks/useDiscovery";

import { Col } from "react-bootstrap";
import { RowStylized, TitleText } from "App.styles";

import { AnimatePresence } from "framer-motion";

const Discovery = () => {
  const { renderMoviesArray, loadingFilterMovies, msgErrorMovies } =
    useContext(MoviesContext);

  const { loadingMovies } = useDiscovery();

  if (loadingMovies || loadingFilterMovies)
    return (
      <RowStylized>
        <TitleText>Cargando...</TitleText>
      </RowStylized>
    );

  return (
    <RowStylized className="d-flex justify-content-center">
      {!renderMoviesArray.length && (
        <Col sm={8} className="justify-content-center">
          <AlertMsg color="betweenBlueGreed" text={msgErrorMovies} />
        </Col>
      )}

      <AnimatePresence>
        {renderMoviesArray.map((movie, index) => (
          <MovieCard key={movie.id.toString()}element={movie} index={index} />
        ))}
      </AnimatePresence>
    </RowStylized>
  );
};

export default Discovery;
