import React from 'react';

import {PageWrapper, Layout, Content} from '../components';

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
        title="Homepage"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Layout>
          <Content>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede. Donec nec justo eget felis facilisis fermentum.
              Aliquam porttitor mauris sit amet orci. Aenean dignissim
              pellentesque felis.
            </p>
            <Content.FullWidth>FULL WIDTH CONTENT GOES HERE</Content.FullWidth>
            <Content.ScreenWidth>
              Screen WIDTH CONTENT GOES HERE
            </Content.ScreenWidth>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede. Donec nec justo eget felis facilisis fermentum.
              Aliquam porttitor mauris sit amet orci. Aenean dignissim
              pellentesque felis.
            </p>
          </Content>
        </Layout>
      </PageWrapper>
    );
  }
}
