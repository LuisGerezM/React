import { ImageStyled } from "components/Header/styled-components/Header.styled";
import { Col } from "react-bootstrap";
import logoAdn from "assets/img/logoAdn.svg";
import { TitleTextStyled } from "styled-components/App.styled";

export const AboutHeader = () => {
  return (
    <Col className="col-12 d-flex flex-column align-items-center">
      <TitleTextStyled className="text-center m-0">
        <strong>
          <em>
            <u>A</u>
          </em>
        </strong>
        cción por los
        <strong>
          <em>
            <u> D</u>
          </em>
        </strong>
        erechos
        <strong>
          <em>
            <u>N</u>
          </em>
        </strong>
        aturales
      </TitleTextStyled>
      <ImageStyled
        className="my-4 w-50 rounded-circle"
        src={logoAdn}
        alt="ADN Logo"
      />
    </Col>
  );
};
