import React from 'react';

import styles from './Venn.module.scss';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Venn extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <div className={styles.Venn}>
        <div className={styles.Container}>
          <div className={styles.Left} />
          <div className={styles.Right} />
        </div>
      </div>
    );
  }
}
