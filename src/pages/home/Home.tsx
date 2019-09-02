import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

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
          {/* ================================================================================================================= */}
          {/* HERO SECTION */}
          {/* ================================================================================================================= */}
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
                <Text align="center" size="small" italic>
                  Quality products deserve exceptional websites.
                </Text>
              </Grid>
            </div>
          </div>
          {/* ================================================================================================================= */}
          {/* ABOUT SECTION */}
          {/* ================================================================================================================= */}
          <div className={styles.AboutSection}>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.Heading}>
                  <h1>WELCOME.</h1>
                </div>
                <div className={styles.Content}>
                  <div className={styles.Image}>
                    <Img className={styles.ImageItem} fluid={placeholder_1} />
                  </div>
                  <div className={styles.Text}>
                    <div>
                      <Text tag="h3">
                        We Are A Product-Focused Web Development Team.
                      </Text>
                      <Text>
                        Crafter Studio is a small, agile team of 7 digital
                        experts specialized in design, development, branding,
                        and SEO. We extend departments from Fortune 500
                        companies and growing startups by putting their
                        product's best foot forward in the digtal space.
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
          {/* ================================================================================================================= */}
          {/* ABOUT TEXT */}
          {/* ================================================================================================================= */}
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
          {/* ================================================================================================================= */}
          {/* WORK SECTION */}
          {/* ================================================================================================================= */}
          <Page.Section>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.WorkSection}>
                  <div className={styles.Heading}>
                    <h1 style={{color: 'var(--color-heading-themed)'}}>
                      Work.
                    </h1>
                  </div>
                  <Scroll>
                    <Scroll.LoadAnimation propogateAnimation>
                      <div className={styles.WorkGrid}>
                        <Img fluid={placeholder_1} className={styles.A} />
                        <Img fluid={placeholder_5} className={styles.B} />
                        <Img fluid={placeholder_1} className={styles.C} />
                        <Img fluid={placeholder_2} className={styles.D} />
                        <Img fluid={placeholder_3} className={styles.E} />
                        <Img fluid={placeholder_5} className={styles.F} />
                        <Img fluid={placeholder_2} className={styles.G} />
                        <Img fluid={placeholder_4} className={styles.H} />
                      </div>
                    </Scroll.LoadAnimation>
                  </Scroll>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </Page.Section>
          {/* ================================================================================================================= */}
          {/* SERVICES SECTION */}
          {/* ================================================================================================================= */}
          <Page.Section>
            <Grid>
              <Grid.ScreenWidth>
                <Scroll>
                  <Scroll.LoadAnimation propogateAnimation>
                    <div className={styles.ServiceSectionContainer}>
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
                            Content is king. We write with your brand in mind
                            and ensures SEO is also somewhat in there. Your tone
                            is our baby yo.
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
                            We build websites. It's just what we are good at,
                            and we do it freggin well yo. Just take a look at
                            our detailed checklist.
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
                            We create functional, timeless, designs that speaks
                            like your brand and ensures your first impressions
                            are the best ones.
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
                            Your site will be quite up there when people search
                            your company name because we make sure you put your
                            best foot forward.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Scroll.LoadAnimation>
                </Scroll>
              </Grid.ScreenWidth>
            </Grid>
          </Page.Section>
          {/* ================================================================================================================= */}
          {/* BLOG SECTION */}
          {/* ================================================================================================================= */}
          <Page.Section>
            <Grid>
              <Grid.ScreenWidth>
                <Scroll>
                  <Scroll.LoadAnimation propogateAnimation>
                    <div className={styles.BlogSection}>
                      <div className={styles.Heading}>
                        <h1 style={{color: 'var(--color-heading-themed)'}}>
                          Blog.
                        </h1>
                      </div>
                      <div className={styles.BlogGrid}>
                        <Img fluid={placeholder_1} className={styles.Big} />
                        <Img fluid={placeholder_5} className={styles.B} />
                        <Img fluid={placeholder_2} className={styles.C} />
                        <Img fluid={placeholder_4} className={styles.D} />
                        <Img fluid={placeholder_3} className={styles.E} />
                      </div>
                    </div>
                  </Scroll.LoadAnimation>
                </Scroll>
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
        placeholder: file(relativePath: {eq: "placeholder.jpg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholder_1: file(relativePath: {eq: "placeholder_1.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholder_2: file(relativePath: {eq: "placeholder_2.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholder_3: file(relativePath: {eq: "placeholder_3.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholder_4: file(relativePath: {eq: "placeholder_4.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholder_5: file(relativePath: {eq: "placeholder_5.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => <Home data={data} />}
  />
);
