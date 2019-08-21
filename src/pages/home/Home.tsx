import React from 'react';

import styles from './Home.module.scss';
import {Decor, Text, Page, ScrambledText, Grid, Theme} from '../../components';

import casper from '../../images/casper_full.png';

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
                  <h1>About.</h1>
                </div>
                <div className={styles.PageSection}>
                  <div style={{flex: '1', marginRight: '20px'}}>
                    <Text hyphenated>
                      Paragraphs Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                      Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                      viverra non, semper suscipit, posuere a, pede.
                    </Text>
                    <Text hyphenated>
                      Paragraphs Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                      Nullam malesuada erat ut turpis.
                    </Text>
                  </div>
                  <div className={styles.ImageContainer} style={{flex: '1'}}>
                    <img style={{width: '100%'}} src={casper} />
                  </div>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </div>
          <Page.Section>
            <Grid>
              <Text size="h1" align="center">
                Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis.
              </Text>
            </Grid>
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}
