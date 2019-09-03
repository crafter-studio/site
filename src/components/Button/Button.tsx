import React from 'react';

import {classNames, classVariants} from '../utils/classNames';

import styles from './Button.module.scss';

interface Props {
  value: string;
  subdued?: boolean;
  submit?: boolean;
  uppercase?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

type State = {};
type ComposedProps = Props;

interface ButtonGroupProps {
  children: any;
  spacing?: 'tight' | 'loose';
  align?: 'left' | 'center' | 'right';
}

type Group = (props: ButtonGroupProps) => React.ReactElement;

class Button extends React.PureComponent<ComposedProps, State> {
  static Group: Group;

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const {onClick} = this.props;
    onClick();
  }

  render() {
    const {value, submit, uppercase, fullWidth} = this.props;

    const submitButton = (
      <input
        onClick={this.handleButtonClick}
        className={styles.Button}
        type="submit"
        value={value}
      />
    );

    const defaultButton = (
      <div onClick={this.handleButtonClick} className={styles.Button}>
        {value}
      </div>
    );

    const button = submit ? submitButton : defaultButton;

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

  return (
    <div onClick={this.handleButtonClick} className={className}>
      {children}
    </div>
  );
};

Button.Group = Group;
export default Button;
