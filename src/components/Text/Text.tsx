import React from 'react';

import {classNames, classVariants} from '../utils/classNames';
import Container from './components/Container';
import styles from './Text.module.scss';

export interface Props {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right' | 'justify';
  uppercase?: boolean;
  spaceUnder?: 'tight' | 'loose' | 'extra-loose';
}

type State = {};
type ComposedProps = Props;

function wrapComponentWithTag(
  reactElement: React.ReactNode,
  className: string,
  tag: Props['tag'],
): React.ReactElement {
  const headerClass = classNames(styles.Heading, className);

  let tagMarkup;
  switch (tag) {
    case 'h1':
      tagMarkup = <h1 className={headerClass}>{reactElement}</h1>;
      break;
    case 'h2':
      tagMarkup = <h2 className={headerClass}>{reactElement}</h2>;
      break;
    case 'h3':
      tagMarkup = <h3 className={headerClass}>{reactElement}</h3>;
      break;
    case 'h4':
      tagMarkup = <h4 className={headerClass}>{reactElement}</h4>;
      break;
    case 'h5':
      tagMarkup = <h5 className={headerClass}>{reactElement}</h5>;
      break;
    case 'h6':
      tagMarkup = <h6 className={headerClass}>{reactElement}</h6>;
      break;
    default:
      tagMarkup = <p className={className}>{reactElement}</p>;
      break;
  }

  return tagMarkup;
}

export default class Text extends React.PureComponent<ComposedProps, State> {
  static Container = Container;

  render() {
    const {tag, uppercase, align, size, children} = this.props;

    const composedClass = classNames(
      styles.Text,
      uppercase && styles.uppercase,
      align && styles[classVariants('align', align)],
      tag && styles[classVariants('tag', tag)],
      size && styles[classVariants('size', size)],
    );

    return wrapComponentWithTag(children, composedClass, tag);
  }
}