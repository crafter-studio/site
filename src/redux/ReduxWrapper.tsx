import React from 'react';
import {Provider} from 'react-redux';
import {createStore as reduxCreateStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';

import rootReducer from '.';
// const createStore = () =>
//   reduxCreateStore(rootReducer, applyMiddleware(logger));

const createStore = () => reduxCreateStore(rootReducer);
export default ({element}) => (
  <Provider store={createStore()}>{element}</Provider>
);
