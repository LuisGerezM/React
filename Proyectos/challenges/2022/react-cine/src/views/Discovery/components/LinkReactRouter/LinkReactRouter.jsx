import { LinkStylized } from "./LinkReactRouter.styles";

export const LinkReactRouter = ({ to, text }) => (
  <LinkStylized to={to}>{text}</LinkStylized>
);
