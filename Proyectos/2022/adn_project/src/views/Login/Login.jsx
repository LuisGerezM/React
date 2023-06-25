import { ImageStyled, TitleTextStyled } from "styled-components/App.styled.js";
import { Col } from "react-bootstrap";
import { GlobalButton } from "components/Buttons/GlobalButton/GlobalButton";

import { useLogin } from "./hooks/useLogin";
import { SpinnerLoad } from "components/SpinnerLoad/SpinnerLoad";

import logoGoogle from "assets/img/logoGoogle.svg";
import { lenguageAppSchema } from "schemas/app.schema";
import { Row } from "react-bootstrap";

const Login = () => {
  const { handleLoginWithGoogle, loadingUser } = useLogin();

  return (
    <Row className="d-flex flex-column justify-content-center align-items-center">
      {loadingUser && (
        <Col className="d-flex align-items-end justify-content-center">
          <SpinnerLoad />
        </Col>
      )}
      <Col className="d-flex align-items-end justify-content-center">
        <TitleTextStyled>{lenguageAppSchema("loginWith")}...</TitleTextStyled>
      </Col>
      <Col className="d-flex justify-content-center align-items-start">
        <GlobalButton
          color="google-signin"
          buttonClass="col col-12 col-sm-8 col-md-12"
          text={
            <ImageStyled
              image={logoGoogle}
              height="60px"
              backgroundSize="contain"
              minHeight="0"
            />
          }
          onClick={handleLoginWithGoogle}
        />
      </Col>
    </Row>
  );
};

export default Login;
