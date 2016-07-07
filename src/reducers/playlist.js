import { ADD_SONG } from '../constants/ActionTypes';

export default (state = [{id: 10, title: 'first song'}], action) => {
  
  switch (action.type) {
    case ADD_SONG:
      return [...state, action.payload];
    default:
      return state;
  }
};