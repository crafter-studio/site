import React from 'react';
import {graphql} from 'gatsby';
import striptags from 'striptags';

import {Page, Article} from '../components';

export const query = graphql`
  query($wordpress_id: Int!) {
    allWordpressWpProject(filter: {wordpress_id: {eq: $wordpress_id}}) {
      edges {
        node {
          id
          slug
          title
          excerpt
          acf {
            test_label_1
            test_label_2
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

class Work extends React.PureComponent<ComposedProps, State> {
  render() {
    const project = this.props.data.allWordpressWpProject.edges[0].node;
    const {
      title,
      excerpt,
      acf: {test_label_1, test_label_2},
    } = project;
    const description = striptags(excerpt);
    return (
      <Page
        title={`${title}`}
        description={`${description}`}
        keywords={['keyword', 'things']}
        disableSiteName
      >
        <Page.Layout>
          <h1>{title}</h1>
          <p>test_label_1: {test_label_1}</p>
          <p>test_label_2: {test_label_2}</p>
        </Page.Layout>
      </Page>
    );
  }
}

export default ({data}) => <Work data={data} />;
