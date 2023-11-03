import { Text } from "App.styles";

export const ElementTextSelectedMovie = ({ text }) => {
  return (
    <Text className="text-center" from={"movie-details"}>
      {text}
    </Text>
  );
};
