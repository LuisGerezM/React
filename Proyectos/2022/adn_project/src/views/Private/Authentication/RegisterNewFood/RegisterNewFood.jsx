import { SubtitleTextStyled } from "styled-components/App.styled";
import { PublicRoutes } from "models/routes";
import { Navigate } from "react-router-dom";

const RegisterNewFood = () => {
  return (
    <SubtitleTextStyled>
      RegisterNewFood In Develop <Navigate to={PublicRoutes.HOME} />
    </SubtitleTextStyled>
  );
};
export default RegisterNewFood;
