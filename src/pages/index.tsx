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
                    message="Web Development & Design"
                    speed={1000}
                    duration={3000}
                  />
                </p>
                <h1>
                  <ScrambledText
                    message="CRAFTER STUDIO"
                    speed={500}
                    duration={2000}
                  />
                </h1>
              </div>
              <div>
                <AnimatedButton width={160} to="/work" content="Our Process" />
              </div>
            </div>
          </Scroll>
        </Layout>
      </PageWrapper>
    );
  }
}
