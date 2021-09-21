import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { applyMiddleware, createStore } from 'redux';
import { searchRobots } from './reducers';

const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
