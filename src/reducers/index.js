import { combineReducers } from 'redux';
import SongsReducer from './songs';
import GenreReducer from './genres';
import PlaylistReducer from './playlist';

// Reducers specify how app state changes
// Each reducer handles a separate part of the state tree

// Combine reducers generates a fn that calls your reducers w/ the slices of states (keys in obj have to match state fields, vals have to match reducer fn names) 
// const combineReducers = (reducers) => {
//   return (state={}, action) => {
//     return Object.keys(reducers).reduce((nextState, key) => {
//       nextState[key] = reducers[key](state[key], action)
//     }, {});
//   }
// }

const rootReducer = combineReducers({
  songs: SongsReducer,
  genre: GenreReducer,
  playlist: PlaylistReducer
});

export default rootReducer;