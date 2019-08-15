import React from 'react';

interface Props {
  width: number;
  height: number;
}

const SvgGrid: React.SFC<Props> = ({width, height}) => {
  function generateRect(width, height) {
    const rectSize = 5;
    const spacePerRow = Math.floor(width / rectSize);
    const spacePerColumn = Math.floor(height / rectSize); // amount of rows with spaces included

    const rectArray = [];
    let posX = 0;
    let posY = 0;
    for (let i = 0; i < spacePerRow * spacePerColumn; i++) {
      if (posX > width) {
        posX = 0;
        posY += rectSize * 2;
      }

      if (i % 2 == 0) {
        rectArray.push(
          <rect x={posX} y={posY} width={rectSize} height={rectSize} />,
        );
      }

      posX += rectSize;
    }

    return rectArray.map((rect, i) => (
      <React.Fragment key={i}>{rect}</React.Fragment>
    ));
  }

  return (
    <svg x="0px" y="0px" viewBox={`0 0 ${width} ${height}`}>
      {generateRect(width, height)}
    </svg>
  );
};

export default SvgGrid;
