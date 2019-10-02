import React from 'react';

import styles from './ResponsiveDesign.module.scss';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class ResponsiveDesign extends React.PureComponent<
  ComposedProps,
  State
> {
  render() {
    return (
      <div className={styles.ResponsiveDesign}>
        <div className={styles.Frame}>
          <div className={styles.Top} />
          <div className={styles.Mid} />
          <div className={styles.Bottom}>
            <div className={styles.BottomLeft} />
            <div className={styles.BottomRight} />
          </div>
        </div>
      </div>
    );
  }
}
