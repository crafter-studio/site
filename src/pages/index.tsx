import React from 'react';

import styles from './Index.module.scss';
import {
  Decor,
  Text,
  PageWrapper,
  Layout,
  ScrambledText,
  Scroll,
  Theme,
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
              backgroundColor: 'var(--color-dark-grey)',
            }}
          />
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
