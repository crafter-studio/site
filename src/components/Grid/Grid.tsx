import React from 'react';

import styles from './Grid.module.scss';

export interface Props {
  article?: boolean;
}

type State = {};
type ComposedProps = Props;

class Grid extends React.PureComponent<ComposedProps, State> {
  static FullWidth;
  static ScreenWidth;

  render() {
    const {children, article} = this.props;

    const GridContent = article ? (
      <article className={styles.Grid}>{children}</article>
    ) : (
      <div className={styles.Grid}>{children}</div>
    );

    return <div className={styles.GridContainer}>{GridContent}</div>;
  }
}

const FullWidth = ({children}) => (
  <div className={styles.FullWidth}>{children}</div>
);

const ScreenWidth = ({children}) => (
  <div className={styles.ScreenWidth}>{children}</div>
);

Grid.FullWidth = FullWidth;
Grid.ScreenWidth = ScreenWidth;
export default Grid;