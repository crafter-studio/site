import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import styles from './About.module.scss';
import {
  Text,
  Page,
  Decor,
  Theme,
  ScrambledText,
  Article,
  Grid,
} from '../../components';

import placeholder from '../../images/placeholder_2.jpg';

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
              <div style={{zIndex: 1}}>
                <Decor.Noise />
              </div>
              <div className={styles.PageBannerContent}>
                <Text tag="h1" align="center" uppercase>
                  A beautiful mesh of talents.
                </Text>
                <Text align="center" color="var(--color-text-neg)" hyphenated>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                  Aenean dignissim pellentesque felis.
                </Text>
              </div>
            </div>
          </Theme>
          <Page.Section>
            <Grid>
              <Text tag="h1">We Make Websites.</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis.
              </Text>
              <img
                style={{objectFit: 'cover', width: '100%', height: '300px'}}
                src={placeholder}
              />
            </Grid>
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
