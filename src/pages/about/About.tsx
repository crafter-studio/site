import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import styles from './About.module.scss';
import {Text, Page, Decor, Theme, ScrambledText} from '../../components';

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

class About extends React.PureComponent<ComposedProps, State> {
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
          <Theme darkMode>
            <div className={styles.PageBanner}>
              <Decor.Noise />
              <h1>
                <ScrambledText message="About" speed={300} duration={2000} />
              </h1>
            </div>
          </Theme>
          <Page.Section>
            <Text>This is my page</Text>
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
    render={(data) => <About data={data} />}
  />
);
