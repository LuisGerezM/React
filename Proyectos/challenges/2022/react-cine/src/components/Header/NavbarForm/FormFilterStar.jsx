import { useContext } from "react";
import { MoviesContext } from "contexts/MoviesContext/MoviesProvider";

import {
  ButtonGroupStylized,
  ButtonStylized,
} from "../styled-components/FormFilterStar.styles";
import { Text } from "App.styles";
import { ButtonToolbar } from "react-bootstrap";

export const FormFilterStar = () => {
  const { handleClickFilterStar, arrayStars, isInDetail } =
    useContext(MoviesContext);

  return (
    <>
      <Text className="d-none d-sm-flex m-auto pe-2">Filtro</Text>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroupStylized
          className="me-2 py-1 px-2"
          aria-label="First group"
        >
          {arrayStars.map((btnStar) => (
            <ButtonStylized
              key={btnStar.id.toString()}
              id={btnStar.id}
              onClick={handleClickFilterStar}
              disabled={isInDetail}
            >
              {btnStar.icon}
            </ButtonStylized>
          ))}
        </ButtonGroupStylized>
      </ButtonToolbar>
    </>
  );
};
