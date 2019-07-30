import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../redux/reducers';
import {toggleDarkMode} from '../../redux/actions';
import {Waypoint} from 'react-waypoint';

interface Props {
  darkMode?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

type State = {};
type ComposedProps = ReduxState & Props;

class Scroll extends React.PureComponent<ComposedProps, State> {
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.handleOnLeave = this.handleOnLeave.bind(this);
  }

  private handleOnEnter() {
    const {darkMode, onEnter, dispatch} = this.props;

    if (darkMode) {
      dispatch(toggleDarkMode(true));
    }

    if (onEnter != null) {
      onEnter();
    }
  }

  private handleOnLeave() {
    const {darkMode, onLeave, dispatch} = this.props;

    if (darkMode) {
      dispatch(toggleDarkMode(false));
    }

    if (onLeave != null) {
      onLeave();
    }
  }

  render() {
    // window object does not exist in Webpack's Node environment, this is to prevent the error
    const browserWindow = typeof window !== 'undefined' ? window : null;

    return (
      <Waypoint
        scrollableAncestor={browserWindow}
        bottomOffset="90%"
        onEnter={this.handleOnEnter}
        onLeave={this.handleOnLeave}
      >
        {this.props.children}
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
)(Scroll);
