import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './containers/App';
import config from '../config/api_keys';
// console.log(soundcloud_API_key);
import reducers from './reducers';

const store = configureStore();

SC.initialize({
  client_id: config.sc_API_key
});

// Provider makes the store available to all containers so they can subscribe to it

export default store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);