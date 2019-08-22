import React from 'react';

import styles from './Home.module.scss';
import {
  Text,
  Page,
  ScrambledText,
  Grid,
  Button,
  AnimatedButton,
  Link,
} from '../../components';

import placeholder from '../../images/casper.png';
import placeholder_1 from '../../images/placeholder_1.jpg';
import placeholder_2 from '../../images/placeholder_2.jpg';
import placeholder_3 from '../../images/placeholder_3.jpg';
import placeholder_4 from '../../images/placeholder_4.jpg';
import placeholder_5 from '../../images/placeholder_5.jpg';

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
          <div className={styles.AboutSection}>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.Heading}>
                  <h1>About.</h1>
                </div>
                <div className={styles.Content}>
                  <div className={styles.Image}>
                    <img src={placeholder} />
                  </div>
                  <div className={styles.Text}>
                    <div>
                      <Text tag="h3" size="h2">
                        A House Of Creatives
                      </Text>
                      <Text hyphenated>
                        We are a house of creativity who operate in and around
                        product and communication. Small enough for undivided
                        attention. Big enough to offer services in all
                        disciplines. Sure, this might be a slightly
                        over-simplified summary of what we do, but hey, who
                        likes to read long descriptions anyways? So let’s cut
                        the mustard and jump straight to the pudding. Let the
                        scrolling commence.
                      </Text>
                      <Link to="/about">Read More</Link>
                    </div>
                  </div>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </div>
          <Page.Section bgColor="var(--color-light-grey)">
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.WorkSection}>
                  <div className={styles.Heading}>
                    <h1>Work.</h1>
                  </div>
                  <div className={styles.WorkGrid}>
                    <div className={styles.Big}>
                      <img src={placeholder_1} />
                    </div>
                    <div className={styles.B}>
                      <img src={placeholder_5} />
                    </div>
                    <div className={styles.C}>
                      <img src={placeholder_2} />
                    </div>
                    <div className={styles.D}>
                      <img src={placeholder_4} />
                    </div>
                    <div className={styles.E}>
                      <img src={placeholder_3} />
                    </div>
                  </div>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </Page.Section>
          <Page.Section bgColor="var(--color-dark-grey)">
            <Grid>
              <Text size="h1" align="center" color="var(--color-heading)">
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
