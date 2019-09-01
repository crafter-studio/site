import React from 'react';
import {connect} from 'react-redux';

import {ReduxState} from '../../../../../../../redux/reducers';
import {toggleHamburgerMenu} from '../../../../../../../redux/actions';

import styles from './Menu.module.scss';
import {classNames} from '../../../../../../utils/classNames';

export interface Props {}

type State = {};
type ComposedProps = Props & ReduxState;

class Menu extends React.PureComponent<ComposedProps, State> {
  handleMenuOpen() {
    const {dispatch} = this.props;
    dispatch(toggleHamburgerMenu(true));
  }

  render() {
    const {darkModeActive, hamburgerMenuActive} = this.props;
    const className = classNames(
      styles.HamburgerMenu,
      darkModeActive && styles.DarkModeActive,
      hamburgerMenuActive && styles.HamburgerMenuActive,
    );

    return (
      <button
        onFocus={this.handleMenuOpen.bind(this)}
        onClick={this.handleMenuOpen.bind(this)}
        className={className}
      >
        <div className={styles.LineTop} />
        <div className={styles.LineMiddle} />
        <div className={styles.LineBottom} />
      </button>
    );
  }
}

function mapStateToProps(state) {
  const {
    toggleHamburgerMenu: {hamburgerMenuActive},
    toggleDarkMode: {darkModeActive},
  } = state;
  return {hamburgerMenuActive, darkModeActive};
}

export default connect(
  mapStateToProps,
  null,
)(Menu);
