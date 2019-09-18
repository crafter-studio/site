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
                  Random
                </Text>
                <Text.Container>
                  <Text size="small">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede.
                  </Text>
                </Text.Container>
              </div>
              <div className={styles.FooterItem}>
                <Text tag="h4" size="small" uppercase>
                  Blog
                </Text>
                <List noPadding noBullets>
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
                  Contact Us
                </Text>
                <List noPadding noBullets>
                  <List.Item>
                    <Text size="small">23 Rue Jernof Street, M2M 6Z9</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="small">Toronto, Ontario</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="small">+1 905 135 9425</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="small">hello@crafterstu.com</Text>
                  </List.Item>
                  <List.Item>
                    <Button value="Contact Us" />
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
        allWordpressPost(limit: 5) {
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
