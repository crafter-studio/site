import React from 'react';
import {connect} from 'react-redux';

import styles from './Menu.module.scss';

import {ReduxState} from '../../../../../redux/reducers';
import {toggleHamburgerMenu} from '../../../../../redux/actions';

export interface Props {}

type State = {};
type ComposedProps = Props & ReduxState;

class Menu extends React.PureComponent<ComposedProps, State> {
  handleMenuClick() {
    const {dispatch, hamburgerMenuActive} = this.props;
    dispatch(toggleHamburgerMenu(!hamburgerMenuActive));
  }

  render() {
    return (
      <div
        onClick={this.handleMenuClick.bind(this)}
        className={styles.HamburgerMenu}
      >
        <div className={styles.LineTop} />
        <div className={styles.LineBottom} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    toggleHamburgerMenu: {hamburgerMenuActive},
  } = state;
  return {hamburgerMenuActive};
}

export default connect(
  mapStateToProps,
  null,
)(Menu);
