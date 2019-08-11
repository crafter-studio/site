import React from 'react';
import {Link} from 'gatsby';

import {classNames} from '../utils/classNames';
import styles from './AnimatedButton.module.scss';

interface Props {
  to: string;
  content: string;
  width?: number;
}

type State = {
  renderedWidth: number;
};
type ComposedProps = Props;

export default class AnimatedButton extends React.PureComponent<
  ComposedProps,
  State
> {
  private ref;
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const {width = 140} = this.props;

    this.ref.current.style.setProperty('--button-width', `${width}px`);
  }

  render() {
    const {to, content, width = 140} = this.props;

    return (
      <div ref={this.ref} className={styles.SvgWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} 40`}>
          <rect className={styles.Rect} width={width} height={40} />
        </svg>
        <Link className={styles.Link} to={to}>
          {content}
        </Link>
      </div>
    );
  }
}
