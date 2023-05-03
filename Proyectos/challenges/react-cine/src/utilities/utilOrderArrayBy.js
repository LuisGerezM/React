function descendingOrderBy(a, b) {
  if (a.popularity > b.popularity) return -1;
  else if (a.popularity < b.popularity) return 1;
  return 0;
}

export const utilOrderArrayBy = (orderedArray) => {
  orderedArray.sort((a, b) => descendingOrderBy(a, b));
  return orderedArray;
};
