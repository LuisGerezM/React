import { useState } from "react";
import { FormCreateNews } from "./components/FormCreateNews/FormCreateNews";
import { WrapNewsStyled } from "./styled-components/wrapNews.styled";
import { FormShowNews } from "./components/FormShowNews/FormShowNews";
import { NewsToggleButton } from "./components/NewsToggleButtons/NewsToggleButton";

const News = () => {
  const [clickToggleBtn, setClickToggleBtn] = useState("news");

  const handleToggleBtnClick = (actionShow) => {
    setClickToggleBtn(actionShow);
  };

  return (
    <WrapNewsStyled>
      <NewsToggleButton
        clickToggleBtn={clickToggleBtn}
        handleToggleBtnClick={handleToggleBtnClick}
      />

      {clickToggleBtn === "news" ? (
        <FormShowNews />
      ) : (
        <FormCreateNews navigateToNews={handleToggleBtnClick} />
      )}
    </WrapNewsStyled>
  );
};

export default News;
