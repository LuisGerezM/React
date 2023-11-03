import { AnchorTag } from "components/AnchorTag/AnchorTag";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { lenguageAppSchema } from "schemas/app.schema";
import { InputTextsStyled } from "styled-components/App.styled";
import {
  CardFooterStyled,
  ReactWhatsappStyled,
} from "views/Home/styled-components/CardSponsors/CardSponsorsFooter.styled";

export const CardSponsorsFooter = ({ contacts }) => {
  return (
    <CardFooterStyled className="CardFooterStyled d-flex align-items-center flex-column justify-content-evenly">
      <Col className="p-1">
        <InputTextsStyled className="text-center">
          {lenguageAppSchema("findOnTheNetworks")}
        </InputTextsStyled>
      </Col>
      <Row>
        {contacts.map((contactNet, index) => (
          <Col sm={4} key={index}>
            {!contactNet.number ? (
              <AnchorTag href={contactNet.href} text={contactNet.icon} />
            ) : (
              <ReactWhatsappStyled
                number={contactNet.number}
                message={contactNet.message}
              >
                {contactNet.icon}
              </ReactWhatsappStyled>
            )}
          </Col>
        ))}
      </Row>
    </CardFooterStyled>
  );
};
