import {HANDLE_FETCH, HANDLE_SUBMIT} from '../actions/types';

const initialState = {
  recipes: [],
  query: ''
};

export default function(state = initialState, action){
  switch(action.type){
    case HANDLE_FETCH:
      return {
        ...state,
        recipes: action.payload
      }
    case HANDLE_SUBMIT:
      return {
        ...state,
        query: action.payload
      }
      default: 
        return state
  }
}