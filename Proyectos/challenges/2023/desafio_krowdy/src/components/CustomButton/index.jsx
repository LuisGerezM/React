import { InputTexts } from "@/styled-components/typography.styled";
import { Button } from "./styles";

export const CustomButton = ({
  buttonClass = "",
  onClick,
  text = undefined,
  disabled = false,
  children
}) => {
  return (
    <Button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text ? <InputTexts>{text}</InputTexts> : children}
    </Button>
  );
};
