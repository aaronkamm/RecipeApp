import {HANDLE_FETCH} from '../actions/types';

const initialState = {
  // search: '',
  recipes: [],
  query: '',
  search: ''
};

export default function(state = initialState, action){
  switch(action.type){
    case HANDLE_FETCH:
      return {
        ...state,
        recipes: action.payload
      }
      default: 
        return state
  }
}