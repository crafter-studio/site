import React from 'react';

import styles from './Index.module.scss';
import {
  Decor,
  Text,
  PageWrapper,
  Layout,
  ScrambledText,
  Scroll,
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
          <Decor.TriangleTop
            color="var(--color-light-grey)"
            background="var(--color-dark-grey)"
          />
          <div
            style={{height: '100vh', backgroundColor: 'var(--color-dark-grey)'}}
          />
          <Scroll>
            <Decor.DotsGrid width={75} height={75} />
          </Scroll>
          <div style={{height: '100vh'}} />
        </Layout>
      </PageWrapper>
    );
  }
}
