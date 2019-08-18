import React from 'react';

import {SeoWrapper} from '..';
import {Layout, Section} from './components';

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
  static Layout: React.FC<NoProps>;
  static Section: React.FC<NoProps>;
  render() {
    const {title, description, keywords, lang, children} = this.props;

    return (
      <div>
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

Page.Layout = Layout;
Page.Section = Section;
