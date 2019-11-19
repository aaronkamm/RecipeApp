import React from 'react';
import './App.css';
import Search from './components/Search';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Router>
      <div className = "App">
        <AppBar position = "static">
          <Toolbar>
            <Typography variant = "h4" component = "h1">Recipe Finder</Typography>
          </Toolbar>
        </AppBar>
        <Search />
        <Switch>
          <Route path = '/' exact component = {Welcome} /> 
        </Switch> 
      </div>
    </Router>
   
  );
}

export default App;
