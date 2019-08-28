import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import styles from './Work.module.scss';
import {Page} from '../../components';

import {nodeFromEdges} from '../../components/utils';

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

class Work extends React.PureComponent<ComposedProps, State> {
  state: State = {};
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    const projects = nodeFromEdges(data.allWordpressWpProject.edges);
    return (
      <Page
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Background />
        <Page.Layout>
          <Page.Section>
            {projects.map((item, key) => (
              <h1 key={key}>{`${item.title}`}</h1>
            ))}
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpProject {
          edges {
            node {
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
        house: file(relativePath: {eq: "house.png"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => <Work data={data} />}
  />
);
