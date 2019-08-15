import React from 'react';
import {Waypoint} from 'react-waypoint';

interface Props {
  bottomOffSet?: string;
}
interface State {
  contentInView: boolean;
}

type ComposedProps = Props;

export default class Scroll extends React.PureComponent<ComposedProps, State> {
  state: State = {
    contentInView: false,
  };
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
  }

  handleOnEnter() {
    console.log('in view');
    this.setState({contentInView: true});
  }

  loadContent() {
    const {children} = this.props;
    const {contentInView} = this.state;

    const content = contentInView ? children : '';
    return content;
  }
  render() {
    const {bottomOffSet = '33.33%'} = this.props;

    // window object does not exist in Webpack's Node environment, this is to prevent the error
    const browserWindow = typeof window !== 'undefined' ? window : null;
    return (
      <div>
        <Waypoint
          scrollableAncestor={browserWindow}
          onEnter={this.handleOnEnter}
          bottomOffset={bottomOffSet}
        />
        {this.loadContent()}
      </div>
    );
  }
}
