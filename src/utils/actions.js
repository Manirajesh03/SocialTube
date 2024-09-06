export const IS_MENU_OPEN = "IS_MENU_OPEN";
export const CLOSE_MENU = "CLOSE_MENU";
export const OPEN_MENU = "OPEN_MENU";
export const SEARCH_DATA = "SEARCH_DATA";
export const SEARCH_VIDEOS = "SEARCH_VIDEOS";

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
export const openMenu = () => {
  return {
    type: OPEN_MENU,
  };
};

export const searchData = (payload) => {
  return {
    type: SEARCH_DATA,
    payload: payload,
  };
};

export const searchVideos = (payload) => {
  return {
    type: SEARCH_VIDEOS,
    payload,
  };
};
