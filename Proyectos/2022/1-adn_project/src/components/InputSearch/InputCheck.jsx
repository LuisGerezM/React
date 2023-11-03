import { FormCheckStyled } from "./styled-components/FormCheck.styled";

export const InputCheck = ({ item }) => {
  const { label, name, type, value, defaultChecked } = item;
  return (
    <FormCheckStyled
      className="FormCheckStyled"
      inline
      label={" " + label}
      name={name}
      type={type}
      value={value}
      defaultChecked={defaultChecked}
    />
  );
};
