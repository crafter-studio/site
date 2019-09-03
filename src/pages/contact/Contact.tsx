import React from 'react';
import styles from './Contact.module.scss';

import {Page, Grid, Input, Button} from '../../components';

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
              <Grid.ScreenWidth>
                <form name="Contact Form" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <Input
                    name="email"
                    label="email"
                    type="email"
                    id="email"
                    placeholder="hello@crafterstu.com"
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
              </Grid.ScreenWidth>
            </Grid>
          </Page.Section>
        </Page.Layout>
      </Page>
    );
  }
}
