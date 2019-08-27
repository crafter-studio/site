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
          <Theme darkMode bgColor="black">
            <div className={styles.PageBanner}>
              <div style={{zIndex: 1}}>
                <Decor.Noise />
              </div>
              <div className={styles.PageBannerContent}>
                <Text tag="h1" uppercase>
                  The mesh of talents, our creative core.
                </Text>
                <Text color="var(--color-text-neg)" hyphenated>
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
              <Text color="var(--color-heading-themed)" tag="h1">
                We Make Websites.
              </Text>
              <Text color="var(--color-text-themed)">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis.
              </Text>
              <Text color="var(--color-text-themed)">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis.
              </Text>
              <Text color="var(--color-heading-themed)" tag="h2">
                Some Text Here.
              </Text>
              <Text color="var(--color-text-themed)">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis.
              </Text>
              <Text color="var(--color-text-themed)">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra
                non, semper suscipit, posuere a, pede. Donec nec justo eget
                felis facilisis fermentum. Aliquam porttitor mauris sit amet
                orci. Aenean dignissim pellentesque felis.
              </Text>
              <Text color="var(--color-heading-themed)" tag="h2">
                Some Text Here.
              </Text>
              <Text color="var(--color-text-themed)">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis.
              </Text>
              <Text color="var(--color-text-themed)">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra
                non, semper suscipit, posuere a, pede. Donec nec justo eget
                felis facilisis fermentum. Aliquam porttitor mauris sit amet
                orci. Aenean dignissim pellentesque felis.
              </Text>
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
