import React from 'react';

import styles from './Triangle.module.scss';
import {Scroll} from '../../../../components';

export interface Props {
  color: string;
  background?: string;
}

const Triangle: React.SFC<Props> = ({color, background = 'transparent'}) => {
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

export default Triangle;
