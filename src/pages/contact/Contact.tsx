import React from 'react';
import styles from './Contact.module.scss';

import {Page, Grid} from '../../components';

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
          <Grid>
            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <label>Your Email:</label>
                <input type="email" name="email" />
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message" />
              </div>
              <button type="submit">Send</button>
            </form>
          </Grid>
        </Page.Layout>
      </Page>
    );
  }
}
