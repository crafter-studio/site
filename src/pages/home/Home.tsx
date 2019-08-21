import React from 'react';

import styles from './Home.module.scss';
import {Decor, Text, Page, ScrambledText, Grid, Theme} from '../../components';

interface Props {}

type State = {};
type ComposedProps = Props;

export default class Home extends React.PureComponent<ComposedProps, State> {
  state: State = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Layout>
          <div className={styles.HeroSection}>
            <div className={styles.Hypnotize}>
              <h1>
                <ScrambledText
                  message="CRAFTER STUDIO"
                  speed={500}
                  duration={1500}
                />
              </h1>
            </div>
            <div className={styles.Tagline}>
              <Grid>
                <Text align="center">Web Design & Development</Text>
              </Grid>
            </div>
          </div>
          <div />
          <div className={styles.About}>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.SectionHeading}>
                  <h1>who?</h1>
                </div>
                <div className={styles.PageSection}>
                  <Page.Section>
                    <div style={{height: '600px'}} />
                  </Page.Section>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </div>
          <Page.Section>
            <Grid>
              <Text size="h1" align="center">
                We deconstruct preconceived ideas to better shape concepts and
                push boundaries; that's our purpose, the essence of our culture.
              </Text>
            </Grid>
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}
