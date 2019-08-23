import React from 'react';

import {SeoWrapper} from '..';
import {Background, Layout, Section, SectionProps} from './components';

import styles from './Page.module.scss';

interface NoProps {}

interface Props {
  title: string;
  description: string;
  keywords: string[];
  lang?: string;
}

type State = {};
type ComposedProps = Props;
export default class Page extends React.PureComponent<ComposedProps, State> {
  static Background;
  static Layout: React.FC<NoProps>;
  static Section: React.FC<SectionProps>;
  render() {
    const {title, description, keywords, lang, children} = this.props;

    return (
      <div className={styles.Page}>
        <SeoWrapper
          title={title}
          description={description}
          keywords={keywords}
          lang={lang}
        />
        {children}
      </div>
    );
  }
}

Page.Background = Background;
Page.Layout = Layout;
Page.Section = Section;
