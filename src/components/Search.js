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

const Search = (props) => {
  //Search state
  const [search, setSearch] = useState('');

  //Edamam app ID & Key
  const appID = "91f4a4a3";
  const appKey = "e21f772a7044945e7fa814b009bd64c5"; 

  let history = useHistory();

  //[query] causes useEffect to run after "query" is updated on form submit 
  // useEffect(() => {
  //   const recipeFetch = async () => {
  //     const res = await fetch(edamamResults);
  //     const data = await res.json();
  //     console.log(data.hits);
  //     setRecipes(data.hits);
  //     console.log(data);
  //   };
  //   recipeFetch();
  // }, [query]);

  useEffect(() => {
    props.fetchRecipes(props.query)
  }, [props.query]);

  //Update local state for search
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search.length)
    console.log(search)
  };
 
  //To handle search submission for search
  const handleSearch = e => {
    e.preventDefault();
    // setQuery(search); //Replace with action
    props.setQuery(search)
    props.history.push(`/${search}`)
    // history.push(`/${search}`)
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
        <Button variant = "contained" disabled = {!search ? true : false}>Search -- I'm hungry!</Button>
      </form>
      
      {/*<Recipes recipes = {recipes} /> */}
      <Recipes  />
    </div>
  )
}

const mapStateToProps = state => ({
  recipes: state.results.recipes,
  query: state.results.query
})

// export default withRouter(Search);
export default withRouter(connect(mapStateToProps, {fetchRecipes, setQuery})(Search));