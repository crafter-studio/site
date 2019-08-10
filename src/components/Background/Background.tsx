import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../redux/reducers';

import styles from './Background.module.scss';
import {Text} from '../../components';
import {classNames} from '../utils/classNames';

export interface Props {}

type State = {};
type ComposedProps = ReduxState & Props;

class Background extends React.PureComponent<ComposedProps, State> {
  render() {
    const {hamburgerMenuActive} = this.props;
    const className = classNames(
      styles.Background,
      hamburgerMenuActive && styles.HamburgerActive,
    );

    return <div className={className} />;
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
)(Background);
