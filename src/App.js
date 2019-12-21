import React from 'react';
import './App.css';
import {Router, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import {Provider} from 'react-redux';
import store from './store';
import Recipes from './components/Recipes';
import history from './appHistory';

const App = () => {
  return (
    <Provider store = {store}>
      <Router history = {history}>
        <div className = "App">
          <NavBar/>
          <Route exact path = '/' component = {Welcome} /> 
          <Recipes />
        </div>
      </Router>
    </Provider>
   
  );
}

export default App;
