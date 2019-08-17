import React from 'react';

import styles from './Index.module.scss';
import {
  Decor,
  Text,
  PageWrapper,
  Layout,
  ScrambledText,
  Scroll,
  Grid,
  Input,
  Button,
} from '../components';

interface Props {}

type State = {};
type ComposedProps = Props;

export default class IndexPage extends React.PureComponent<
  ComposedProps,
  State
> {
  state: State = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageWrapper
        title="Web Design and Development"
        description="Description"
        keywords={['keyword', 'things']}
      >
        <Layout>
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
              <Text>Web Development & Design</Text>
            </div>
          </div>
          <div />
          <Decor.Triangle
            color="var(--color-light-grey)"
            background="var(--color-dark-grey)"
          />
          <div
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              backgroundColor: 'var(--color-dark-grey)',
            }}
          >
            <Grid>
              <Text tag="h2" uppercase>
                We Build Websites
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                Nullam malesuada erat ut turpis.
              </Text>
            </Grid>
          </div>
          <div
            style={{
              height: '100vh',
              backgroundColor: 'var(--color-light-grey)',
            }}
          >
            <div style={{paddingTop: '80px', paddingBottom: '80px'}}>
              <Grid>
                <form>
                  <Input id="name" type="text" name="name" label="Name" />
                  <Input id="email" type="email" name="email" label="Email" />
                  <Button.Group align="right" spacing="tight">
                    <Button value="Back" />
                    <Button submit value="Submit" />
                  </Button.Group>
                </form>
              </Grid>
            </div>
          </div>
          <div style={{height: '100vh'}} />
        </Layout>
      </PageWrapper>
    );
  }
}
