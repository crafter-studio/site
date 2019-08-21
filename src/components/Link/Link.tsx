import React from 'react';
import {Link as GatsbyLink} from 'gatsby';

import styles from './Link.module.scss';

interface Props {
  to: string;
  underlined?: boolean;
}

const Link: React.FC<Props> = ({to, children}) => {
  return (
    <span className={styles.Link}>
      <GatsbyLink to={to}>{children}</GatsbyLink>
    </span>
  );
};

export default Link;
