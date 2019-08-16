import React, {ReactComponentElement} from 'react';
import {Waypoint} from 'react-waypoint';

import {classNames} from '../utils/classNames';
import styles from './Scroll.module.scss';

// ===================================================================================
// Scroll.LoadAnimation
// ===================================================================================
interface LoadAnimationProps {
  contentInView: boolean;
}

const LoadAnimation: React.FC<LoadAnimationProps> = ({
  children,
  contentInView,
}) => {
  const LoadAnimationClass = classNames(contentInView && styles.LoadAnimation);
  return (
    <>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          className: classNames(child.props.className, LoadAnimationClass),
        });
      })}
    </>
  );
};

// ===================================================================================
// Scroll.LoadContent
// ===================================================================================
interface LoadContentProps {
  contentInView: boolean;
}

const LoadContent: React.FC<LoadContentProps> = ({children, contentInView}) => {
  const content = contentInView ? children : '';
  return <>{content}</>;
};

// ===================================================================================
// Scroll
// ===================================================================================
interface NoProps {}

interface Props {
  bottomOffset?: string;
}
interface State {
  contentInView: boolean;
}

type ComposedProps = Props;

class Scroll extends React.PureComponent<ComposedProps, State> {
  static LoadContent: React.FC<NoProps>;
  static LoadAnimation: React.FC<NoProps>;
  state: State = {
    contentInView: false,
  };
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
  }

  handleOnEnter() {
    this.setState({contentInView: true});
  }

  render() {
    const {children, bottomOffset = '33.33%'} = this.props;
    const {contentInView} = this.state;

    // window object does not exist in Webpack's Node environment, this is to prevent the error
    const browserWindow = typeof window !== 'undefined' ? window : null;
    return (
      <div>
        <Waypoint
          scrollableAncestor={browserWindow}
          onEnter={this.handleOnEnter}
          bottomOffset={bottomOffset}
        />
        {React.Children.map(children, (child: any) => {
          if (child.type.displayName === 'LoadContent') {
            return React.cloneElement(child, {contentInView});
          }

          if (child.type.displayName === 'LoadAnimation') {
            return React.cloneElement(child, {contentInView});
          }
        })}
      </div>
    );
  }
}

Scroll.LoadAnimation = LoadAnimation;
Scroll.LoadContent = LoadContent;

export default Scroll;
