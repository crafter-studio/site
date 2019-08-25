import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import styles from './Home.module.scss';
import {
  Text,
  Page,
  ScrambledText,
  Grid,
  Theme,
  Link,
  Scroll,
} from '../../components';

import placeholder from '../../images/placeholder.jpg';
import placeholder_1 from '../../images/placeholder_1.jpg';
import placeholder_2 from '../../images/placeholder_2.jpg';
import placeholder_3 from '../../images/placeholder_3.jpg';
import placeholder_4 from '../../images/placeholder_4.jpg';
import placeholder_5 from '../../images/placeholder_5.jpg';

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

class Home extends React.PureComponent<ComposedProps, State> {
  state: State = {};
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: {
        house: {
          childImageSharp: {fluid: houseImage},
        },
        placeholder: {
          childImageSharp: {fluid: placeholder},
        },
        placeholder_1: {
          childImageSharp: {fluid: placeholder_1},
        },
        placeholder_2: {
          childImageSharp: {fluid: placeholder_2},
        },
        placeholder_3: {
          childImageSharp: {fluid: placeholder_3},
        },
        placeholder_4: {
          childImageSharp: {fluid: placeholder_4},
        },
        placeholder_5: {
          childImageSharp: {fluid: placeholder_5},
        },
      },
    } = this.props;
    return (
      <Page
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Background />
        <Page.Layout>
          <div className={styles.HeroSection}>
            <div className={styles.Hypnotize}>
              <h1>
                <ScrambledText
                  message="CRAFTER STUDIO"
                  speed={500}
                  duration={1500}
                />
              </h1>
            </div>
            <div className={styles.Tagline}>
              <Grid>
                <Text align="center">Web Design & Development</Text>
              </Grid>
            </div>
          </div>
          <div />
          <div className={styles.AboutSection}>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.Heading}>
                  <h1>Hello.</h1>
                </div>
                <div className={styles.Content}>
                  <div className={styles.Image}>
                    <BackgroundImage
                      className={styles.ImageItem}
                      fluid={houseImage}
                    />
                  </div>
                  <div className={styles.Text}>
                    <div>
                      <Text tag="h3" size="h2">
                        A House Of Creatives
                      </Text>
                      <Text hyphenated>
                        We are a house of creativity who operate in and around
                        product and communication. Small enough for undivided
                        attention. Big enough to offer services in all
                        disciplines. Sure, this might be a slightly
                        over-simplified summary of what we do, but hey, who
                        likes to read long descriptions anyways? So let’s cut
                        the mustard and jump straight to the{' '}
                        <Link to="/pudding">pudding</Link>. Let the scrolling
                        commence.
                      </Text>
                      <Link to="/about" animated>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </div>
          <Theme darkMode bgColor="var(--color-black)">
            <Page.Section>
              <div className={styles.AboutText}>
                <Grid>
                  <Text
                    size="h1"
                    align="center"
                    color="var(--color-heading-themed)"
                  >
                    We deconstruct preconceived ideas to better shape concepts
                    and push boundaries; that's our purpose, the essence of our
                    culture.
                  </Text>
                </Grid>
              </div>
            </Page.Section>
          </Theme>
          <Page.Section>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.WorkSection}>
                  <div className={styles.Heading}>
                    <h1 style={{color: 'var(--color-heading-themed)'}}>
                      Work.
                    </h1>
                  </div>
                  <div className={styles.WorkGrid}>
                    <BackgroundImage
                      fluid={placeholder_1}
                      className={styles.A}
                    />
                    <BackgroundImage
                      fluid={placeholder_5}
                      className={styles.B}
                    />
                    <BackgroundImage
                      fluid={placeholder_1}
                      className={styles.C}
                    />
                    <BackgroundImage
                      fluid={placeholder_2}
                      className={styles.D}
                    />
                    <BackgroundImage
                      fluid={placeholder_3}
                      className={styles.E}
                    />
                    <BackgroundImage
                      fluid={placeholder_5}
                      className={styles.F}
                    />
                    <BackgroundImage
                      fluid={placeholder_2}
                      className={styles.G}
                    />
                    <BackgroundImage
                      fluid={placeholder_4}
                      className={styles.H}
                    />
                  </div>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </Page.Section>
          <Page.Section>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.ServicesSection}>
                  <div className={styles.Heading}>
                    <h1 style={{color: 'var(--color-heading-themed)'}}>
                      Services.
                    </h1>
                  </div>
                </div>
                <div className={styles.ServicesGrid}>
                  <div>
                    <div>
                      <Img fluid={placeholder} />
                    </div>
                    <Text tag="h4" size="small" uppercase>
                      Content Writing
                    </Text>
                    <Text hyphenated size="small">
                      Content is king. We write with your brand in mind and
                      ensures SEO is also somewhat in there. Your tone is our
                      baby yo.
                    </Text>
                  </div>
                  <div>
                    <div>
                      <Img fluid={placeholder} />
                    </div>
                    <Text tag="h4" size="small" uppercase>
                      Web Development
                    </Text>
                    <Text hyphenated size="small">
                      We build websites. It's just what we are good at, and we
                      do it freggin well yo. Just take a look at our detailed
                      checklist.
                    </Text>
                  </div>
                  <div>
                    <div>
                      <Img fluid={placeholder} />
                    </div>
                    <Text tag="h4" size="small" uppercase>
                      Web Design
                    </Text>
                    <Text hyphenated size="small">
                      We create functional, timeless, designs that speaks like
                      your brand and ensures your first impressions are the best
                      ones.
                    </Text>
                  </div>
                  <div>
                    <div>
                      <Img fluid={placeholder} />
                    </div>
                    <Text tag="h4" size="small" uppercase>
                      SEO
                    </Text>
                    <Text hyphenated size="small">
                      Your site will be quite up there when people search your
                      company name because we make sure you put your best foot
                      forward.
                    </Text>
                  </div>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </Page.Section>
          <Page.Section>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.BlogSection}>
                  <div className={styles.Heading}>
                    <h1 style={{color: 'var(--color-heading-themed)'}}>
                      Blog.
                    </h1>
                  </div>
                  <div className={styles.BlogGrid}>
                    <BackgroundImage
                      className={styles.Big}
                      fluid={placeholder_1}
                    />
                    <BackgroundImage
                      className={styles.B}
                      fluid={placeholder_5}
                    />
                    <BackgroundImage
                      className={styles.C}
                      fluid={placeholder_2}
                    />
                    <BackgroundImage
                      className={styles.D}
                      fluid={placeholder_4}
                    />
                    <BackgroundImage
                      className={styles.E}
                      fluid={placeholder_3}
                    />
                  </div>
                </div>
              </Grid.ScreenWidth>
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
        placeholder: file(relativePath: {eq: "placeholder.jpg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholder_1: file(relativePath: {eq: "placeholder_1.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholder_2: file(relativePath: {eq: "placeholder_2.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholder_3: file(relativePath: {eq: "placeholder_3.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholder_4: file(relativePath: {eq: "placeholder_4.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholder_5: file(relativePath: {eq: "placeholder_5.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <Home data={data} />}
  />
);
