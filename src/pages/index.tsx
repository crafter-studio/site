import React from 'react';

import styles from './Index.module.scss';
import {PageWrapper, Layout, Text, Content} from '../components';

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
            <Content>
              <Content.ScreenWidth>
                <Text tag="h1">The best web studio on planet Earth.</Text>
              </Content.ScreenWidth>
            </Content>
          </div>
        </Layout>
      </PageWrapper>
    );
  }
}
