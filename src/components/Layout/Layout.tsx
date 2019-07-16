import React from 'react';
import {connect} from 'react-redux';

import styles from './Layout.module.scss';

import {ReduxState} from '../../redux/reducers';
import {classNames} from '../utils/classNames';

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
        <div className={styles.Header}>
          <Header />
        </div>
        <div className={styles.Content}>
          <p>{`${hamburgerMenuActive}`}</p>
          {children}
        </div>
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