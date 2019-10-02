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
                  Just fill the form below and click submit, it's as simple as
                  that. At Crafter Studio, we build cutting-edge web experiences
                  for tomorrow's brands. Refer a friend, and we'll wire you $400
                  CAD for the successful shoutout.
                </Text>
                <Text tag="h3" size="small" uppercase>
                  How does it work?
                </Text>
                <Text>
                  We believe in establishing trust and producing quality work
                  with great clients. Once we have signed the contract with the
                  client, we will instantly send you the $400 through your
                  preferred payment method. You will be informed by email during
                  the entire process of the referral. No catch whatsoever.
                </Text>
              </div>
              <form name="Referral Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Referral Form" />
                <Input
                  name="email"
                  label="your email"
                  type="email"
                  id="email"
                  placeholder="Ex. name@example.com"
                />
                <Input
                  name="name"
                  label="Name of Referred Company"
                  type="text"
                  id="company"
                  placeholder="Ex. Crafter Studio"
                />
                <Input.Select
                  name="payment_method"
                  label="Preferred Payment Method"
                  id="payment_method"
                >
                  <option>Paypal</option>
                  <option>TransferWise</option>
                </Input.Select>
                <Button submit value="Submit" />
              </form>
            </Grid>
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}
