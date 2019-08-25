import React from 'react';

import styles from './Home.module.scss';
import {Text, Page, ScrambledText, Grid, Theme, Link} from '../../components';

import placeholder from '../../images/placeholder.jpg';
import placeholder_house from '../../images/house.png';
import placeholder_1 from '../../images/placeholder_1.jpg';
import placeholder_2 from '../../images/placeholder_2.jpg';
import placeholder_3 from '../../images/placeholder_3.jpg';
import placeholder_4 from '../../images/placeholder_4.jpg';
import placeholder_5 from '../../images/placeholder_5.jpg';

interface Props {}

type State = {};
type ComposedProps = Props;

export default class Home extends React.PureComponent<ComposedProps, State> {
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
                    <img src={placeholder_house} />
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
                    <div className={styles.A}>
                      <img src={placeholder_1} />
                    </div>
                    <div className={styles.B}>
                      <img src={placeholder_4} />
                    </div>
                    <div className={styles.C}>
                      <img src={placeholder_1} />
                    </div>
                    <div className={styles.D}>
                      <img src={placeholder_2} />
                    </div>
                    <div className={styles.E}>
                      <img src={placeholder_3} />
                    </div>
                    <div className={styles.F}>
                      <img src={placeholder_5} />
                    </div>
                    <div className={styles.G}>
                      <img src={placeholder_2} />
                    </div>
                    <div className={styles.H}>
                      <img src={placeholder_4} />
                    </div>
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
                      <img src={placeholder} />
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
                      <img src={placeholder} />
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
                      <img src={placeholder} />
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
                      <img src={placeholder} />
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
                    <div className={styles.Big}>
                      <img src={placeholder_1} />
                    </div>
                    <div className={styles.B}>
                      <img src={placeholder_5} />
                    </div>
                    <div className={styles.C}>
                      <img src={placeholder_2} />
                    </div>
                    <div className={styles.D}>
                      <img src={placeholder_4} />
                    </div>
                    <div className={styles.E}>
                      <img src={placeholder_3} />
                    </div>
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
