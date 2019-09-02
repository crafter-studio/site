import React from 'react';
import {connect} from 'react-redux';

import {ReduxState} from '../../../../../../../redux/reducers';
import {toggleHamburgerMenu} from '../../../../../../../redux/actions';

import styles from './Menu.module.scss';
import {classNames} from '../../../../../../utils/classNames';

export interface Props {}

type State = {
  focusing: boolean;
};
type ComposedProps = Props & ReduxState;

class Menu extends React.PureComponent<ComposedProps, State> {
  state: State = {
    focusing: false,
  };

  handleMenuClick() {
    const {dispatch, hamburgerMenuActive} = this.props;
    if (this.state.focusing) {
      return;
    }
    dispatch(toggleHamburgerMenu(!hamburgerMenuActive));
  }

  handleMenuFocus() {
    const {dispatch, hamburgerMenuActive} = this.props;
    // Prevents focus and click from firing together...
    this.setState({focusing: true});
    setTimeout(() => {
      this.setState({focusing: false});
    }, 500);
    dispatch(toggleHamburgerMenu(!hamburgerMenuActive));
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
        onFocus={this.handleMenuFocus.bind(this)}
        onClick={this.handleMenuClick.bind(this)}
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
