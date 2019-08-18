import React from 'react';

import {Page} from '../../components';

interface Props {}

type State = {};
type ComposedProps = Props;

export default class IndexPage extends React.PureComponent<
  ComposedProps,
  State
> {
  render() {
    return (
      <Page
        title="Title"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <h1>This is the about page</h1>
      </Page>
    );
  }
}
