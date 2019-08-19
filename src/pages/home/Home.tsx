import React from 'react';

import styles from './Home.module.scss';
import {Decor, Text, Page, ScrambledText, Grid} from '../../components';

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
              <h1
                style={{
                  fontFamily: 'Muli',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                }}
              >
                <ScrambledText
                  message="CRAFTER STUDIO"
                  speed={500}
                  duration={1500}
                />
              </h1>
            </div>
            <div className={styles.Tagline}>
              <Text>Web Development & Design</Text>
            </div>
          </div>
          <div />
          <Decor.Triangle color="var(--color-light-grey)" />
          <Page.Section>
            <Grid>
              <Text size="h1" align="center">
                We deconstruct preconceived ideas to better shape concepts and
                push boundaries; that's our purpose, the essence of our culture.
              </Text>
            </Grid>
          </Page.Section>
          <Page.Section>
            <Decor.Noise />
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}
