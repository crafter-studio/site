import React from 'react';

import {
  AnimatedSquares,
  AnimatedSquareProps,
  Line,
  Noise,
  Triangle,
  TriangleProps,
} from './components';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Decor extends React.PureComponent<ComposedProps, State> {
  static AnimatedSquares: React.SFC<AnimatedSquareProps>;
  static Line;
  static Noise;
  static Triangle: React.SFC<TriangleProps>;
  render() {
    return null;
  }
}

Decor.AnimatedSquares = AnimatedSquares;
Decor.Line = Line;
Decor.Noise = Noise;
Decor.Triangle = Triangle;
