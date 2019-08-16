import React from 'react';

import styles from './Index.module.scss';
import {
  Decor,
  Text,
  PageWrapper,
  Layout,
  ScrambledText,
  Scroll,
  Grid,
} from '../components';

interface Props {}

type State = {};
type ComposedProps = Props;

export default class IndexPage extends React.PureComponent<
  ComposedProps,
  State
> {
  state: State = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageWrapper
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Layout>
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
              <Text>Web Development & Design</Text>
            </div>
          </div>
          <div />
          <Decor.Triangle
            color="var(--color-light-grey)"
            background="var(--color-dark-grey)"
          />
          <div
            style={{
              height: '100vh',
              paddingTop: '80px',
              paddingBottom: '80px',
              backgroundColor: 'var(--color-dark-grey)',
            }}
          >
            <Grid>
              <Grid.ScreenWidth>
                <Text tag="h1" uppercase>
                  We Build Websites
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Nullam malesuada erat ut turpis.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Nullam malesuada erat ut turpis.
                </Text>
                <Text tag="h2" uppercase>
                  We Build Websites
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Nullam malesuada erat ut turpis.
                </Text>
              </Grid.ScreenWidth>
            </Grid>
          </div>
          <Decor.Triangle
            color="var(--color-dark-grey)"
            background="var(--color-light-grey)"
          />
          <div
            style={{
              height: '100vh',
              backgroundColor: 'var(--color-light-grey)',
            }}
          >
            <div style={{paddingTop: '80px'}} />
            <Scroll bottomOffset="50%">
              <Scroll.LoadContent>
                <Decor.DotsGrid width={105} height={105} />
              </Scroll.LoadContent>
            </Scroll>
          </div>
          <div style={{height: '100vh'}} />
        </Layout>
      </PageWrapper>
    );
  }
}
