import React from 'react';
import ReactHtmlParser, {processNodes} from 'react-html-parser';

import styles from './Article.module.scss';

import {Text} from '../../components';

const options = {
  transform,
};

function transform(node, index) {
  if (node.type === 'tag' && node.name === 'p') {
    return <Text>{processNodes(node.children, transform)}</Text>;
  }

  if (node.type === 'tag' && node.name === 'h1') {
    return <Text tag="h1">{processNodes(node.children, transform)}</Text>;
  }

  if (node.type === 'tag' && node.name === 'h2') {
    return <Text tag="h2">{processNodes(node.children, transform)}</Text>;
  }

  if (node.type === 'tag' && node.name === 'h3') {
    return <Text tag="h3">{processNodes(node.children, transform)}</Text>;
  }

  if (node.type === 'tag' && node.name === 'h4') {
    return <Text tag="h4">{processNodes(node.children, transform)}</Text>;
  }

  if (node.type === 'tag' && node.name === 'h5') {
    return <Text tag="h5">{processNodes(node.children, transform)}</Text>;
  }

  if (node.type === 'tag' && node.name === 'h6') {
    return <Text tag="h6">{processNodes(node.children, transform)}</Text>;
  }

  if (node.type == 'tag' && node.attribs.class != null) {
    const {class: className} = node.attribs;
    if (className.includes('full-width')) {
      return (
        <Article.FullWidth>
          {processNodes(node.children, transform)}
        </Article.FullWidth>
      );
    }

    if (className.includes('wide')) {
      return (
        <Article.Wide>{processNodes(node.children, transform)}</Article.Wide>
      );
    }
  }
}

export interface Props {
  html: string;
}

type State = {};
type ComposedProps = Props;

class Article extends React.PureComponent<ComposedProps, State> {
  static FullWidth;
  static Wide;

  render() {
    const {html} = this.props;
    const markup = ReactHtmlParser(html, options);
    return (
      <div className={styles.ArticleContainer}>
        <div className={styles.Article}>{markup}</div>
      </div>
    );
  }
}

const FullWidth = ({children}) => (
  <div className={styles.FullWidth}>{children}</div>
);

const Wide = ({children}) => <div className={styles.Wide}>{children}</div>;

Article.FullWidth = FullWidth;
Article.Wide = Wide;
export default Article;
