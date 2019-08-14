import React from 'react';

import styles from './Index.module.scss';
import {
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
  render() {
    return (
      <PageWrapper
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Layout>
          <Theme darkMode>
            <div className={styles.HeroSection}>
              <div className={styles.Hypnotize}>
                <h1>
                  <ScrambledText
                    message="CRAFTER STUDIO"
                    speed={500}
                    duration={2000}
                  />
                </h1>
              </div>
              <div className={styles.Tagline}>
                <Text>Web Development & Design</Text>
              </div>
              {/* <div className={styles.QuickLinks}>
                <AnimatedButton width={160} to="/about" content="About Us" />
                <AnimatedButton width={140} to="/work" content="Our Work" />>
              </div> */}
            </div>
          </Theme>
          <Theme darkMode={false}>
            <div
              style={{marginTop: '420px', height: '100vh', background: 'white'}}
            />
          </Theme>
          <Theme darkMode>
            <div style={{height: '100vh', background: 'black'}} />
          </Theme>
        </Layout>
      </PageWrapper>
    );
  }
}
