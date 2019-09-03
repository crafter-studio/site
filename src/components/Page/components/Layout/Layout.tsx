import React from 'react';
import {connect} from 'react-redux';
import KeyHandler, {KEYDOWN} from 'react-key-handler';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import {ReduxState} from '../../../../redux/reducers';
import {toggleHamburgerMenu, setBgColor} from '../../../../redux/actions';

import styles from './Layout.module.scss';
import {classNames} from '../../../utils/classNames';

import Header from './components/Header';
import Footer from './components/Footer';
import CookiePolicy from './components/CookiePolicy';

export interface Props {}

type State = {};
type ComposedProps = ReduxState & Props;

class Layout extends React.PureComponent<ComposedProps, State> {
  targetRef = React.createRef();
  targetElement = null;

  constructor(props) {
    super(props);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuClose() {
    const {hamburgerMenuActive, dispatch} = this.props;
    if (hamburgerMenuActive === false) {
      return;
    }
    dispatch(toggleHamburgerMenu(false));
  }

  componentDidMount() {
    const {dispatch} = this.props;
    const root = document.documentElement;
    this.targetElement = this.targetRef.current;
    root.style.setProperty('--color-text-themed', 'var(--color-text)');
    root.style.setProperty('--color-heading-themed', 'var(--color-heading)');
    dispatch(setBgColor('var(--color-bg)'));
    dispatch(toggleHamburgerMenu(false));
  }

  componentDidUpdate() {
    const {hamburgerMenuActive} = this.props;
    if (hamburgerMenuActive) {
      disableBodyScroll(this.targetElement);
    } else {
      enableBodyScroll(this.targetElement);
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const {children, hamburgerMenuActive} = this.props;

    const layoutClassName = classNames(
      styles.Layout,
      hamburgerMenuActive && styles.HamburgerMenuActive,
    );

    return (
      <div className={layoutClassName}>
        <KeyHandler
          keyEventName={KEYDOWN}
          keyValue="Escape"
          onKeyHandle={this.handleMenuClose}
        />
        <div className={styles.Header}>
          <Header />
        </div>
        <div onClick={this.handleMenuClose} className={styles.Content}>
          {children}
        </div>
        <div onClick={this.handleMenuClose} className={styles.Footer}>
          <Footer />
        </div>
        <CookiePolicy />
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
