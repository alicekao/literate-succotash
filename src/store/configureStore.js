/* The store: 
  - holds application state
  - Can retrieve state using getState()
  - Can update state with dispatch(action)
  - Registers listeners via subscribe(listener)

Only 1 store per appl
*/

import { createStore } from 'redux';
import rootReducer from '../reducers';
import { addSong, changeGenre } from '../actions';

export default function configureStore(preloadedState) {
  // Create the store w/ your reducer and the initial state
  const store = createStore(rootReducer, preloadedState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;store.replaceReducer(nextReducer)
    });
  }

  // Everytime state changes, log it, call subscribe() to stop listening to status updates
  let unsubscribe = store.subscribe(() => {
    console.log('state changed! ', store.getState());
  });

  // store.dispatch(addSong({title: 'my new song'}));
  // store.dispatch(changeGenre('hip hop'));

  return store;
}