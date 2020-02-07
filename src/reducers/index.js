import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import { connectRouter } from 'connected-react-router';

// export default combineReducers({
//   results: recipeReducer
// })
const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    results: recipeReducer
  });

export default createRootReducer;
