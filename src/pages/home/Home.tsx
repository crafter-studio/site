import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import LazyLoad from 'react-lazy-load';
import striptags from 'striptags';
import ReactHtmlParser from 'react-html-parser';
import {truncate} from 'lodash';
import moment from 'moment';

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
  List,
  Button,
} from '../../components';
import {nodeFromEdges} from '../../components/utils';

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
        panasonicImage: {
          childImageSharp: {fluid: panasonicImage},
        },
        dysonImage: {
          childImageSharp: {fluid: dysonImage},
        },
        vapeImage: {
          childImageSharp: {fluid: vapeImage},
        },
        santaImage: {
          childImageSharp: {fluid: santaImage},
        },
        featuredPost,
        recentPosts,
      },
    } = this.props;
    const featuredPostData = nodeFromEdges(featuredPost.edges);
    const recentPostsData = nodeFromEdges(recentPosts.edges);

    const featuredBlogPost = featuredPostData.map((item, key) => {
      return (
        <div key={key} className={styles.Featured}>
          <div className={styles.FeaturedBlog}>
            <div className={styles.FeaturedBlogImageContainer}>
              <Link to={`/blog/${item.slug}`}>
                <LazyLoad height="100%" offsetVertical={1000}>
                  <img
                    src={item.featured_media.source_url}
                    className={styles.BlogImage}
                  />
                </LazyLoad>
              </Link>
            </div>
            <div className={styles.FeaturedBlogContentContainer}>
              <div className={styles.FeaturedBlogContent}>
                <List unstyled>
                  {item.tags.map((tag, key) => (
                    <List.Item key={key}>
                      <div className={styles.Tag}>
                        <Text tag="h5" size="subscript" uppercase>
                          {tag.name}
                        </Text>
                      </div>
                    </List.Item>
                  ))}
                </List>
                <Text size="small" italic>
                  {moment.utc(item.date).format('LL')}
                </Text>
                <Text.Container>
                  <Text tag="h3">{item.title}</Text>
                  <Text>
                    {truncate(ReactHtmlParser(striptags(item.content)), {
                      length: 280,
                    })}
                  </Text>
                </Text.Container>
              </div>
              <div className={styles.FeaturedPostLink}>
                <Link to={`/blog/${item.slug}`}>
                  <Button value="Read Post" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });

    const recentBlogPosts = recentPostsData.map((item, key) => (
      <div key={key} className={styles.RecentPost}>
        <div className={styles.PostImage}>
          <Link to={`/blog/${item.slug}`}>
            <LazyLoad height="100%" offsetVertical={1000}>
              <img
                src={item.featured_media.source_url}
                className={styles.BlogImage}
              />
            </LazyLoad>
          </Link>
        </div>
        <div className={styles.PostContent}>
          <List unstyled>
            {item.tags.map((tag, key) => (
              <List.Item key={key}>
                <div className={styles.Tag}>
                  <Text tag="h5" size="subscript" uppercase>
                    {tag.name}
                  </Text>
                </div>
              </List.Item>
            ))}
          </List>
          <Text size="small" italic>
            {moment.utc(item.date).format('LL')}
          </Text>
          <Text.Container>
            <Text tag="h3">{item.title}</Text>
            <Text hyphenated>
              {truncate(striptags(item.excerpt), {length: 160})}
            </Text>
            <Link to={`/blog/${item.slug}`}>
              <Button value="Read Post" />
            </Link>
          </Text.Container>
        </div>
      </div>
    ));

    return (
      <Page title="Web Design and Development">
        <Page.Background blob />
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
          <Theme bgColor="var(--color-dark-grey)">
            <div className={styles.AboutSection}>
              <Grid>
                <Grid.ScreenWidth>
                  <div className={styles.Content}>
                    <div className={styles.Image} />
                    <div className={styles.Text}>
                      <Text
                        tag="h4"
                        size="small"
                        uppercase
                        className={styles.AboutTitle}
                      >
                        About
                      </Text>
                      <Text
                        tag="h5"
                        size="h1"
                        color="var(--color-heading-neg)"
                        className={styles.AboutTagline}
                      >
                        A web agency with standards.
                      </Text>
                      <Text color="var(--color-text-neg)" hyphenated>
                        We are a highly-focused team of 7 digital experts
                        specialized in cutting-edge web design and development.
                        We extend departments from Fortune 500 companies and
                        growing startups by developing modern solutions for
                        ambitious brands.
                      </Text>
                    </div>
                  </div>
                  <div className={styles.Content}>
                    <div className={styles.Image} />
                    <div className={styles.Text}>
                      <Text
                        tag="h4"
                        size="small"
                        uppercase
                        className={styles.AboutTitle}
                      >
                        Approach
                      </Text>
                      <Text
                        tag="h5"
                        size="h1"
                        color="var(--color-heading-neg)"
                        className={styles.AboutTagline}
                      >
                        Candid communication. Creative collaboration.
                      </Text>
                      <Text color="var(--color-text-neg)" hyphenated>
                        We take a project from scratch to finish: strategy,
                        creation, execution, to evalution. We cut to the chase
                        by actively listening to you and focusing on solving the
                        problem at hand and bringing the best to the table.
                      </Text>
                    </div>
                  </div>
                </Grid.ScreenWidth>
              </Grid>
            </div>
          </Theme>
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
                    We recognize that exceptional digital experiences sell;
                    that's the future, and that's the way we thrive.
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
                          unstyled
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
                                  A microsite to promote Panasonic's luxury
                                  personal massage chair.
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className={styles.MobileWorkTitle}>
                            <Text tag="h4" size="subscript" uppercase>
                              Panasonic Prestige
                            </Text>
                          </div>
                          <Img
                            fluid={panasonicImage}
                            className={styles.GatsbyImage}
                          />
                        </Link>
                        <Link
                          to="/work/santas-postal-service"
                          className={styles.B}
                        >
                          <div className={styles.ImageOverlay}>
                            <div>
                              <Text tag="h5" size="small" uppercase>
                                View Project
                              </Text>
                            </div>
                          </div>
                          <div className={styles.MobileWorkTitle}>
                            <Text tag="h4" size="subscript" uppercase>
                              Santa's Postal Service
                            </Text>
                          </div>
                          <Img
                            fluid={santaImage}
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
                          <div className={styles.MobileWorkTitle}>
                            <Text tag="h4" size="subscript" uppercase>
                              Transpring Canada
                            </Text>
                          </div>
                          <Img
                            fluid={vapeImage}
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
                                  A microsite to market Dyson's luxury hairdryer
                                  to the Asian demographic during Chinese New
                                  Year.
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className={styles.MobileWorkTitle}>
                            <Text tag="h4" size="subscript" uppercase>
                              Dyson Supersonic
                            </Text>
                          </div>
                          <Img
                            fluid={dysonImage}
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
                              All great web­sites are built upon a foundation of
                              carefully crafted content. We cre­ate con­tent
                              that en­gages your audience — a voice that cares
                              about your prod­ucts, your brand, and search
                              engines.
                            </Text>
                          </div>
                          <div>
                            <img
                              className={styles.ServiceImage}
                              src={WebDevelopmentImage}
                            />
                            <Text tag="h4" size="small" uppercase>
                              Development
                            </Text>
                            <Text hyphenated size="small">
                              We are a highly diverse team of digital experts
                              with experiences ranging from the field of
                              e-commerce to VR/AR. We believe that all ideas are
                              attainable; so let us turn that vision into
                              reality.
                            </Text>
                          </div>
                          <div>
                            <img
                              className={styles.ServiceImage}
                              src={WebDesignImage}
                            />
                            <Text tag="h4" size="small" uppercase>
                              Design
                            </Text>
                            <Text hyphenated size="small">
                              Good, func­tion­al de­signs are often the simplest
                              so­lu­tions to a busi­ness prob­lem. We
                              de­con­struct prob­lems through effective
                              collaboration and gen­er­ate ideas that allows us
                              to build ex­cep­tion­al ex­pe­ri­ences which
                              matches the voice of your brand.
                            </Text>
                          </div>
                          <div>
                            <img
                              className={styles.ServiceImage}
                              src={SeoImage}
                            />
                            <Text tag="h4" size="small" uppercase>
                              Maintainence
                            </Text>
                            <Text hyphenated size="small">
                              We understand that busi­ness ob­jec­tives tend to
                              change over­time, which is why we maintain your
                              products for the long-run. Whether you need
                              support in host­ing, Google An­a­lyt­ics, Facebook
                              Pix­el, or A/B test­ing, we've got your back.
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
        panasonicImage: file(relativePath: {eq: "panasonic.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 640) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        dysonImage: file(relativePath: {eq: "dyson.jpg"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 640) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        vapeImage: file(relativePath: {eq: "vape.PNG"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 640) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        santaImage: file(relativePath: {eq: "santa_stamp.PNG"}) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 640) {
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
              title
              excerpt
              content
              date
              tags {
                name
              }
              featured_media {
                source_url
              }
            }
          }
        }
        recentPosts: allWordpressPost(
          limit: 3
          filter: {tags: {elemMatch: {name: {eq: "new"}}}}
        ) {
          edges {
            node {
              id
              slug
              title
              excerpt
              date
              tags {
                name
              }
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
