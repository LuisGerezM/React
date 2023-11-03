import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { lenguageAppSchema } from "schemas/app.schema";
import { filterToString } from "utilities/filterTo";
import { ShowNewsSection } from "../components/FormShowNews/FormNewsSections/ShowNewsSection";
import {
  initialNewsState,
  newsReducer,
  TYPES_NEWS_REDUCER,
} from "../hooks/useNewsReducer";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialNewsState);

  const [messageError, setMessageError] = useState("");

  const [disabledSearchButton, setDisabledSearchButton] = useState(true);

  const handleChangeInputFilter = (e) => {
    if (!e.target.value) {
      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_SUCCESS_SEARCH,
        payload: {
          filterNews: [],
          success_message: "filter news reset",
        },
      });
      setDisabledSearchButton(true);
      handleMessageError("");
      return;
    }
    setDisabledSearchButton(false);
  };

  const handleSubmitInputFilter = (e) => {
    e.preventDefault();

    if (!e.target.search.value)
      return dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_SUCCESS_SEARCH,
        payload: {
          filterNews: [],
          success_message: "filter news reset",
        },
      });

    const query = e.target.search.value;
    const attribute = e.target.filter.value;

    const filter = filterToString(query, state.news, attribute);

    if (!filter.length)
      return dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_FAILURE,
        payload: {
          message: lenguageAppSchema("weNotFindItThatSearch"),
          code: 1,
        },
      });

    dispatch({
      type: TYPES_NEWS_REDUCER.NEWS_SUCCESS_SEARCH,
      payload: {
        filterNews: filterToString(query, state.news, attribute),
        success_message: "filter news success",
      },
    });
  };

  const handleMessageError = (value) => setMessageError(value);

  const newsToRender = ({ item }) => (
    <ShowNewsSection key={item.id} item={item} />
  );

  useEffect(() => {
    if (state.error) {
      console.error("mostrar mensaje error", state.error);
      setMessageError(state.error);
      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_RESET_NOTIFICATION,
      });
    }
  }, [state.error, dispatch]);

  useEffect(() => {
    if (state.success_request) {
      setMessageError("");
      dispatch({
        type: TYPES_NEWS_REDUCER.NEWS_RESET_NOTIFICATION,
      });
    }
  }, [state.success_request, dispatch]);

  return (
    <NewsContext.Provider
      value={{
        state,
        dispatch,
        messageError,
        handleMessageError,
        disabledSearchButton,
        handleChangeInputFilter,
        handleSubmitInputFilter,
        newsToRender,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (context === undefined)
    throw new Error("News context must be used within a News provider");

  return context;
};

export { useNewsContext, NewsProvider };
