import styled from "styled-components";
import { customColors } from "App.styles";

const TitleStylized = styled.a`
  text-decoration: none;
  color: ${customColors.secondaryColor};

  &:hover {
    color: ${customColors.blue};
  }
`;

export { TitleStylized };
