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
          <Theme darkMode>
            <Page.Section bgColor="var(--color-black)">
              <Grid>
                <Text size="h1" color="var(--color-light-grey)">
                  You deserve quality. We Are a small team of web-experts that
                  create product-centered microsites for brands targeting a new
                  market.
                </Text>
              </Grid>
            </Page.Section>
          </Theme>
          <Page.Section>
            <Grid>
              <Text size="h1" align="center">
                We deconstruct preconceived ideas to better shape concepts and
                push boundaries; that's our purpose, the essence of our culture.
              </Text>
            </Grid>
          </Page.Section>
          <Theme darkMode>
            <Page.Section>
              <div
                style={{
                  height: '500px',
                  width: '800px',
                  margin: 'auto',
                  textAlign: 'center',
                  paddingTop: '200px',
                }}
              />
              <Decor.Noise />
            </Page.Section>
          </Theme>
        </Page.Layout>
      </Page>
    );
  }
}
