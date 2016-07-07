import { REQUEST_SONGS, RECEIVE_SONGS } from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  songs: []
}

// A reducer is a pure fn that takes the previous state and an action and computes the next state
export default function songs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SONGS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SONGS:
      return Object.assign({}, state, {
        isFetching: false,
        songs: action.data
      })
    default:
      return state
  }
};