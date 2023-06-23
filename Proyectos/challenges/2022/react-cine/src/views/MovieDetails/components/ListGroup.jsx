import { ElementSubtitleSelectedMovie } from "./ElementSubtitleSelectedMovie";
import { ElementTextSelectedMovie } from "./ElementTextSelectedMovie";
import { ThreeItemsSelectedMovie } from "./ThreeItemsSelectedMovie";

import { Row } from "react-bootstrap";
import {
  ListGroupItemStylized,
  ListGroupStylized,
} from "../styled-components/MovieDetails.styles";

export const ListGroup = ({ manyMovieItems, movieData }) => {
  return (
    <ListGroupStylized>
      <ListGroupItemStylized className="py-4">
        <ThreeItemsSelectedMovie
          showItemsMovieSelected={manyMovieItems.first}
        />
        <Row className="py-4 justify-content-center">
          <ElementSubtitleSelectedMovie subtitle="Reseña" />
          <ElementTextSelectedMovie text={movieData.overview} />
        </Row>
        <ThreeItemsSelectedMovie
          showItemsMovieSelected={manyMovieItems.second}
        />
      </ListGroupItemStylized>
    </ListGroupStylized>
  );
};
