import React from 'react';

import styles from './Index.module.scss';
import {
  AnimatedButton,
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
              <div className={styles.Hypnotize}>
                <p style={{marginBottom: '10px'}}>
                  <ScrambledText
                    message="Microsites, Shopify, Web Design & Development"
                    speed={1000}
                    duration={4500}
                  />
                </p>
                <h1>
                  <ScrambledText
                    message="CRAFTER STUDIO"
                    speed={500}
                    duration={3000}
                  />
                </h1>
              </div>
              <div>
                <AnimatedButton to="/work" content="Our Work" />
                <AnimatedButton to="/work" content="Our Process" />
              </div>
            </div>
          </Scroll>
        </Layout>
      </PageWrapper>
    );
  }
}
