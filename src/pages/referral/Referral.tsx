import React from 'react';
import styles from './Referral.module.scss';

import {Page, Grid, Input, Button, Text} from '../../components';

interface Props {}
interface State {}

type ComposedProps = Props;

export default class Contact extends React.PureComponent<ComposedProps, State> {
  render() {
    return (
      <Page title="Referral">
        <Page.Background />
        <Page.Layout>
          <Page.Section>
            <Grid>
              <div className={styles.FormContent}>
                <Text tag="h2" size="h1">
                  Refer a friend. Recieve $400.
                </Text>
                <Text>
                  Know a business that is in need for a specialized web
                  solution? At Crafter Studio, we build cutting-edge web
                  experiences for tomorrow's brands. Refer a friend, and we'll
                  wire you $400 USD for the successful shoutout.
                </Text>
              </div>
              <form name="Referral Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Referral Form" />
                <Input
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  placeholder="Ex. youremail@example.com"
                />
                <Input
                  name="name"
                  label="Name of Referred Company"
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
        </Page.Layout>
      </Page>
    );
  }
}
