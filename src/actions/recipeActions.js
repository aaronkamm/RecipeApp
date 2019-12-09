import {HANDLE_FETCH, HANDLE_SUBMIT } from './types';

const appID = "91f4a4a3";
const appKey = "e21f772a7044945e7fa814b009bd64c5"; 

// const edamamResults = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`;

export const fetchRecipes = (query) => dispatch => {
  fetch(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`)
    .then(res => res.json())
    .then(data => dispatch({
      type: HANDLE_FETCH,
      payload: data.hits
    }))
};

export const setQuery = (search) => dispatch => {
  dispatch({
    type: HANDLE_SUBMIT,
    payload: search
  })
};