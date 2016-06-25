import { CHANGE_GENRE } from '../constants/ActionTypes.js';

export default function (state = 'jazz', action) {
  switch (action.type) {
    case CHANGE_GENRE:
      return state = action.text;
    default:
      return state
  }
}