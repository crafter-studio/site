import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import striptags from 'striptags';

import styles from './Blog.module.scss';
import {Page, Grid, Text, List, Link} from '../../components';
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
    const posts = nodeFromEdges(data.allWordpressPost.edges);

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
                <div className={styles.ProjectsContainer}>
                  {posts.map((post, key) => (
                    <Post
                      title={post.title}
                      slug={post.slug}
                      excerpt={post.excerpt}
                      key={key}
                    />
                  ))}
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
        allWordpressPost {
          edges {
            node {
              slug
              title
              excerpt
            }
          }
        }
      }
    `}
    render={(data) => <Blog data={data} />}
  />
);
