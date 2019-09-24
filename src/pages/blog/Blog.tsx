import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import LazyLoad from 'react-lazy-load';
import striptags from 'striptags';
import ReactHtmlParser from 'react-html-parser';
import {truncate} from 'lodash';
import moment from 'moment';

import styles from './Blog.module.scss';
import {Page, Grid, Text, List, Link, Button} from '../../components';
import {nodeFromEdges} from '../../components/utils';

import placeholder from '../../images/placeholder.jpg';

interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

const Post = ({slug, title, excerpt}) => {
  return (
    <div className={styles.Project}>
      <img src={placeholder} />
      <h2>{title}</h2>
      <Text>{striptags(excerpt)}</Text>
      <Link to={`/blog/${slug}`} animated>
        Slug: {slug}
      </Link>
    </div>
  );
};

class Blog extends React.PureComponent<ComposedProps, State> {
  state: State = {};
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    const posts = nodeFromEdges(data.recentPosts.edges);

    const postsMarkup = posts.map((item, key) => {
      return (
        <div key={key} className={styles.Post}>
          <div className={styles.PostImageContainer}>
            <Link to={`/blog/${item.slug}`}>
              <LazyLoad height="100%" offsetVertical={1000}>
                <img
                  src={item.featured_media.source_url}
                  className={styles.PostImage}
                />
              </LazyLoad>
            </Link>
          </div>
          <div className={styles.PostContentContainer}>
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
                <Text>
                  {truncate(ReactHtmlParser(striptags(item.excerpt)), {
                    length: 180,
                  })}
                </Text>
              </Text.Container>
            </div>
            <div className={styles.PostLink}>
              <Link to={`/blog/${item.slug}`}>
                <Button value="Read Post" />
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <Page
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Page.Background />
        <Page.Layout>
          <Page.Section>
            <Grid>
              <Grid.ScreenWidth>
                <div className={styles.PostsContainer}>{postsMarkup}</div>
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
        recentPosts: allWordpressPost(limit: 10) {
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
    render={(data) => <Blog data={data} />}
  />
);
