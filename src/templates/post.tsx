import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import ReactHtmlParser, {processNodes} from 'react-html-parser';

import {Page, Grid, Text} from '../components';

const options = {
  transform,
};

export const query = graphql`
  query($wordpress_id: Int!) {
    allWordpressPost(filter: {wordpress_id: {eq: $wordpress_id}}) {
      edges {
        node {
          id
          content
          path
          slug
          template
          categories {
            name
          }
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
          <div style={{marginTop: '80px', marginBottom: '80px'}}>
            <Grid>{markup}</Grid>
          </div>
        </Page.Layout>
      </Page>
    );
  }
}

export default ({data}) => <Blog data={data} />;
