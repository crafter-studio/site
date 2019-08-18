import React from 'react';

import styles from './Noise.module.scss';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Noise extends React.PureComponent<ComposedProps, State> {
  render() {
    return <div className={styles.Noise} />;
  }
}
