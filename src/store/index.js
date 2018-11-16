import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import timeline from './timeline/reducer';

const reducers = combineReducers({
  timeline,
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));
