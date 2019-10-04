import React from 'react';
import {graphql} from 'gatsby';
import striptags from 'striptags';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';

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
          date
          featured_media {
            source_url
          }
          tags {
            id
            name
          }
          acf {
            stat_one {
              stat_one_title
              stat_one_description
            }
            stat_two {
              stat_two_title
              stat_two_description
            }
            stat_three {
              stat_three_title
              stat_three_description
            }
            tagline
            short_description
            client
            summary
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
      title: titleRaw,
      excerpt,
      date,
      content,
      tags,
      featured_media: {source_url: featuredImg},
    } = project;

    const {
      acf: {
        tagline,
        short_description,
        client,
        summary: summaryRaw,
        stat_one,
        stat_two,
        stat_three,
      },
    } = project;

    if (
      !tagline ||
      !short_description ||
      !client ||
      !summaryRaw ||
      !stat_one ||
      !stat_two ||
      !stat_three
    ) {
      return null;
    }

    const title = `${ReactHtmlParser(striptags(titleRaw))}`;
    const {stat_one_title, stat_one_description} = stat_one;
    const {stat_two_title, stat_two_description} = stat_two;
    const {stat_three_title, stat_three_description} = stat_three;
    const summary = summaryRaw.split('\n').map((item, key) => {
      return (
        <React.Fragment key={key}>
          {item}
          <br />
        </React.Fragment>
      );
    });

    return (
      <Page title={title} keywords={tags.map((tag) => tag.name)}>
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
                <p className={styles.Tagline}>{tagline}</p>
                <Text italic align="center" color="var(--color-text-themed)">
                  {short_description}
                </Text>
              </div>
            </Theme>
          </Grid>
          <div className={styles.SummaryContainer}>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.Summary}>
                  <div className={styles.Description}>
                    <Text tag="h5" size="h1">
                      {title}
                    </Text>
                    <Text>{summary}</Text>
                  </div>
                  <div className={styles.Data}>
                    <div className={styles.ProjectStats}>
                      <div className={styles.ProjectStat}>
                        <Text tag="h5" size="small" uppercase>
                          {stat_one_title}
                        </Text>
                        <Text>{stat_one_description}</Text>
                      </div>
                      <div className={styles.ProjectStat}>
                        <Text tag="h5" size="small" uppercase>
                          {stat_two_title}
                        </Text>
                        <Text>{stat_two_description}</Text>
                      </div>
                      <div className={styles.ProjectStat}>
                        <Text tag="h5" size="small" uppercase>
                          {stat_three_title}
                        </Text>
                        <Text>{stat_three_description}</Text>
                      </div>
                      <div className={styles.ProjectStat}>
                        <Text tag="h5" uppercase size="small">
                          Tags
                        </Text>
                        <List noBullets noPadding>
                          {tags.map((tag, key) => (
                            <List.Item key={key}>
                              <span
                                className={`${styles.DataInfo} ${styles.Tags}`}
                              >
                                {tag.name}
                              </span>
                            </List.Item>
                          ))}
                        </List>
                      </div>
                    </div>
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
