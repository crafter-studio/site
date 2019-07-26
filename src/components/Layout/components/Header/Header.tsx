import React from 'react';

import styles from './Header.module.scss';
import Logo from './assets/crafter-studio-logo.svg';
import {Grid} from '../../../../components';
import Menu from './components/Menu';

export interface Props {}

type State = {};
type ComposedProps = Props;

export default class Header extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <header className={styles.Header}>
        <Grid>
          <Grid.ScreenWidth>
            <div className={styles.HeaderContent}>
              <div className={styles.LogoContainer}>
                <Logo />
              </div>
              <div className={styles.HamburgerMenuWrapper}>
                <Menu />
              </div>
            </div>
          </Grid.ScreenWidth>
        </Grid>
      </header>
    );
  }
}
