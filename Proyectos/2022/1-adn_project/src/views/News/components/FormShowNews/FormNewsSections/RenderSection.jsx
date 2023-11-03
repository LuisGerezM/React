import { lenguageAppSchema } from "schemas/app.schema";
import { SubtitleTextStyled } from "styled-components/App.styled";
import { useNewsContext } from "views/News/context/NewsProvider";

export const RenderSection = () => {
  const { state, newsToRender } = useNewsContext();

  return (
    <>
      {state.newsSearch.length > 0 ? (
        <>
          <SubtitleTextStyled>
            {lenguageAppSchema("searchResultsText")}:
          </SubtitleTextStyled>
          {state.newsSearch.map((item) => newsToRender({ item }))}
        </>
      ) : (
        state.news.length > 0 &&
        state.news.map((item) => newsToRender({ item }))
      )}
    </>
  );
};
