import React from 'react';
import ReactHtmlParser, {processNodes} from 'react-html-parser';
import cuid from 'cuid';

import styles from './Article.module.scss';

import {Text} from '../../components';

const options = {
  transform,
};

function transform(node) {
  if (node.type === 'tag' && node.name === 'p') {
    return (
      <Text hyphenated key={cuid()}>
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h1') {
    return (
      <Text key={cuid()} tag="h1">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h2') {
    return (
      <Text key={cuid()} tag="h2">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h3') {
    return (
      <Text key={cuid()} tag="h3" size="small" uppercase>
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h4') {
    return (
      <Text key={cuid()} tag="h4">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h5') {
    return (
      <Text key={cuid()} tag="h5">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type === 'tag' && node.name === 'h6') {
    return (
      <Text key={cuid()} tag="h6">
        {processNodes(node.children, transform)}
      </Text>
    );
  }

  if (node.type == 'tag' && node.attribs.class != null) {
    const {class: className} = node.attribs;
    if (className.includes('full-width')) {
      return (
        <Article.FullWidth key={cuid()}>
          <figure>{processNodes(node.children, transform)}</figure>
        </Article.FullWidth>
      );
    }

    if (className.includes('wide')) {
      return (
        <Article.Wide key={cuid()}>
          <figure>{processNodes(node.children, transform)}</figure>
        </Article.Wide>
      );
    }
  }
}

export interface Props {
  title: string;
  date: string;
  html: string;
}

type State = {};
type ComposedProps = Props;

class Article extends React.PureComponent<ComposedProps, State> {
  static FullWidth;
  static Wide;

  render() {
    const {title, date, html} = this.props;
    const markup = ReactHtmlParser(html, options);
    return (
      <div className={styles.ArticleContainer}>
        <article className={styles.Article}>
          <div className={styles.ArticleTitle}>
            <Text tag="h1">{title}</Text>
          </div>
          {markup}
        </article>
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
