import React from 'react';

import styles from './MaxContentWidth.module.scss';
import {classNames} from '../utils/classNames';

export interface Props {
  fullHeight?: boolean;
}

type State = {};
type ComposedProps = Props;

export default class Header extends React.PureComponent<ComposedProps, State> {
  render() {
    const {children, fullHeight} = this.props;

    const className = classNames(
      styles.MaxContentWidth,
      fullHeight && styles.fullHeight,
    );

    return <div className={className}>{children}</div>;
  }
}
