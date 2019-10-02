import React from 'react';
import styles from './Contact.module.scss';

import {Page, Grid, Input, Button, Text, Theme, Link} from '../../components';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Contact extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <Page title="Contact">
        <Page.Background />
        <Page.Layout>
          <Page.Section>
            <Grid>
              <div className={styles.FormContent}>
                <Text tag="h2" size="h1">
                  Ready to work with us?
                </Text>
                <Text>
                  Whether it be a vision, an idea, or a problem that you need to
                  be solved, our team is eager to hear about it. We'll explore
                  different ideas together, brainstorm a few solutions, and in
                  the end craft something beautiful — sure, we'll probably make
                  a few mistakes on the way, but we'll also learn from that and
                  continue refining our solution. Let us become an extension of
                  your team and let's build something brilliant together.
                </Text>
              </div>
              <form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <Input
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  placeholder="Ex. hello@crafterstu.com"
                />
                <Input
                  name="name"
                  label="Company / Name"
                  type="text"
                  id="company"
                  placeholder="Ex. Crafter Studio"
                />
                <Input
                  textarea
                  name="message"
                  label="Your Message"
                  type="text"
                  id="message"
                  placeholder="Write your message here"
                />
                <Button submit value="Submit" />
              </form>
            </Grid>
          </Page.Section>
          <Theme bgColor="var(--color-primary)">
            <Page.Section>
              <Grid>
                <div className={styles.SomethingElse}>
                  <Text align="center" tag="h2" size="h1">
                    Something else in mind?
                  </Text>
                  <Text align="center">
                    Reach out to us about your wildest ideas at our email
                    address at <Link>hello@crafterstu.com</Link> and we will
                    reply in 1-2 business days — we don't discriminate, we even
                    reply to all of our spam bots.
                  </Text>
                </div>
              </Grid>
            </Page.Section>
          </Theme>
        </Page.Layout>
      </Page>
    );
  }
}
