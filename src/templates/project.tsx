import React from 'react';
import {graphql} from 'gatsby';
import striptags from 'striptags';

import styles from './Project.module.scss';

import {Page, Article, Grid, Text, List, Theme, Decor} from '../components';

export const query = graphql`
  query($wordpress_id: Int!) {
    allWordpressWpProject(filter: {wordpress_id: {eq: $wordpress_id}}) {
      edges {
        node {
          slug
          title
          excerpt
          content
          featured_media {
            source_url
          }
          tags {
            id
            name
          }
          acf {
            test_label_1
            test_label_2
          }
        }
      }
    }
  }
`;

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

class Work extends React.PureComponent<ComposedProps, State> {
  render() {
    const project = this.props.data.allWordpressWpProject.edges[0].node;
    const {
      title,
      excerpt,
      date,
      content,
      tags,
      featured_media: {source_url: featuredImg},
    } = project;
    const description = striptags(excerpt);
    return (
      <Page
        title={title}
        description={`${description}`}
        keywords={['keyword', 'things']}
        disableSiteName
      >
        <Page.Background />
        <Page.Layout>
          <div className={styles.Header}>
            <div className={styles.HeaderTop}>
              <img
                className={styles.FeaturedImageBackground}
                src={featuredImg}
              />
            </div>
            <div className={styles.HeaderBottom} />
            <img className={styles.FeaturedImage} src={featuredImg} />
            <div className={styles.HeaderTag}>{title}</div>
          </div>
          <Grid>
            <Theme darkMode bgColor="var(--color-black)">
              <div className={styles.TaglineContainer}>
                <p className={styles.Tagline}>
                  Carving a niche for a future classic.
                </p>
                <div style={{marginTop: '20px'}}>
                  <Text italic align="center" color="var(--color-text-themed)">
                    A microsite created for Panasonic Canada
                  </Text>
                </div>
              </div>
            </Theme>
          </Grid>
          <div className={styles.SummaryContainer}>
            <Grid>
              <Grid.ScreenWidth>
                <h1 className={styles.MainTitle}>{title}</h1>
                <div className={styles.Summary}>
                  <div className={styles.Data}>
                    <Text.Container>
                      <h5 className={styles.DataTitle}>Company</h5>
                      <p className={styles.DataInfo}>Panasonic Canada</p>
                      <h5 className={styles.DataTitle}>Year</h5>
                      <p className={styles.DataInfo}>2016</p>
                      <h5 className={styles.DataTitle}>Tags</h5>
                      <List noBullets noPadding>
                        {tags.map((tag, key) => (
                          <List.Item key={key}>
                            <span
                              className={`${styles.DataInfo} ${
                                styles.DataTags
                              }`}
                            >
                              {tag.name}
                            </span>
                          </List.Item>
                        ))}
                      </List>
                    </Text.Container>
                  </div>
                  <div className={styles.Description}>
                    <Text hyphenated>
                      Praesent dapibus, neque id cursus faucibus, tortor neque
                      egestas auguae, eu vulputate magna eros eu erat. Aliquam
                      erat volutpat. Nam dui mi, tincidunt quis, accumsan
                      porttitor, facilisis luctus, metus. Nam dui mi, tincidunt
                      quis, accumsan porttitor, facilisis luctus, metus. Morbi
                      in sem quis dui placerat ornare. Pellentesque odio nisi,
                      euismod in, pharetra a, ultricies in, diam. Sed arcu.
                    </Text>
                    <Text hyphenated>
                      Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                      accumsan porttitor, facilisis luctus, metus. Nam dui mi,
                      tincidunt quis, accumsan porttitor, facilisis luctus,
                      metus. Morbi in sem quis dui placerat ornare. Praesent
                      dapibus, neque id cursus faucibus, tortor neque egestas
                      auguae, eu vulputate magna eros eu erat.
                    </Text>
                  </div>
                </div>
              </Grid.ScreenWidth>
            </Grid>
          </div>
          <Page.Section>
            <Article date={date} html={content} />
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}

export default ({data}) => <Work data={data} />;
