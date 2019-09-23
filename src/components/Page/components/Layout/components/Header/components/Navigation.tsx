import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../../../../../../redux/reducers';
import {toggleHamburgerMenu} from '../../../../../../../redux/actions';

import styles from './Navigation.module.scss';
import {classNames} from '../../../../../../utils/classNames';
import {Link} from '../../../../../../../components';

export interface Props {}

type State = {};
type ComposedProps = Props & ReduxState;

class Navigation extends React.PureComponent<ComposedProps, State> {
  constructor(props) {
    super(props);
    this.handleNavigationLeave = this.handleNavigationLeave.bind(this);
  }

  handleNavigationLeave() {
    const {dispatch} = this.props;
    dispatch(toggleHamburgerMenu(false));
  }
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
        </div>
        <nav aria-expanded={hamburgerMenuActive} className={styles.Navigation}>
          <div className={styles.NavigationLinks}>
            <Link animated to="/work">
              Work
            </Link>
            <Link animated to="/approach">
              Approach
            </Link>
            <Link animated to="/blog">
              Blog
            </Link>
            <span onBlur={this.handleNavigationLeave}>
              <Link animated to="/contact">
                Contact
              </Link>
            </span>
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
