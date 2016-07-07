/* The store: 
  - holds application state
  - Can retrieve state using getState()
  - Can update state with dispatch(action)
  - Registers listeners via subscribe(listener)

Only 1 store per appl
*/

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { addSong, changeGenre } from '../actions';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  // Create the store w/ your reducer and the initial state
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;store.replaceReducer(nextReducer)
    });
  }

  // Everytime state changes, log it, call subscribe() to stop listening to status updates
  // let unsubscribe = store.subscribe(() => {
  //   console.log('state changed! ', store.getState());
  // });

  // store.dispatch(addSong({title: 'my new song'}));
  // store.dispatch(changeGenre('hip hop'));

  return store;
}