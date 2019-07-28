import React from 'react';

import styles from './Index.module.scss';
import {PageWrapper, Layout, Text, Grid, Scroll} from '../components';

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
          <Scroll>
            <div className={styles.HeroContainer}>
              <Grid>
                <Grid.ScreenWidth>
                  <Text tag="h1">
                    <div>The best web</div>
                    <div>studio on</div>
                    <div>planet Earth.</div>
                  </Text>
                </Grid.ScreenWidth>
              </Grid>
            </div>
          </Scroll>
          <Scroll darkMode>
            <div className={styles.FirstSection}>
              <div className={styles.Hypnotize}>
                <h1>CRAFTER STUDIO</h1>
              </div>
            </div>
          </Scroll>
          <Scroll>
            <div style={{height: '1000px', background: 'grey'}} />
          </Scroll>
          <Scroll darkMode>
            <div style={{height: '1000px', background: 'yellow'}} />
          </Scroll>
        </Layout>
      </PageWrapper>
    );
  }
}
