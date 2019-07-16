export enum Actions {
  TOGGLE_HAMBURGER_MENU = 'TOGGLE_HAMBURGER_MENU',
}

export const toggleHamburgerMenu = (hamburgerMenuActive) => ({
  type: Actions.TOGGLE_HAMBURGER_MENU,
  hamburgerMenuActive,
});
