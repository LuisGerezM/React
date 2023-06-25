import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter";
import { PublicRoutes } from "models/routes";
import { Col } from "react-bootstrap";
import { lenguageAppSchema } from "schemas/app.schema";
import { SubtitleTextStyled } from "styled-components/App.styled";

export const AboutFooter = () => {
  return (
    <Col className="col-12 my-3">
      <SubtitleTextStyled>
        {lenguageAppSchema("doYouWantToBePartTeam")}
        <LinkReactRouter
          text={lenguageAppSchema("clickHereText")}
          to={PublicRoutes.FORMNEWPOSSIBLEMEMBER + "?type=new_possible_member"}
        />
      </SubtitleTextStyled>
    </Col>
  );
};
