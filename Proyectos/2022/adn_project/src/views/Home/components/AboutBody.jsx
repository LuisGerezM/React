import { Col } from "react-bootstrap";
import { aboutBodyOrder } from "schemas/home.schema";
import {
  InputTextsStyled,
  SubtitleTextStyled,
} from "styled-components/App.styled";

export const AboutBody = () => {
  return (
    <Col className="col-12">
      {aboutBodyOrder.map((item, index) => (
        <div key={index}>
          <SubtitleTextStyled>
            <strong>{item.subtitle}</strong>
          </SubtitleTextStyled>
          <InputTextsStyled className="InputTextsStyled">
            {Array.isArray(item.text) ? (
              <ol>
                {item.text.map((objective, idx) => (
                  <li key={idx}>{objective}</li>
                ))}
              </ol>
            ) : (
              item.text
            )}
          </InputTextsStyled>
        </div>
      ))}
    </Col>
  );
};
