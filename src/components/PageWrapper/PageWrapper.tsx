import React from 'react';

import {SeoWrapper} from '..';

interface Props {
  title: string;
  description: string;
  keywords: string[];
  lang?: string;
}

type State = {};
type ComposedProps = Props;
export default class PageWrapper extends React.PureComponent<
  ComposedProps,
  State
> {
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
