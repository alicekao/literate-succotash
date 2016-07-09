import { 
  ADD_SONG, 
  CHANGE_GENRE, 
  SEARCH_SONGS, 
  REQUEST_SONGS, 
  RECEIVE_SONGS, 
  PAUSE_SONG, 
  PLAY_SONG, 
  PLAY_PLAYLIST, 
  STOP_PLAY, 
  PLAY_NEXT,
  RESUME_PLAY 
} from '../constants/ActionTypes';
import config from '../../config/api_keys';
import fetch from 'isomorphic-fetch';

const key = config.sc_API_key;
const baseURL = `https://api.soundcloud.com/tracks?client_id=${key}`;

// Action creators are functions that create actions (describe what has happened)
// Try to pass as little data into actions as possible
export const addSong = (songObj) => {
  return {
    type: ADD_SONG,
    payload: songObj
  };
};

export const changeGenre = genre => {
  return {
    type: CHANGE_GENRE,
    text: genre
  };
};

export const fetchSongsByGenre = genre => {
  const formatted = genre.replace(' ', 
  '');
  return dispatch => {
    dispatch(changeGenre(genre));
    dispatch(requestSongs(genre));

    return fetch(`${baseURL}&tags='${formatted}'`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveSongs(genre, json))
      })
  }
}

export const fetchSongs = query => {
  const formatted = query.replace(' ', '_');

  return dispatch => {
    dispatch(requestSongs(query));
    return fetch(`${baseURL}&q=${formatted}`)
      .then(response => response.json())
      .then(json => {
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

export const pauseSong = () => {
  return {
    type: PAUSE_SONG
  }
}

export const resumePlay = () => {
  return {
    type: RESUME_PLAY
  }
}

const playSongAction = (song, player) => {
  return {
    type: PLAY_SONG,
    payload: song,
    player
  }
}

export const playSong = (song) => {
  return dispatch => {
    dispatch(stopPlay());
    SC.stream(`/tracks/${song.id}`).then(player => {
      player.play();
      player.on('finish', () => {console.log('finished!');});
      dispatch(playSongAction(song, player))
    });
  }
}

export const playNext = (song) => {
  return dispatch => {
    dispatch(playSong(song));
  }
}

export const stopPlay = () => {
  return {
    type: STOP_PLAY
  }
}