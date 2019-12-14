import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import {Provider} from 'react-redux';
import store from './store';
import Recipes from './components/Recipes';

const App = () => {
  return (
    <Provider store = {store}>
      <Router>
        <div className = "App">
          <NavBar/>
          <Route path = '/' exact component = {Welcome} /> 
          <Recipes/>
        </div>
      </Router>
    </Provider>
   
  );
}

export default App;
