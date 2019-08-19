import React from 'react';

import {Page} from '../../components';

interface Props {}

type State = {};
type ComposedProps = Props;

export default class Blog extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <Page
        title="Blog"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Layout>
          <h1>This is the blog page</h1>
        </Page.Layout>
      </Page>
    );
  }
}
