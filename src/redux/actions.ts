export enum Actions {
  TOGGLE_HAMBURGER_MENU = 'TOGGLE_HAMBURGER_MENU',
  TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
}

export const toggleHamburgerMenu = (hamburgerMenuActive) => ({
  type: Actions.TOGGLE_HAMBURGER_MENU,
  hamburgerMenuActive,
});

export const toggleDarkMode = (darkModeActive) => ({
  type: Actions.TOGGLE_DARK_MODE,
  darkModeActive,
});
