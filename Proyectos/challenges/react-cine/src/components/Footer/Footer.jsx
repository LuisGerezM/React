import { utilSocialNetworks } from "utilities/utilSocialNetworks";
import { FooterStylized, LiStylized } from "./styled-components/Footer.styles";
import { Col, Container } from "react-bootstrap";
import { Text } from "App.styles";

export const Footer = () => {
  return (
    <FooterStylized>
      <Container>
        <Col className="d-flex justify-content-center align-items-center">
          <Text className="text-center m-0">
            Copyright ©2022 | Diseñado por <em>Gerez Martinez Luis</em>
          </Text>

          <nav className="d-flex justify-content-center align-items-center">
            <ul className="d-flex justify-content-center px-2 m-1">
              {utilSocialNetworks.map((net, index) => (
                <LiStylized key={index} className="p-1">
                  <a href={net.href} rel="noopener noreferrer" target="_blank">
                    {net.icon}
                  </a>
                </LiStylized>
              ))}
            </ul>
          </nav>
        </Col>
      </Container>
    </FooterStylized>
  );
};
