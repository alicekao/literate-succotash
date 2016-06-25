import { combineReducers } from 'redux';
import SongsReducer from './songs.js';
import GenreReducer from './genres.js';

// Reducers specify how app state changes
// Each reducer handles a separate part of the state tree

// Combine reducers generates a fn that calls your reducers w/ the slices of states 
const rootReducer = combineReducers({
  songs: SongsReducer,
  genre: GenreReducer
});

export default rootReducer;