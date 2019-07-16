import React from 'react';

import styles from './Header.module.scss';
import {MaxContentWidth} from '../../../../components';
import Menu from './components/Menu';

export interface Props {}

type State = {};
type ComposedProps = Props;

export default class Header extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <header className={styles.Header}>
        <MaxContentWidth fullHeight>
          <div className={styles.HeaderContent}>
            <div>Header</div>
            <div className={styles.HamburgerMenuWrapper}>
              <Menu />
            </div>
          </div>
        </MaxContentWidth>
      </header>
    );
  }
}
