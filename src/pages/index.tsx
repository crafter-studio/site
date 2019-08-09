import React from 'react';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

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
          <Scroll darkMode>
            <div className={styles.FirstSection}>
              <div className={styles.Hypnotize}>
                <h1>CRAFTER STUDIO</h1>
              </div>
            </div>
          </Scroll>
        </Layout>
      </PageWrapper>
    );
  }
}
