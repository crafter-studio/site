import {Actions} from './actions';
// Fake props for redux to prevent typescript error
type callback = () => void;
interface ReduxProps {
  dispatch: (callback) => void;
}

export interface State {
  hamburgerMenuActive: boolean;
}

const initialState: State = {
  hamburgerMenuActive: false,
};

export const toggleHamburgerMenu = (state = initialState, action) => {
  switch (action.type) {
    case Actions.TOGGLE_HAMBURGER_MENU:
      return {...state, hamburgerMenuActive: action.hamburgerMenuActive};
    default:
      return state;
  }
};

export type ReduxState = State & ReduxProps;
