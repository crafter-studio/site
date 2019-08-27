import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import styles from './Work.module.scss';
import {Page} from '../../components';

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
    return (
      <Page
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Background />
        <Page.Layout>
          <Page.Section>
            <h1>Hello</h1>
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
