import React from 'react';

import styles from './AnimatedSquare.module.scss';

interface Props {}

type State = {};
type ComposedProps = Props;

export default class AnimatedSquare extends React.PureComponent<
  ComposedProps,
  State
> {
  render() {
    return (
      <div className={styles.SvgWrapper}>
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.Rect} height="120" width="120" />
        </svg>
      </div>
    );
  }
}
