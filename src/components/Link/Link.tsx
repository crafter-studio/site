import React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import {connect} from 'react-redux';
import {ReduxState} from '../../redux/reducers';
import {toggleHamburgerMenu, toggleDarkMode} from '../../redux/actions';

import styles from './Link.module.scss';
import {classNames} from '../../components/utils/classNames';

interface Props {
  to: string;
  underlined?: boolean;
  secondaryFont?: boolean;
  animated?: boolean;
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
      underlined = true,
      children,
    } = this.props;

    const className = classNames(
      styles.Link,
      underlined && styles.underlined,
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
