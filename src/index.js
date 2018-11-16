import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './css/reset.css';
import './css/timeline.css';
import './css/login.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

import timeline from './reducers/timeline';
import notificacoes from './reducers/notificacoes';

const reducers = combineReducers({
  timeline,
  notificacoes
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
