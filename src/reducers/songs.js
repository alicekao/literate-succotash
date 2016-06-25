import { ADD_SONG } from '../constants/ActionTypes';

const initialState = [
  {
    id: 1,
    title: 'alice\'s song',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUxD0lz4oBMCi9q3BbGARq_uTSFN0YVrxo1iyt2bOPLMOU0VL_-3LEnlX6'
  },
  {
    id: 2,
    title: 'bob\'s song',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUxD0lz4oBMCi9q3BbGARq_uTSFN0YVrxo1iyt2bOPLMOU0VL_-3LEnlX6'
  }
];

// A reducer is a pure fn that takes the previous state and an action and computes the next state
export default function songs(state = initialState, action) {
  switch (action.type) {
    case ADD_SONG:
      return [
        ...state, action.payload
      ]
    default:
      return state;
  }
};