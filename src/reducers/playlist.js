import { ADD_SONG, PAUSE_SONG, PLAY_SONG, STOP_PLAY } from '../constants/ActionTypes';
const initialState = {
  songList: [{title:1, id:46885926}],
  currSong: null,
  isPlaying: false,
  player: null
}
export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_SONG:
      return Object.assign({}, state, {
        songList: [...state.songList, action.payload]
      })
    case PAUSE_SONG:
      if (state.player) {
        state.player.pause();
      }
      return Object.assign({}, state, {
        isPlaying: false
      })
    case PLAY_SONG:
      return Object.assign({}, state, {
        currSong: action.payload,
        isPlaying: true,
        player: action.player
      })
    case STOP_PLAY:
      if (state.player) {
        state.player.pause();
      }
      return Object.assign({}, state, {
        player: null,
        isPlaying: false
      })
    default:
      return state;
  }
};