import {combineReducers} from 'redux';
import {toggleHamburgerMenu, toggleDarkMode} from './reducers';

export default combineReducers({
  toggleHamburgerMenu,
  toggleDarkMode,
});
