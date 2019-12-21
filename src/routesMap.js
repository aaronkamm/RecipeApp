import {HANDLE_FETCH} from './actions/types';

const appID = "91f4a4a3";
const appKey = "e21f772a7044945e7fa814b009bd64c5";

const searchThunk = async(dispatch, getState) => {
  const query = getState().location.payload;
  const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`);
  const result = await data.json();
  const action = {type: HANDLE_FETCH, payload: {result}}

  dispatch(action)
}

const routesMap = {
  HOME: '/',
  HANDLE_FETCH: {path: '/:query', thunk: searchThunk}
  
}

export default routesMap;