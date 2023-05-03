import { darkStarIcon, lightStarIcon } from "assets/images/images";
import { TYPES } from "./types/filterStarTypes";

const iconsFisterStar = { ligthStar: lightStarIcon, darkStar: darkStarIcon };

export const initialStateStar = {
  loadingFilter: false,
  lastSelectedStar: 0,
  arrayStars: [
    { id: 1, icon: iconsFisterStar.darkStar },
    { id: 2, icon: iconsFisterStar.darkStar },
    { id: 3, icon: iconsFisterStar.darkStar },
    { id: 4, icon: iconsFisterStar.darkStar },
    { id: 5, icon: iconsFisterStar.darkStar },
  ],
};

export function filterStarsReducer(state, action) {
  switch (action.type) {
    case TYPES.FILTER_REQUEST:
      return { ...state, loadingFilter: true };

    case TYPES.PAINT_STARS:
      return {
        ...initialStateStar,
        lastSelectedStar: action.payload,
        arrayStars: state.arrayStars.map((item) =>
          item.id <= action.payload
            ? { ...item, icon: iconsFisterStar.ligthStar }
            : { ...item, icon: iconsFisterStar.darkStar }
        ),
      };

    case TYPES.CLEAN_STARS:
      return { ...initialStateStar };

    default:
      return state;
  }
}
