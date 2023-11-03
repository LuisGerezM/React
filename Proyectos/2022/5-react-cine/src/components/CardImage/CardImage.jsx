import { CardImageStylized } from "./styled-components/CardImage.styles";

const { REACT_APP_URL_IMAGE: URLIMAGE } = process.env;

export const CardImage = ({ location, height }) => {
  return (
    <CardImageStylized
      src={`${URLIMAGE}${location}`}
      alt="Poster de la película"
      height={height}
    />
  );
};
