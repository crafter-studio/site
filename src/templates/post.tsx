import React from 'react';
import {graphql} from 'gatsby';

import {Page, Article} from '../components';

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

class Blog extends React.PureComponent<ComposedProps, State> {
  render() {
    const html = this.props.data.allWordpressPost.edges[0].node.content;
    return (
      <Page
        title="Blog"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Layout>
          <div style={{marginTop: '80px', marginBottom: '80px'}}>
            <Article html={html} />
          </div>
        </Page.Layout>
      </Page>
    );
  }
}

export default ({data}) => <Blog data={data} />;
