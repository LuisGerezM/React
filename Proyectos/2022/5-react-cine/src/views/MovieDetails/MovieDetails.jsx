import { CardImage } from "components/CardImage/CardImage";
import { ListGroup } from "./components/ListGroup";

import { useMovieDetails } from "./hooks/useMovieDetails";
import { utilTransition } from "utilities/utilTransition";

import { Col } from "react-bootstrap";

import { RowStylized, TitleText } from "App.styles";
import { motion } from "framer-motion";

const MovieDetails = () => {
  const { movieData, manyMovieItems, loadingMovieDetails } = useMovieDetails();
  const pageTransition = utilTransition("pageTransition");

  if (loadingMovieDetails)
    return (
      <RowStylized>
        <TitleText>Cargando...</TitleText>
      </RowStylized>
    );

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <RowStylized className="pb-4">
        <TitleText className="text-center pt-1">{movieData.title}</TitleText>
        <Col className="m-lg-auto pb-3 pb-lg-0 pb-xl-3" lg={4}>
          <CardImage location={movieData.poster_path} />
        </Col>
        <Col className="m-auto" lg={8}>
          <ListGroup movieData={movieData} manyMovieItems={manyMovieItems} />
        </Col>
      </RowStylized>
    </motion.div>
  );
};

export default MovieDetails;
