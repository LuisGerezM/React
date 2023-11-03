const byDate = (array) => {
  return array.sort((prev, next) => {
    if (prev.date > next.date) {
      return -1;
    }
    return 0;
  });
};

const byName = (array) => {
  return array.sort((prev, next) => {
    if (prev.name.toLowerCase() < next.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });
};

export const orderArrayBy = ({ array, by = "name" }) => {
  return by === "name" ? byName(array) : byDate(array);
};
