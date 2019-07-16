import React from 'react';

import styles from './Content.module.scss';

export interface Props {}

type State = {};
type ComposedProps = Props;

class Heading extends React.PureComponent<ComposedProps, State> {
  static FullWidth;
  static ScreenWidth;

  render() {
    const {children} = this.props;

    return (
      <div className={styles.GridContainer}>
        <article className={styles.Grid}>{children}</article>
      </div>
    );
  }
}

const FullWidth = ({children}) => (
  <div className={styles.FullWidth}>{children}</div>
);

const ScreenWidth = ({children}) => (
  <div className={styles.ScreenWidth}>{children}</div>
);

Heading.FullWidth = FullWidth;
Heading.ScreenWidth = ScreenWidth;
export default Heading;
