import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../redux/reducers';
import {toggleDarkMode} from '../../redux/actions';

interface Props {
  darkMode?: boolean;
  handleInView?: () => void;
}

type State = {};
type ComposedProps = ReduxState & Props;

class Scroll extends React.PureComponent<ComposedProps, State> {
  private scrollRef: React.RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    console.log('DarkMode: ', this.props.darkModeActive);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  private isInViewport = (e, {top: t, height: h} = e.getBoundingClientRect()) =>
    t <= innerHeight && t + h >= 0;

  private handleScroll() {
    const {darkMode = false, handleInView, dispatch} = this.props;

    if (this.isInViewport(this.scrollRef.current)) {
      if (darkMode) {
        dispatch(toggleDarkMode(true));
      } else {
        dispatch(toggleDarkMode(false));
      }

      if (handleInView == null) {
        return;
      }
      handleInView();
    }
  }

  render() {
    return <div ref={this.scrollRef}>{this.props.children}</div>;
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
