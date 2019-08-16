import React from 'react';
import {Scroll} from '../../components';

import styles from './Decor.module.scss';

interface TriangleProps {
  color: string;
  background?: string;
}

const Triangle: React.SFC<TriangleProps> = ({
  color,
  background = 'transparent',
}) => {
  return (
    <Scroll bottomOffset="0">
      <Scroll.LoadAnimation>
        <div
          className={styles.TriangleContainer}
          style={{
            backgroundColor: `${background}`,
          }}
        >
          <div
            style={{
              borderColor: `${color} transparent transparent transparent`,
              backgroundColor: `${background}`,
            }}
            className={styles.Triangle}
          />
        </div>
      </Scroll.LoadAnimation>
    </Scroll>
  );
};

interface DotsGridProps {
  width: number;
  height: number;
}

const DotsGrid: React.SFC<DotsGridProps> = ({width, height}) => {
  function generateRect(width, height) {
    const rectSize = 5;
    const spacePerRow = Math.ceil(width / 10);
    const spacePerColumn = Math.ceil(height / 10) * 2; // amount of rows with spaces included

    const rectArray = [];
    let posX = 0;
    let posY = 0;
    for (let i = 0; i < spacePerRow * spacePerColumn; i++) {
      if (posX > width) {
        posX = 0;
        posY += rectSize * 2;
      }

      if (i % 2 == 0) {
        const totalDuration = 1;
        const animationFactor = i / (spacePerRow * spacePerColumn);
        const itemDuration = totalDuration - animationFactor;
        const animationDuration = `${itemDuration}s`;
        rectArray.push(
          <rect x={posX} y={posY}>
            <animate
              attributeName="width"
              from="0"
              to="5px"
              dur={animationDuration}
              fill="freeze"
            />
            <animate
              attributeName="height"
              from="0"
              to="5px"
              dur={animationDuration}
              fill="freeze"
            />
          </rect>,
        );
      }

      posX += rectSize;
    }

    return rectArray.map((rect, i) => (
      <React.Fragment key={i}>{rect}</React.Fragment>
    ));
  }

  return (
    <svg
      className={styles.DotsGrid}
      width={width}
      height={height}
      x="0px"
      y="0px"
      viewBox={`0 0 ${width} ${height}`}
    >
      {generateRect(width, height)}
    </svg>
  );
};

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Decor extends React.PureComponent<ComposedProps, State> {
  static Triangle: React.SFC<TriangleProps>;
  static DotsGrid: React.SFC<DotsGridProps>;
  render() {
    return null;
  }
}

Decor.Triangle = Triangle;
Decor.DotsGrid = DotsGrid;
