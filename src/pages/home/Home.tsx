import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import LazyLoad from 'react-lazy-load';
import styles from './Home.module.scss';
import ContentWritingImage from '../../images/content-writing.svg';
import WebDevelopmentImage from '../../images/web-development.svg';
import WebDesignImage from '../../images/web-design.svg';
import SeoImage from '../../images/seo.svg';

import {
  Text,
  Page,
  ScrambledText,
  Grid,
  Theme,
  Link,
  Scroll,
  Decor,
} from '../../components';
import {nodeFromEdges, classNames} from '../../components/utils';

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
        featuredPost,
        recentPosts,
      },
    } = this.props;
    const featuredPostData = nodeFromEdges(featuredPost.edges);
    const recentPostsData = nodeFromEdges(recentPosts.edges);

    const featuredBlogPost = featuredPostData.map((item, index) => {
      return (
        <Link className={styles.Big} key={index} to={`/blog/${item.slug}`}>
          <LazyLoad height="100%" offsetVertical={1000}>
            <img
              src={item.featured_media.source_url}
              className={styles.BlogImage}
            />
          </LazyLoad>
        </Link>
      );
    });

    const recentBlogPosts = recentPostsData.map((item, index) => (
      <Link key={index} to={`/blog/${item.slug}`}>
        <LazyLoad height="100%" offsetVertical={1000}>
          <img
            src={item.featured_media.source_url}
            className={styles.BlogImage}
          />
        </LazyLoad>
      </Link>
    ));

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
                        product's best foot forward in the digital space.
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
                        <Link
                          to="/work/panasonic-prestige"
                          className={styles.A}
                        >
                          <div className={styles.ImageOverlay}>
                            <div>
                              <div className={styles.WorkTitle}>
                                <Text tag="h4" size="small" uppercase>
                                  Panasonic Prestige
                                </Text>
                              </div>
                              <Decor.Line />
                              <div className={styles.WorkDescription}>
                                <Text>
                                  A microsite to promote the luxury personal
                                  massage chair.
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            fluid={placeholder_1}
                            className={styles.GatsbyImage}
                          />
                        </Link>
                        <Link to="/work" className={styles.B}>
                          <div className={styles.ImageOverlay}>
                            <div>
                              <Text tag="h5" size="small" uppercase>
                                View Projects
                              </Text>
                            </div>
                          </div>
                          <Img
                            fluid={placeholder_4}
                            className={styles.GatsbyImage}
                          />
                        </Link>
                        <Link to="/work" className={styles.C}>
                          <div className={styles.ImageOverlay}>
                            <div>
                              <Text tag="h5" size="small" uppercase>
                                View Projects
                              </Text>
                            </div>
                          </div>
                          <Img
                            fluid={placeholder_3}
                            className={styles.GatsbyImage}
                          />
                        </Link>
                        <Link to="/work/dyson-supersonic" className={styles.D}>
                          <div className={styles.ImageOverlay}>
                            <div>
                              <div className={styles.WorkTitle}>
                                <Text tag="h4" size="small" uppercase>
                                  Dyson Supersonic
                                </Text>
                              </div>
                              <Decor.Line />
                              <div className={styles.WorkDescription}>
                                <Text>
                                  A microsite to promote Dyson's luxury
                                  hairdryer to a new Asian demographic during
                                  Chinese New Year.
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            fluid={placeholder_2}
                            className={styles.GatsbyImage}
                          />
                        </Link>
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
          <Theme bgColor="var(--color-dark-grey)">
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
                            <img
                              className={styles.ServiceImage}
                              src={ContentWritingImage}
                            />
                            <Text tag="h4" size="small" uppercase>
                              Content Writing
                            </Text>
                            <Text hyphenated size="small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Donec odio. Quisque volutpat
                              mattis eros. Nullam malesuada erat ut turpis.
                            </Text>
                          </div>
                          <div>
                            <img
                              className={styles.ServiceImage}
                              src={WebDevelopmentImage}
                            />
                            <Text tag="h4" size="small" uppercase>
                              Web Development
                            </Text>
                            <Text hyphenated size="small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Donec odio. Quisque volutpat
                              mattis eros. Nullam malesuada erat ut turpis.
                            </Text>
                          </div>
                          <div>
                            <img
                              className={styles.ServiceImage}
                              src={WebDesignImage}
                            />
                            <Text tag="h4" size="small" uppercase>
                              Web Design
                            </Text>
                            <Text hyphenated size="small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Donec odio. Quisque volutpat
                              mattis eros. Nullam malesuada erat ut turpis.
                            </Text>
                          </div>
                          <div>
                            <img
                              className={styles.ServiceImage}
                              src={SeoImage}
                            />
                            <Text tag="h4" size="small" uppercase>
                              SEO
                            </Text>
                            <Text hyphenated size="small">
                              Lorem ipsum dolor sit amet, consectetuer
                              adipiscing elit. Donec odio. Quisque volutpat
                              mattis eros. Nullam malesuada erat ut turpis.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </Scroll.LoadAnimation>
                  </Scroll>
                </Grid.ScreenWidth>
              </Grid>
            </Page.Section>
          </Theme>
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
                        {featuredBlogPost}
                        {recentBlogPosts}
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
        placeholder_1: file(relativePath: {eq: "panasonic.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 640) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholder_2: file(relativePath: {eq: "dyson.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 640) {
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
        placeholder_4: file(relativePath: {eq: "santa_stamp.PNG"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholder_5: file(relativePath: {eq: "web-development.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        featuredPost: allWordpressPost(
          filter: {tags: {elemMatch: {name: {eq: "featured"}}}}
        ) {
          edges {
            node {
              id
              slug
              featured_media {
                source_url
              }
            }
          }
        }
        recentPosts: allWordpressPost(
          limit: 4
          filter: {tags: {elemMatch: {name: {eq: "new"}}}}
        ) {
          edges {
            node {
              id
              slug
              featured_media {
                source_url
              }
            }
          }
        }
      }
    `}
    render={(data) => <Home data={data} />}
  />
);
