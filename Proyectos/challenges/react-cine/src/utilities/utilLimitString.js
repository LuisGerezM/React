const limitString = (str) => {
  if (str.length > 100) return { string: str.slice(0, 87).concat("...") };
  return { string: str };
};

export { limitString };
