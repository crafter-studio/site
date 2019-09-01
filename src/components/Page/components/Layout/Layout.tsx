import React from 'react';
import {connect} from 'react-redux';
import KeyHandler, {KEYDOWN} from 'react-key-handler';
import {ReduxState} from '../../../../redux/reducers';
import {toggleHamburgerMenu} from '../../../../redux/actions';

import styles from './Layout.module.scss';
import {classNames} from '../../../utils/classNames';

import Header from './components/Header';
import Footer from './components/Footer';

export interface Props {}

type State = {};
type ComposedProps = ReduxState & Props;

class Layout extends React.PureComponent<ComposedProps, State> {
  render() {
    const {children, hamburgerMenuActive, dispatch} = this.props;

    const layoutClassName = classNames(
      styles.Layout,
      hamburgerMenuActive && styles.HamburgerMenuActive,
    );

    return (
      <div className={layoutClassName}>
        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue="Escape"
          onKeyHandle={() => {
            dispatch(toggleHamburgerMenu(false));
          }}
        />
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
