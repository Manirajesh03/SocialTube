import { createStore } from "redux";
import { IS_MENU_OPEN, isMenuOpen } from "./actions";

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
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
