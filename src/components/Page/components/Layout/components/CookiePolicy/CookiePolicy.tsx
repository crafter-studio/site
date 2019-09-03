import React from 'react';
import styles from './CookiePolicy.module.scss';

import {Text, Button, Grid, Link} from '../../../../../../components';
import {classNames} from '../../../../../../components/utils';

interface Props {}
interface State {
  cookieAccepted: boolean;
}

type ComposedProps = Props;

export default class CookiePolicy extends React.PureComponent<
  ComposedProps,
  State
> {
  state: State = {
    cookieAccepted: false,
  };

  constructor(props) {
    super(props);
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
  }

  handleAcceptClick() {
    this.setState({cookieAccepted: true});
    localStorage.setItem('cookieAccepted', 'true');
  }

  render() {
    const cookieAccepted =
      localStorage.getItem('cookieAccepted') === 'true' ||
      this.state.cookieAccepted;

    const className = classNames(
      styles.CookiePolicy,
      cookieAccepted && styles.CookieAccepted,
    );

    return (
      <div className={className}>
        <Grid>
          <Grid.ScreenWidth>
            <div className={styles.ContentContainer}>
              <div className={styles.Content}>
                <Text hyphenated italic size="small">
                  We use cookies to collect and analyze site performance and
                  usage. Please visit our <Link to="/22">Cookie Policy</Link> to
                  find out more.
                </Text>
              </div>
              <div
                onClick={this.handleAcceptClick}
                className={styles.CookieAccept}
              >
                <Button
                  onClick={this.handleAcceptClick}
                  fullWidth
                  value="Accept"
                />
              </div>
            </div>
          </Grid.ScreenWidth>
        </Grid>
      </div>
    );
  }
}
