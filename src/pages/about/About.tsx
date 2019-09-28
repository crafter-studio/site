import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import styles from './About.module.scss';
import {Text, Page, Decor, Theme} from '../../components';

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
      <Page title="About">
        <Page.Background />
        <Page.Layout>
          <Theme darkMode>
            <div className={styles.PageBanner}>
              <div style={{zIndex: 1}}>
                <Decor.Noise />
              </div>
              <div className={styles.PageBannerContent}>
                <Text tag="h1" uppercase>
                  A melting pot of talent and creativity
                </Text>
                <Text color="var(--color-text-neg)">
                  Welcome to Crafter Studio. We are a small team of 7 digital
                  experts specialized in creating product-centered websites. Our
                  bread and butter is in creating microsites and Shopify stores
                  trusted by both Fortune 500 companies and startups alike.
                </Text>
              </div>
            </div>
          </Theme>
        </Page.Layout>
      </Page>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        house: file(relativePath: {eq: "panasonic.jpg"}) {
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
