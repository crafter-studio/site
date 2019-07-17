import React from 'react';

import styles from './List.module.scss';
import {classNames} from '../../components/utils/classNames';

interface Props {
  ordered?: boolean;
  noBullets?: boolean;
  listStyle?: 'disc' | 'circle' | 'square' | 'decimal' | 'lower-roman';
}

type State = {};
type ComposedProps = Props;

export default class List extends React.PureComponent<ComposedProps, State> {
  static Item;

  render() {
    const {children, ordered, noBullets = false, listStyle} = this.props;

    const className = classNames(
      styles.List,
      noBullets && styles.noBullets,
      ordered && styles.ordered,
    );

    const list = ordered ? (
      <ol style={{listStyleType: listStyle}} className={className}>
        {children}
      </ol>
    ) : (
      <ul style={{listStyleType: listStyle}} className={className}>
        {children}
      </ul>
    );

    return list;
  }
}

const Item = ({children, icon, iconSize}) => {
  const className = classNames(icon && styles.ListItemBullet);
  const iconSizeStyle = iconSize ? iconSize : '';
  return (
    <li className={styles.ListItem}>
      <span style={{fontSize: iconSizeStyle}} className={className}>
        {icon}
      </span>
      {children}
    </li>
  );
};

List.Item = Item;
