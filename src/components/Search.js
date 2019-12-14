import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Recipes from './Recipes';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchRecipes, setQuery} from '../actions/recipeActions';

const useStyles = makeStyles({
  search: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Search = ({query, fetchRecipes, setQuery, history}) => {
  //Search state
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRecipes(query)
  }, [query]);

  //Update local search state
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search.length)
    console.log(search)
  };
 
  //To handle search submission for search
  const handleSearch = e => {
    e.preventDefault();
    setQuery(search)
    history.push(`/${search}`)
    setSearch('');
  };

  const classes = useStyles();

  return(
    <div>
      <form onSubmit = {handleSearch} className = {classes.search}>
        <TextField 
          onChange = {updateSearch}
          value = {search}
          placeholder = 'Recipe'
        />
        <Button type = 'submit' variant = "contained" color = "secondary" disabled = {!search ? true : false}>Search -- I'm hungry!</Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  query: state.results.query
})

// export default withRouter(Search);
export default withRouter(connect(mapStateToProps, {fetchRecipes, setQuery})(Search));