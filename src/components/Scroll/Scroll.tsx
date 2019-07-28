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

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  private isInViewport = (e, {top: t, height: h} = e.getBoundingClientRect()) =>
    t <= innerHeight && t + h >= 0;

  private isAtTopOfPage = (e, {top: t} = e.getBoundingClientRect()) =>
    t < 0 && t > -100;

  private handleScroll() {
    const {darkMode, handleInView, dispatch} = this.props;

    if (this.isAtTopOfPage(this.scrollRef.current)) {
      if (darkMode) {
        dispatch(toggleDarkMode(true));
      } else {
        dispatch(toggleDarkMode(false));
      }
    }

    if (this.isInViewport(this.scrollRef.current)) {
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
