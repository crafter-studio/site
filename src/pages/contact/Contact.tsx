import React from 'react';
import styles from './Contact.module.scss';

import {Page, Grid, Input, Button, Text, Theme, Link} from '../../components';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Contact extends React.PureComponent<ComposedProps, State> {
  render() {
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
              <div className={styles.FormContent}>
                <Text tag="h2" size="h1">
                  Let's work together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede.
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
                <Input.Select id="service" name="service" label="Service">
                  <option value="">-- Please choose an option --</option>
                  <option value="Web Design & Development">
                    Web Design & Development
                  </option>
                  <option value="Audit">Website Audit</option>
                  <option value="Consulting">Consulting</option>
                </Input.Select>
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Please email us at{' '}
                    <Link>hello@crafterstu.com</Link>
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
