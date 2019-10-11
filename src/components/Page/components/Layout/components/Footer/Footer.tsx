import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

import styles from './Footer.module.scss';
import {Grid, Text, List, Button, Link} from '../../../../../../components';
import {nodeFromEdges} from '../../../../../../components/utils';

export interface Props {
  data: any;
}

type State = {};
type ComposedProps = Props;

class Footer extends React.PureComponent<ComposedProps, State> {
  render() {
    const posts = nodeFromEdges(this.props.data.allWordpressPost.edges);

    return (
      <footer className={styles.Footer}>
        <Grid>
          <Grid.ScreenWidth>
            <div className={styles.FooterGrid}>
              <div className={styles.FooterItem}>
                <Text tag="h4" size="small" uppercase>
                  Our Team
                </Text>
                <Text.Container>
                  <Text size="small">
                    We are a tight bunch of digital creatives that love
                    exploring the newest and shiniest technology available. Our
                    passion for our craft motivates us out of bed every morning
                    as we obsess over bringing unique ideas to life.
                  </Text>
                </Text.Container>
              </div>
              <div className={styles.FooterItem}>
                <Text tag="h4" size="small" uppercase>
                  Recent Blogs
                </Text>
                <List unstyled>
                  {posts.map((post, key) => (
                    <List.Item key={key}>
                      <Text size="small">
                        <Link to={`blog/${post.slug}`}>{post.title}</Link>
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </div>
              <div className={styles.FooterItem}>
                <Text tag="h4" size="small" uppercase>
                  Like What You See?
                </Text>
                <List unstyled>
                  <List.Item>
                    <Text size="small">
                      Contact us through our email or contact page to discuss
                      your grand vision, we will respond within 1-2 business
                      days.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text italic>
                      <Link animated aTag to="mailto: hello@crafterstu.com">
                        hello@crafterstu.com
                      </Link>
                    </Text>
                    <Link to="/contact">
                      <Button value="Contact Us" />
                    </Link>
                  </List.Item>
                </List>
              </div>
            </div>
          </Grid.ScreenWidth>
        </Grid>
        <div className={styles.Copyright}>
          <Grid>
            <Grid.ScreenWidth>
              <Text size="subscript">
                Copyright © {new Date().getFullYear()} Crafter Studio
              </Text>
            </Grid.ScreenWidth>
          </Grid>
        </div>
      </footer>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(limit: 5, sort: {fields: [date], order: DESC}) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={(data) => <Footer data={data} />}
  />
);
