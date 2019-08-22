import React from 'react';
import {Link as GatsbyLink} from 'gatsby';

import styles from './Link.module.scss';
import {classNames} from '../../components/utils/classNames';

interface Props {
  to: string;
  underlined?: boolean;
  secondaryFont?: boolean;
  animated?: boolean;
}

const Link: React.FC<Props> = ({
  to,
  animated,
  secondaryFont,
  underlined = true,
  children,
}) => {
  const className = classNames(
    styles.Link,
    underlined && styles.underlined,
    animated && styles.animated,
    secondaryFont && styles.secondaryFont,
  );
  return (
    <span className={className}>
      <GatsbyLink to={to}>{children}</GatsbyLink>
    </span>
  );
};

export default Link;
