export const filterToString = (query, informationToRender, attribute) => {
  return informationToRender.filter((element) => {
    return (
      element.active &&
      element[attribute].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  });
};
