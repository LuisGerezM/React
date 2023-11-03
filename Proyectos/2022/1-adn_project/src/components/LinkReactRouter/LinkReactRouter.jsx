import { LinkStyled } from "./styled-components/LinkReactRouter.styles";

export const LinkReactRouter = ({ to, text, from = undefined }) => {
  return <LinkStyled from={from} to={to}>{text}</LinkStyled>;
};
