import React from 'react';
import {Waypoint} from 'react-waypoint';

import styles from './Index.module.scss';
import {
  Decor,
  Text,
  PageWrapper,
  Layout,
  Theme,
  ScrambledText,
  AnimatedButton,
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
    const browserWindow = typeof window !== 'undefined' ? window : null;

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
          <Decor.TriangleTop color="#fcfcfc" />
          <div style={{height: '100vh'}} />
          <Theme darkMode />
        </Layout>
      </PageWrapper>
    );
  }
}
