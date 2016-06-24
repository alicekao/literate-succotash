import { combineReducers } from 'redux';
import SongsReducer from './songs.js';

const rootReducer = combineReducers({
  songs: SongsReducer
});

export default rootReducer;