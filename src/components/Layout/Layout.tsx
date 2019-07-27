import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../redux/reducers';

import styles from './Layout.module.scss';
import {classNames} from '../utils/classNames';

import Background from '../Background';
import Header from './components/Header';
import Footer from './components/Footer';

export interface Props {}

type State = {};
type ComposedProps = ReduxState & Props;

class Layout extends React.PureComponent<ComposedProps, State> {
  render() {
    const {children, hamburgerMenuActive} = this.props;

    const layoutClassName = classNames(
      styles.Layout,
      hamburgerMenuActive && styles.hamburgerMenuActive,
    );

    return (
      <div className={layoutClassName}>
        <Background />
        <div className={styles.Header}>
          <Header />
        </div>
        <div className={styles.Content}>{children}</div>
        <div className={styles.Footer}>
          <Footer />
        </div>
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
)(Layout);
