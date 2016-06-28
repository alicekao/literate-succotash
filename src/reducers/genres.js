import { CHANGE_GENRE } from '../constants/ActionTypes.js';

export default function (state = 'jazz', action) {
  console.log(action.type, action.text);
  switch (action.type) {
    case CHANGE_GENRE:
      return action.text;
    default:
      return state
  }
}