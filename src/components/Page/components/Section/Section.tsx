import React from 'react';

import styles from './Section.module.scss';

const Section: React.FC = ({children}) => {
  return <div className={styles.Section}>{children}</div>;
};

export default Section;
