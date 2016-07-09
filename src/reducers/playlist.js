import {
  ADD_SONG, 
  PAUSE_SONG, 
  PLAY_SONG, 
  STOP_PLAY, 
  PLAY_NEXT,
  RESUME_PLAY
} from '../constants/ActionTypes';

const initialState = {
  songList: [],
  currSong: null,
  isPlaying: false,
  player: null
};

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_SONG:
      return Object.assign({}, state, {
        songList: [...state.songList, action.payload]
      })
    case PAUSE_SONG:
      if (state.player && state.isPlaying) {
        state.player.pause();
      }
      return Object.assign({}, state, {
        isPlaying: false
      });
    case RESUME_PLAY:
      if (state.player) {
        state.player.play();
      }
      return Object.assign({}, state, {
        isPlaying: true
      });
    case PLAY_SONG:
      return Object.assign({}, state, {
        currSong: action.payload,
        isPlaying: true,
        player: action.player
      });
    case STOP_PLAY:
      if (state.player) {
        state.player.pause();
      }
      return Object.assign({}, state, {
        player: null,
        isPlaying: false
      });
    default:
      return state;
  }
};