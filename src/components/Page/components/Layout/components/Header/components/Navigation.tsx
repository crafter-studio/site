import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../../../../../../redux/reducers';

import styles from './Navigation.module.scss';
import {classNames} from '../../../../../../utils/classNames';
import {Link} from '../../../../../../../components';

export interface Props {}

type State = {};
type ComposedProps = Props & ReduxState;

class Navigation extends React.PureComponent<ComposedProps, State> {
  render() {
    const {hamburgerMenuActive} = this.props;
    const className = classNames(
      styles.NavigationContainer,
      hamburgerMenuActive && styles.HamburgerMenuActive,
    );

    return (
      <div className={className}>
        <div className={styles.NavigationBackground}>
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
          <div className={styles.NavigationBackgroundLayer} />
        </div>
        <nav className={styles.Navigation}>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
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
)(Navigation);
