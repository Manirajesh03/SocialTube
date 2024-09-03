export const IS_MENU_OPEN = "IS_MENU_OPEN";
export const CLOSE_MENU = "CLOSE_MENU";

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
