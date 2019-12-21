import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import {Provider} from 'react-redux';
import store, {history} from './store';
import Recipes from './components/Recipes';

const App = () => {
  return (
    <Provider store = {store}>
      <ConnectedRouter history = {history}>
        <div className = "App">
          
          <NavBar/>
          <Route exact path = '/' component = {Welcome} /> 
          <Recipes />
        </div>
      </ConnectedRouter>
    </Provider>
   
  );
}

export default App;
