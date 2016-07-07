import { CHANGE_GENRE } from '../constants/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return action.text;
    default:
      return state
  }
};