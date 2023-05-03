import { LinkReactRouter } from "../LinkReactRouter/LinkReactRouter";
import { limitString } from "utilities/utilLimitString";
import { CardImage } from "components/CardImage/CardImage";

import { motion } from "framer-motion";
import { utilTransition } from "utilities/utilTransition";

import { Card, Col } from "react-bootstrap";
import { SubTitleText, Text } from "App.styles";
import {
  CardDivStylized,
  CardStylized,
} from "../../styled-components/MovieCard.styles";

export const MovieCard = ({ element, index }) => {
  const cardsTransition = utilTransition("cardsTransition");
  return (
    <Col md={6} lg={4} xl={3}>
      <motion.div
        custom={{ delay: (index + 1) * 0.3 }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={cardsTransition}
      >
        <CardStylized className="my-3">
          <CardImage location={element.poster_path} height={"365px"} />
          <Card.Body className="d-flex flex-column justify-content-around py-2">
            <CardDivStylized
              className="d-flex align-items-center"
              height={"3.45rem"}
            >
              <SubTitleText className="m-0">{element.title}</SubTitleText>
            </CardDivStylized>
            <CardDivStylized height={"4.5rem"}>
              <Text>{limitString(element.overview).string}</Text>
            </CardDivStylized>
            <CardDivStylized>
              <LinkReactRouter
                to={`/movie-details/${element.id}`}
                text={"Ver Detalles"}
              />
            </CardDivStylized>
          </Card.Body>
        </CardStylized>
      </motion.div>
    </Col>
  );
};
