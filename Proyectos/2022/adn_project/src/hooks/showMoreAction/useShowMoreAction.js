import { useState } from "react";

export const useShowMoreAction = (str) => {
  const [showMore, setShowMore] = useState(false);

  const limitString = (str) => {
    if (str.length > 750)
      return { string: str.slice(0, 747).concat("..."), addBtn: true };
    return { string: str, addBtn: false };
  };

  const handleSeeMore = () => setShowMore((prevValue) => !prevValue);

  const txtBtn = showMore ? "Ver menos" : "Ver mas";
  const seeComplete = showMore ? str : limitString(str).string;
  const addButton = limitString(str).addBtn;

  return {
    showMore,
    txtBtn,
    limitString,
    handleSeeMore,
    seeComplete,
    addButton,
  };
};
