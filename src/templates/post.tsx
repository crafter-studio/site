import React from 'react';
import {graphql} from 'gatsby';
import striptags from 'striptags';

import {Page, Article} from '../components';

export const query = graphql`
  query($wordpress_id: Int!) {
    allWordpressPost(filter: {wordpress_id: {eq: $wordpress_id}}) {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date
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
    const post = this.props.data.allWordpressPost.edges[0].node;
    const {title, date, excerpt, content} = post;
    const description = striptags(excerpt);
    return (
      <Page
        title={`${title}`}
        description={`${description}`}
        keywords={['keyword', 'things']}
        disableSiteName
      >
        <Page.Layout>
          <div style={{marginTop: '80px', marginBottom: '80px'}}>
            <Article title={title} date={date} html={content} />
          </div>
        </Page.Layout>
      </Page>
    );
  }
}

export default ({data}) => <Blog data={data} />;
