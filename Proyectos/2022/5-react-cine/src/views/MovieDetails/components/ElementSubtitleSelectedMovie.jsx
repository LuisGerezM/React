import { SubTitleText } from "App.styles";

export const ElementSubtitleSelectedMovie = ({ subtitle }) => (
  <SubTitleText className="text-center" from={"movie-details"}>
    {subtitle}
  </SubTitleText>
);
