import React from 'react';

import styles from './Index.module.scss';
import {
  Decor,
  Text,
  PageWrapper,
  Layout,
  ScrambledText,
  Grid,
} from '../components';

import placeholder from '../images/placeholder.jpg';
import noise from '../images/noise.jpg';
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
          <div
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              height: '300px',
              backgroundColor: 'transparent',
            }}
          />
          <div
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              backgroundColor: 'var(--color-light-grey)',
            }}
          >
            <div style={{paddingTop: '80px', paddingBottom: '80px'}}>
              <Grid>
                <Text size="h1" align="center">
                  We deconstruct preconceived ideas to better shape concepts and
                  push boundaries; that's our purpose, the essence of our
                  culture.
                </Text>
              </Grid>
            </div>
          </div>
          <div
            style={{
              height: '300px',
              position: 'relative',
              paddingTop: '80px',
              paddingBottom: '80px',
            }}
          >
            <Decor.Noise />
          </div>
        </Layout>
      </PageWrapper>
    );
  }
}
