import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../redux/reducers';
import {toggleDarkMode, setBgColor} from '../../redux/actions';
import {Waypoint} from 'react-waypoint';

interface Props {
  darkMode?: boolean;
  bgColor?: string;
  onEnter?: () => void;
  onLeave?: () => void;
}

type State = {};
type ComposedProps = ReduxState & Props;

class Theme extends React.PureComponent<ComposedProps, State> {
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.handleOnLeave = this.handleOnLeave.bind(this);
  }

  private activeDarkThemeColors() {
    const root = document.documentElement;
    root.style.setProperty('--color-text-themed', 'var(--color-text-neg)');
    root.style.setProperty(
      '--color-heading-themed',
      'var(--color-heading-neg)',
    );
  }

  private deactiveDarkThemeColors() {
    const root = document.documentElement;
    root.style.setProperty('--color-text-themed', 'var(--color-text)');
    root.style.setProperty('--color-heading-themed', 'var(--color-heading)');
  }

  private handleOnEnter() {
    const {darkMode = false, bgColor, onEnter, dispatch} = this.props;

    if (bgColor) {
      dispatch(setBgColor(bgColor));
    }

    if (darkMode) {
      dispatch(toggleDarkMode(true));
      this.activeDarkThemeColors();
    } else {
      dispatch(toggleDarkMode(false));
      this.deactiveDarkThemeColors();
    }

    if (onEnter != null) {
      onEnter();
    }
  }

  private handleOnLeave() {
    const {darkMode, bgColor, onLeave, dispatch} = this.props;

    if (bgColor) {
      dispatch(setBgColor('var(--color-bg)'));
    }

    dispatch(toggleDarkMode(false));
    this.deactiveDarkThemeColors();

    if (onLeave != null) {
      onLeave();
    }
  }

  render() {
    // window object does not exist in Webpack's Node environment, this is to prevent the error
    const browserWindow = typeof window !== 'undefined' ? window : null;

    return (
      <Waypoint
        fireOnRapidScroll
        scrollableAncestor={browserWindow}
        topOffset="33%"
        bottomOffset="66%"
        onEnter={this.handleOnEnter}
        onLeave={this.handleOnLeave}
      >
        {/* Waypoint needs a DOM node to compute boundaries */}
        <div>{this.props.children}</div>
      </Waypoint>
    );
  }
}

function mapStateToProps(state) {
  const {
    toggleDarkMode: {darkModeActive},
  } = state;
  return {darkModeActive};
}

export default connect(
  mapStateToProps,
  null,
)(Theme);
