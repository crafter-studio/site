import React from 'react';

interface Props {
  char: string;
  speed?: number;
  duration?: number;
}

type State = {
  scramblingChar: string;
};
type ComposedProps = Props;

class ScrambledChar extends React.PureComponent<ComposedProps, State> {
  constructor(props) {
    super(props);
  }

  state: State = {
    scramblingChar: '',
  };

  ref = React.createRef();
  animationID = null;
  animationStartTime = Date.now();
  animationFramePrevious = null;
  finalMessage = '';

  componentDidMount() {
    this.animationID = window.requestAnimationFrame(() => this.update());
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationID);
  }

  private update() {
    const {char, speed = 40, duration = 2000} = this.props;

    // window object does not exist in Webpack's Node environment, this is to prevent the error
    const browserWindow = typeof window !== 'undefined' ? window : null;
    const timePassed = Date.now() - this.animationFramePrevious;
    if (this.animationFramePrevious == null || timePassed > speed) {
      this.setState({
        scramblingChar: this.randomChar(),
      });
      this.animationFramePrevious = Date.now();
    }

    if (Date.now() - this.animationStartTime > duration) {
      window.cancelAnimationFrame(this.animationID);
      this.setState({
        scramblingChar: char,
      });
      return;
    }

    this.animationID = browserWindow.requestAnimationFrame(() => this.update());
  }

  private randomChar() {
    const {char} = this.props;
    const chars = '!<>-_\\/[]{}—=+*^?#_-$@01&' + char;

    return chars[Math.floor(Math.random() * chars.length)];
  }

  render() {
    return this.state.scramblingChar;
  }
}

const ScrambledText = ({message, speed = 40, duration = 2000}) => {
  const messageArray = message.split('');

  function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function variableNumber(delta, num) {
    return randomNumber(num - delta, num);
  }

  function variedSpeed() {
    return variableNumber(speed / 1.5, speed);
  }

  function variedDuration() {
    return variableNumber(duration / 3, duration);
  }

  const scrambledText = messageArray.map((item, index) => {
    if (message[index] === ' ') {
      return <span key={index}>{'\u00A0'}</span>;
    } else {
      return (
        <span key={index}>
          <ScrambledChar
            char={message[index]}
            speed={variedSpeed()}
            duration={variedDuration()}
          />
        </span>
      );
    }
  });

  return scrambledText;
};

export default ScrambledText;
