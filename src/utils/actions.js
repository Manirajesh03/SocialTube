export const IS_MENU_OPEN = "IS_MENU_OPEN";
export const CLOSE_MENU = "CLOSE_MENU";
export const SEARCH_DATA = "SEARCH_DATA";

export const isMenuOpen = () => {
  return {
    type: IS_MENU_OPEN,
  };
};

export const closeMenu = () => {
  return {
    type: CLOSE_MENU,
  };
};

export const searchData = (payload) => {
  return {
    type: SEARCH_DATA,
    payload: payload,
  };
};
