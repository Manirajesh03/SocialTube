import { createStore } from "redux";
import {
  CLOSE_MENU,
  IS_MENU_OPEN,
  OPEN_MENU,
  SEARCH_DATA,
  SEARCH_VIDEOS,
  searchVideos,
} from "./actions";

const initialState = {
  isMenuOpen: true,
  initialSearchData: {},
  searchVideos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false,
      };
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true,
      };
    case SEARCH_DATA:
      console.log(state, "inside switch");
      return {
        ...state,
        initialSearchData: { ...state.initialSearchData, ...action.payload },
      };
    case SEARCH_VIDEOS:
      return {
        ...state,
        searchVideos: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
