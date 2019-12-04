import React from 'react';
import './App.css';
import Search from './components/Search';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import {Provider} from 'react-redux';



const App = ({store}) => {
  return (
    <Provider store = {store}>
      <Router>
        <div className = "App">
          <NavBar/>
          <Search />
          <Route path = '/' exact component = {Welcome} /> 
        </div>
      </Router>
    </Provider>
   
  );
}

export default App;
