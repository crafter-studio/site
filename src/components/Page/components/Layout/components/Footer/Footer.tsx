import React from 'react';

import styles from './Footer.module.scss';
import {
  Page,
  Grid,
  Text,
  List,
  Button,
  Link,
} from '../../../../../../components';

export interface Props {}

type State = {};
type ComposedProps = Props;

export default class Footer extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <footer>
        <Page.Section>
          <Grid>
            <Grid.ScreenWidth>
              <div className={styles.FooterGrid}>
                <div className={styles.FooterItem}>
                  <Text tag="h4" size="small" uppercase>
                    Random
                  </Text>
                  <Text.Container>
                    <Text size="small">
                      Don't be an apple, eat cheese. Why haven't everyone
                      figured out why children like to roll in mud so much? I
                      think it is because in their past life they were little
                      pigs. Don't be an apple, eat cheese. Why haven't everyone
                      figured out why children like to roll in mud so much?
                    </Text>
                  </Text.Container>
                </div>
                <div className={styles.FooterItem}>
                  <Text tag="h4" size="small" uppercase>
                    Blog
                  </Text>
                  <List noPadding noBullets>
                    <List.Item>
                      <Text size="small">
                        <Link to="blog">
                          A longer post featuring something cool. This is a
                          title.
                        </Link>
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="small">
                        <Link to="blog">
                          Why are web developers so overpaid?
                        </Link>
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="small">
                        <Link to="blog">Web design trends of 2020</Link>
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="small">
                        <Link to="blog">
                          Life is too short, eat more veggies.
                        </Link>
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text size="small">
                        <Link to="blog">One More blog post here.</Link>
                      </Text>
                    </List.Item>
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
                      <Button value="Contact Us" linkPath="/contact" />
                    </List.Item>
                  </List>
                </div>
              </div>
            </Grid.ScreenWidth>
          </Grid>
        </Page.Section>
        <div className={styles.Copyright}>
          <Grid>
            <Grid.ScreenWidth>
              <Text.Container align="center">
                <Text size="subscript">
                  Copyright © {new Date().getFullYear()} Crafter Studio
                </Text>
              </Text.Container>
            </Grid.ScreenWidth>
          </Grid>
        </div>
      </footer>
    );
  }
}
