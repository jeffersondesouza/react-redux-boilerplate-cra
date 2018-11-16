import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import exempleReducer from './example/reducer';

const reducers = combineReducers({
  example: exempleReducer,
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));
