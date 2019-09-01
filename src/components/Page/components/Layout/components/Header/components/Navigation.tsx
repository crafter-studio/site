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
          <div className={styles.NavigationLinks}>
            <Link animated to="/work">
              Work
            </Link>
            <Link animated to="/about">
              About
            </Link>
            <Link animated to="/blog">
              Blog
            </Link>
            <Link animated to="/contact">
              Contact
            </Link>
          </div>
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
