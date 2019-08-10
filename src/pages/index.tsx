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
                    speed={200}
                    duration={1500}
                  />
                </h1>
                <Text size="h5" uppercase>
                  <ScrambledText
                    message="Microsites, Shopify, Web Development & Design"
                    speed={250}
                    duration={3000}
                  />
                </Text>
              </div>
              <div className={styles.Background}>
                <AnimatedSquare />
              </div>
            </div>
          </Scroll>
        </Layout>
      </PageWrapper>
    );
  }
}
