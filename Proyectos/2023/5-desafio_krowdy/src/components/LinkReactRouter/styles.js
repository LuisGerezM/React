import { Link } from "react-router-dom";

import styled from "styled-components";
import { themeColors } from "@/styled-components/Theme.styled";
import { inputTextCssStyle } from "@/styled-components/typography.styled";
import { fadeIn } from "@/styled-components/animation.styled";

const CustomLink = styled(Link)`
  margin-top: 2rem;
  padding: ${({ padding }) => padding || "1rem 2rem"};
  text-decoration: none;
  text-align: center;
  background-color: ${({ background }) =>
    themeColors[background] || themeColors.skyBlue};
  color: ${({ color }) => themeColors[color] || themeColors.darkBlue};
  border-radius: ${({ borderradius }) => borderradius || "none"};
  border: ${({ background }) =>
    `1px solid ${background || themeColors.skyBlue}`};
  box-shadow: 4px 4px 3px ${themeColors.blackShadow};

  &:hover {
    background-color: ${({ background }) =>
      themeColors[background] || themeColors.darkBlue};
    color: ${({ color }) => themeColors[color] || themeColors.skyBlue};
    border: ${({ background }) =>
      `1px solid ${background || themeColors.skyBlue}`};
  }

  ${inputTextCssStyle}
  ${fadeIn}
`;

export { CustomLink };
