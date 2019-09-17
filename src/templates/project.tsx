import React from 'react';
import {graphql} from 'gatsby';
import striptags from 'striptags';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';
import moment from 'moment';

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
      acf: {tagline, short_description, client, summary: summaryRaw},
    } = project;

    if (!tagline || !short_description || !client || !summaryRaw) {
      return;
    }

    const description = striptags(excerpt);
    const title = `${ReactHtmlParser(titleRaw)}`;
    const formattedDate = moment.utc(date).format('DD/MM/YYYY');
    const summary = summaryRaw.split('\n').map((item, key) => {
      return (
        <React.Fragment key={key}>
          {item}
          <br />
        </React.Fragment>
      );
    });

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
                <p className={styles.Tagline}>{tagline}</p>
                <div style={{marginTop: '20px'}}>
                  <Text italic align="center" color="var(--color-text-themed)">
                    {short_description}
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
                      <p className={styles.DataInfo}>{client}</p>
                      <h5 className={styles.DataTitle}>Date</h5>
                      <p className={styles.DataInfo}>{formattedDate}</p>
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
                    <Text>{summary}</Text>
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
