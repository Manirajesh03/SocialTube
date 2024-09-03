import { createStore } from "redux";
import { CLOSE_MENU, IS_MENU_OPEN } from "./actions";

const initialState = {
  isMenuOpen: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: state.isMenuOpen ? false : true,
      };
    case CLOSE_MENU:
      return {
        isMenuOpen: false,
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
