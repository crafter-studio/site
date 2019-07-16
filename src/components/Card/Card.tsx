import React from 'react';

import styles from './Card.module.scss';
import {classNames, classVariants} from '../utils/classNames';

export interface CardProps {
  direction?: 'row' | 'column';
  nowrap?: boolean;
}
interface CardStates {}

export interface CardContainerProps {
  children: any;
  direction?: 'row' | 'column';
  spacing?: 'tight' | 'normal' | 'loose';
}

export interface CardImageProps {}

type CardContainer = (props: CardContainerProps) => React.ReactElement;
type CardImage = (props: CardImageProps) => React.ReactElement;
class Card extends React.PureComponent<CardProps, CardStates> {
  static Container: CardContainer;
  static Image: CardImage;
  static Content: any;

  render() {
    const {children, direction, nowrap} = this.props;

    const className = classNames(
      styles.Card,
      direction && styles[classVariants('direction', direction)],
      nowrap && styles.noWrap,
    );

    return (
      <div className={styles.CardWrapper}>
        <div className={className}>{children}</div>
      </div>
    );
  }
}

const Container = ({children, direction, spacing}) => {
  const className = classNames(
    styles.CardContainer,
    direction && styles[classVariants('direction', direction)],
    spacing && styles[classVariants('spacing', spacing)],
  );
  return <div className={className}>{children}</div>;
};

const Image = ({children}) => {
  return <div className={styles.CardImageWrapper}>{children}</div>;
};

const Content = ({children}) => (
  <div className={styles.CardContent}>{children}</div>
);

Card.Container = Container;
Card.Image = Image;
Card.Content = Content;
export default Card;
