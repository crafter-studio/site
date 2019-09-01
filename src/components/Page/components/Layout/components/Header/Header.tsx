import React from 'react';
import {Link} from 'gatsby';
import {connect} from 'react-redux';
import {ReduxState} from '../../../../../../redux/reducers';

import styles from './Header.module.scss';
import Logo from './assets/crafter-studio-logo.svg';
import {Grid} from '../../../../../../components';
import {classNames} from '../../../../../utils/classNames';
import {Menu, Navigation} from './components';

export interface Props {}

type State = {};
type ComposedProps = ReduxState & Props;

class Header extends React.PureComponent<ComposedProps, State> {
  render() {
    const {darkModeActive} = this.props;

    const logoClass = classNames(
      styles.LogoContainer,
      darkModeActive && styles.DarkModeActive,
    );

    return (
      <>
        <header className={styles.Header}>
          <Grid>
            <Grid.ScreenWidth>
              <div className={styles.HeaderContent}>
                <Link to="/">
                  <div className={logoClass}>
                    <Logo />
                  </div>
                </Link>
                <div className={styles.CompanyName}>
                  {/* <Text size="h4" tag="h2" align="center" uppercase>
                  Crafter
                </Text> */}
                </div>
                <div className={styles.HamburgerMenuWrapper}>
                  <Menu />
                </div>
              </div>
            </Grid.ScreenWidth>
          </Grid>
        </header>
        <Navigation />
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    toggleDarkMode: {darkModeActive},
  } = state;
  return {darkModeActive};
}

export default connect(
  mapStateToProps,
  null,
)(Header);
