import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import styles from './SocialShare.module.scss';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

interface Props {
  relativeUrl: string;
}

export default ({relativeUrl}: Props) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            baseUrl
          }
        }
      }
    `}
    render={(data) => {
      const socialUrl = `${data.site.siteMetadata.baseUrl}${relativeUrl}`;
      console.log(socialUrl);
      const buttonSize = 42;
      return (
        <div
          style={{height: `${buttonSize}px`}}
          className={styles.SocialShareButtons}
        >
          <FacebookShareButton
            url={socialUrl}
            className={styles.SocialShareButton}
          >
            <FacebookIcon size={buttonSize} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={socialUrl}
            className={styles.SocialShareButton}
          >
            <WhatsappIcon size={buttonSize} />
          </WhatsappShareButton>
          <LinkedinShareButton
            url={socialUrl}
            className={styles.SocialShareButton}
          >
            <LinkedinIcon size={buttonSize} />
          </LinkedinShareButton>
          <TwitterShareButton
            url={socialUrl}
            className={styles.SocialShareButton}
          >
            <TwitterIcon size={buttonSize} />
          </TwitterShareButton>
          <RedditShareButton
            url={socialUrl}
            className={styles.SocialShareButton}
          >
            <RedditIcon size={buttonSize} />
          </RedditShareButton>
          <EmailShareButton
            url={socialUrl}
            className={styles.SocialShareButton}
          >
            <EmailIcon size={buttonSize} />
          </EmailShareButton>
        </div>
      );
    }}
  />
);
