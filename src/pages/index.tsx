import React from 'react';

import styles from './Index.module.scss';
import {
  AnimatedSquare,
  PageWrapper,
  Layout,
  Background,
  Text,
  Scroll,
  ScrambledText,
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
          <Scroll darkMode>
            <div className={styles.HeroSection}>
              <Background />
              <div className={styles.Hypnotize}>
                <h1>
                  <ScrambledText
                    message="CRAFTER STUDIO"
                    speed={500}
                    duration={3000}
                  />
                </h1>
              </div>
            </div>
          </Scroll>
        </Layout>
      </PageWrapper>
    );
  }
}
