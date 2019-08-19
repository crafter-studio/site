import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';

import {Page, Grid, Text} from '../../components';

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          content
        }
      }
    }
  }
`;

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

const options = {
  transform,
};

function transform(node, index) {
  // do not render any <span> tags

  if (node.type === 'tag' && node.name === 'p') {
    return <Text>{processNodes(node.children, transform)}</Text>;
  }

  if (node.type === 'tag' && node.name === 'figure') {
    return (
      <Grid.ScreenWidth>
        <div style={{marginTop: '40px', marginBottom: '40px'}}>
          {processNodes(node.children, transform)}
        </div>
      </Grid.ScreenWidth>
    );
  }
}

class Blog extends React.PureComponent<ComposedProps, State> {
  render() {
    const html = this.props.data.allWordpressPost.edges[0].node.content;
    const markup = ReactHtmlParser(html, options);
    return (
      <Page
        title="Blog"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Layout>
          <div style={{height: '200px'}} />
          <Grid>{markup}</Grid>
        </Page.Layout>
      </Page>
    );
  }
}

export default () => (
  <StaticQuery query={query} render={(data) => <Blog data={data} />} />
);
