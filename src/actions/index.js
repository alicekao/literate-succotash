import { ADD_SONG, CHANGE_GENRE } from '../constants/ActionTypes';

// Action creators are functions that create actions (describe what has happened)
// Try to pass as little data into actions as possible
export function addSong(songObj) {
  return { 
    type: ADD_SONG,
    payload: songObj}
}

export function changeGenre(genre) {
  return {
    type: CHANGE_GENRE,
    text: genre
  }
}