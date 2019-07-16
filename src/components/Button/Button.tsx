import React from 'react';
import {Link} from 'gatsby';

import {classNames, classVariants} from '../utils/classNames';

import styles from './Button.module.scss';

export interface Props {
  value: string;
  linkPath?: string;
  submit?: boolean;
  uppercase?: boolean;
  fullWidth?: boolean;
}

type State = {};
type ComposedProps = Props;

export interface ButtonGroupProps {
  children: any;
  spacing?: 'tight' | 'loose';
  align?: 'left' | 'center' | 'right';
}

type Group = (props: ButtonGroupProps) => React.ReactElement;

class Button extends React.PureComponent<ComposedProps, State> {
  static Group: Group;

  render() {
    const {value, submit, uppercase, linkPath = '/', fullWidth} = this.props;

    const linkButton = (
      <Link className={styles.Button} to={linkPath}>
        {value}
      </Link>
    );

    const submitButton = (
      <input className={styles.Button} type="submit" value={value} />
    );

    const button = submit ? submitButton : linkButton;

    const buttonWrapperClass = classNames(
      styles.ButtonWrapper,
      fullWidth && styles.fullWidth,
      uppercase && styles.uppercase,
    );

    return <div className={buttonWrapperClass}>{button}</div>;
  }
}

const Group: Group = ({children, spacing, align}) => {
  const className = classNames(
    styles.ButtonGroup,
    spacing && styles[classVariants('spacing', spacing)],
    align && styles[classVariants('align', align)],
  );

  return <div className={className}>{children}</div>;
};

Button.Group = Group;
export default Button;
