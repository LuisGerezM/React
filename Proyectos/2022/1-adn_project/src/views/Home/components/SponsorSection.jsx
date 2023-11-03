import { Col, Row } from "react-bootstrap";
import { lenguageAppSchema } from "schemas/app.schema";
import { SubtitleTextStyled } from "styled-components/App.styled";

import { CardSponsors } from "./CardSponsors/CardSponsors";

export const SponsorSection = () => {
  return (
    <Row className="mb-5 mt-3">
      <Col sm={12} className="d-flex text-start ">
        <SubtitleTextStyled className="text-center">
          <strong>{lenguageAppSchema("thanksToSponsors")}</strong>
        </SubtitleTextStyled>
      </Col>
      <CardSponsors />
    </Row>
  );
};
