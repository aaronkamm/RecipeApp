import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer(history),
  initialState,

  applyMiddleware(...middleware, routerMiddleware(history))
);

export default store;
