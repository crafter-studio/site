import React from 'react';

import styles from './Index.module.scss';
import {PageWrapper, Layout, Text, Grid} from '../components';

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
        </Layout>
      </PageWrapper>
    );
  }
}
