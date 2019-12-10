import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Recipes from './Recipes';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {useHistory, withRouter} from 'react-router-dom';
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
        <Input 
          type = "text"
          onChange = {updateSearch}
          value = {search}
        />
        <Button variant = "contained" color = "secondary" disabled = {!search ? true : false}>Search -- I'm hungry!</Button>
      </form>
      
      <Recipes/>
    </div>
  )
}

const mapStateToProps = state => ({
  query: state.results.query
})

// export default withRouter(Search);
export default withRouter(connect(mapStateToProps, {fetchRecipes, setQuery})(Search));