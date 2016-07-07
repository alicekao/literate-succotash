import { ADD_SONG, PAUSE_SONG, PLAY_SONG } from '../constants/ActionTypes';
const initialState = {
  songList: [{title:1}],
  currSong: null,
  isPlaying: false
}
export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_SONG:
      return Object.assign({}, state, {
        songList: [...state.songList, action.payload]
      })
    case PAUSE_SONG:
      return Object.assign({}, state, {
        isPlaying: false
      })
    case PLAY_SONG:
      return Object.assign({}, state, {
        currSong: action.payload,
        isPlaying: true
      })
    default:
      return state;
  }
};