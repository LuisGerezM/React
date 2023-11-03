export const formatDate = ({ date, type = "all" }) => {
  const dateToReturn = {
    all: new Date(date).toLocaleString(),
    slice: new Date(date).toLocaleString().split(",")[0],
  };

  return dateToReturn[type];
};
