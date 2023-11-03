import { Col } from "react-bootstrap";
import { sponsorsData } from "schemas/home.schema";
import { ImageStyled } from "styled-components/App.styled";
import { CardStyled } from "views/Home/styled-components/CardSponsors/CardSponsors.styled";

import { CardSponsorsBody } from "./CardSponsorsBody";
import { CardSponsorsFooter } from "./CardSponsorsFooter";

export const CardSponsors = () => {
  return (
    <>
      {sponsorsData.map((sponsorInfo, idx) => (
        <Col key={idx} className="col-6 my-2">
          <CardStyled>
            <ImageStyled
              className="CardImageStyled"
              image={sponsorInfo.image}
            />
            <CardSponsorsBody name={sponsorInfo.name} text={sponsorInfo.text} />
            <CardSponsorsFooter contacts={sponsorInfo.contacts} />
          </CardStyled>
        </Col>
      ))}
    </>
  );
};
