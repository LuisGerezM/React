export const TYPES_NEWS_REDUCER = {
  NEWS_REQUEST: "NEWS_REQUEST",
  NEWS_SUCCESS: "NEWS_SUCCESS",
  NEWS_FAILURE: "NEWS_FAILURE",
  NEWS_RESET_NOTIFICATION: "NEWS_RESET_NOTIFICATION",
  NEWS_RESET: "NEWS_RESET",
};

export const initialNewsState = {
  loadingNews: false,
  news: [],
  newsSearch: [],
  error: false,
  success_message: "",
  success_request: false,
  session: true,
};

const {
  NEWS_REQUEST,
  NEWS_SUCCESS,
  NEWS_SUCCESS_SEARCH,
  NEWS_FAILURE,
  NEWS_RESET_NOTIFICATION,
  NEWS_RESET,
} = TYPES_NEWS_REDUCER;

export const newsReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, loadingNews: true };

    case NEWS_SUCCESS:
      return {
        ...initialNewsState,
        news: action.payload.news,
        success_message: action.payload.success_message,
        success_request: true,
      };

    case NEWS_SUCCESS_SEARCH:
      return {
        ...initialNewsState,
        news: state.news,
        newsSearch: action.payload.filterNews,
        success_message: action.payload.success_message,
        success_request: true,
      };

    case NEWS_FAILURE:
      return {
        ...initialNewsState,
        news: state.news,
        error: action.payload,
      };

    case NEWS_RESET_NOTIFICATION:
      return {
        ...initialNewsState,
        news: state.news,
        newsSearch: state.newsSearch,
      };

    case NEWS_RESET:
      const resetNews = { ...initialNewsState };
      return resetNews;

    default:
      return state;
  }
};
