import { AlertStylized } from "./styled-components/AlertMsg.styles";

export const AlertMsg = ({ color, text }) => {
  return <AlertStylized color={color}>{text}</AlertStylized>;
};
