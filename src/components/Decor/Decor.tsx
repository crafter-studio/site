import React from 'react';

import {
  AnimatedSquares,
  AnimatedSquareProps,
  Noise,
  Triangle,
  TriangleProps,
} from './components';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Decor extends React.PureComponent<ComposedProps, State> {
  static Triangle: React.SFC<TriangleProps>;
  static AnimatedSquares: React.SFC<AnimatedSquareProps>;
  static Noise;
  render() {
    return null;
  }
}

Decor.Triangle = Triangle;
Decor.AnimatedSquares = AnimatedSquares;
Decor.Noise = Noise;
