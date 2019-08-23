import React from 'react';
import {connect} from 'react-redux';
import {ReduxState} from '../../../../redux/reducers';

import styles from './Background.module.scss';

interface Props {}
interface State {}

type ComposedProps = Props & ReduxState;

class Background extends React.PureComponent<ComposedProps, State> {
  state;
  render() {
    const {bgColor, children} = this.props;

    return (
      <div style={{backgroundColor: bgColor}} className={styles.Background}>
        {children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    setBgColor: {bgColor},
  } = state;
  return {bgColor};
}

export default connect(
  mapStateToProps,
  null,
)(Background);
