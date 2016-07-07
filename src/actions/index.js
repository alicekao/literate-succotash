import { ADD_SONG, CHANGE_GENRE, SEARCH_SONGS, REQUEST_SONGS, RECEIVE_SONGS } from '../constants/ActionTypes';
import config from '../../config/api_keys';
import fetch from 'isomorphic-fetch';

const key = config.sc_API_key;
// Action creators are functions that create actions (describe what has happened)
// Try to pass as little data into actions as possible
export const addSong = (songObj) => {
  console.log('Action dispatched: ', songObj);
  return {
    type: ADD_SONG,
    payload: songObj
  };
};

export const changeGenre = genre => {
  console.log('Change genre action dispatched: ', genre);
  return {
    type: CHANGE_GENRE,
    text: genre
  };
};

export const fetchSongs = query => {
  const formatted = query.replace(' ', '_');
  
  return dispatch => {
    dispatch(requestSongs(query));
    return fetch(`https://api.soundcloud.com/tracks?client_id=${key}&q=${formatted}`)
    .then(response => response.json())
    .then(json => {
      console.log('success! json: ', json);
      dispatch(receiveSongs(query, json));
    })
  };
};

export const requestSongs = query => {
  return {
    type: REQUEST_SONGS,
    payload: query
  }
};

export const receiveSongs = (search, data) => {
  return {
    type: RECEIVE_SONGS,
    search,
    data
  }
}