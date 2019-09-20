import React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import {connect} from 'react-redux';
import {ReduxState} from '../../redux/reducers';
import {toggleHamburgerMenu, toggleDarkMode} from '../../redux/actions';

import styles from './Link.module.scss';
import {classNames} from '../../components/utils/classNames';

interface Props {
  to: string;
  unstyled?: boolean;
  secondaryFont?: boolean;
  animated?: boolean;
  className?: string;
}

class Link extends React.PureComponent<Props & ReduxState> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {dispatch, to} = this.props;
    dispatch(toggleDarkMode(false));
    if (to === location.pathname) {
      dispatch(toggleHamburgerMenu(false));
    }
  }

  render() {
    const {
      to,
      animated,
      secondaryFont,
      unstyled,
      children,
      className: classNameProp,
    } = this.props;

    const className = classNames(
      classNameProp,
      styles.Link,
      unstyled && styles.unstyled,
      animated && styles.animated,
      secondaryFont && styles.secondaryFont,
    );

    return (
      <span onClick={this.handleClick} className={className}>
        <GatsbyLink to={to}>{children}</GatsbyLink>
      </span>
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
)(Link);
