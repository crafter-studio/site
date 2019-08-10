import React from 'react';
import {Link} from 'gatsby';

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
  private linkRef;
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.linkRef = React.createRef();
  }

  state: State = {
    renderedWidth: null,
  };

  componentDidMount() {
    setTimeout(() => {
      const width = this.linkRef.current.offsetWidth;
      this.setState({
        renderedWidth: width,
      });
    }, 100);
  }

  componentDidUpdate() {
    const {renderedWidth} = this.state;
    this.ref.current.style.setProperty('--button-width', `${renderedWidth}px`);
  }

  render() {
    const {to, content} = this.props;
    const {renderedWidth} = this.state;

    const placeholder = (
      <Link ref={this.linkRef} className={styles.Link} to={to}>
        {content}
      </Link>
    );

    const buttonMarkup = renderedWidth ? (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${renderedWidth} 40`}
        >
          <rect className={styles.Rect} width={renderedWidth} height={40} />
        </svg>
        <Link className={styles.Link} to={to}>
          {content}
        </Link>
      </>
    ) : (
      placeholder
    );

    return (
      <div ref={this.ref} className={styles.SvgWrapper}>
        {buttonMarkup}
      </div>
    );
  }
}
