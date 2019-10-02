import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../../../redux/reducers';

import styles from './Background.module.scss';

class Blob extends React.PureComponent {
  canvasRef;
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');

    var width = (canvas.width = window.innerWidth),
      height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', function() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    var circ = (4 * (Math.sqrt(2) - 1)) / 3;

    var count = Math.PI;

    function drawBezierCircle(cx, cy, r) {
      var c;
      var offsetX = 20 * Math.sin(count);
      var offsetY = 15 * Math.cos(count * 2);
      r = r / 2;

      count += 0.01;

      ctx.translate(cx, cy); // translate to centerpoint

      ctx.beginPath();

      // top right
      c = circ + 0.2 * Math.sin(count);
      ctx.moveTo(offsetX + 0, offsetY + -r);
      ctx.bezierCurveTo(
        offsetX + c * r,
        offsetY + -r,
        offsetX + r,
        offsetY + -c * r,
        offsetX + r,
        offsetY + 0,
      );

      // bottom right
      c = circ + 0.2 * Math.cos(count);
      ctx.bezierCurveTo(
        offsetX + r,
        offsetY + c * r,
        offsetX + c * r,
        offsetY + r,
        offsetX + 0,
        offsetY + r,
      );

      // bottom left
      c = circ + 0.2 * Math.sin(count * 2);
      ctx.bezierCurveTo(
        offsetX + -c * r,
        offsetY + r,
        offsetX + -r,
        offsetY + c * r,
        offsetX + -r,
        offsetY + 0,
      );

      // top left
      c = circ + 0.2 * Math.cos(count + 1);
      ctx.bezierCurveTo(
        offsetX + -r,
        offsetY + -c * r,
        offsetX + -c * r,
        offsetY + -r,
        offsetX + 0,
        offsetY + -r,
      );

      ctx.fillStyle = '#ffe84b';
      ctx.fill();
    }

    function animate() {
      requestAnimationFrame(animate);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, width, height);

      drawBezierCircle(width / 2, height / 2, 300);
    }

    animate();
  }

  render() {
    return <canvas className={styles.Blob} ref={this.canvasRef} />;
  }
}

interface Props {
  blob?: boolean;
}
interface State {}

type ComposedProps = Props & ReduxState;

class Background extends React.PureComponent<ComposedProps, State> {
  state;
  render() {
    const {bgColor, blob, children} = this.props;
    const BlobMarkup = blob ? <Blob /> : null;

    return (
      <div style={{backgroundColor: bgColor}} className={styles.Background}>
        {children}
        {BlobMarkup}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    setBgColor: {bgColor},
  } = state;
  return {bgColor};
}

export default connect(
  mapStateToProps,
  null,
)(Background);
