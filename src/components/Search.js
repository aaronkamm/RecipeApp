import React, {useEffect, useState} from 'react';
import Recipes from './Recipes';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Search = () => {
  //Search state
  const [search, setSearch] = useState(null);
  //Queried recipes state
  const [recipes, setRecipes] = useState([]);
  //Final/submittied query state
  const [query, setQuery] = useState('');

  //Edamam app ID & Key
  const appID = "91f4a4a3";
  const appKey = "e21f772a7044945e7fa814b009bd64c5"; 

  //Chicken search query example
  const edamamResults = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`;

  //[query] causes useEffect to run after "query" is updated on form submit
  useEffect(() => {
    const recipeFetch = async() => {
      const res = await fetch(edamamResults);
      const data = await res.json();
      // console.log(data.hits);
      setRecipes(data.hits);
      console.log(data.hits);
      console.log('hello');
    };
    recipeFetch();
  }, [query]);

  //Update state for search 
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  //To handle form submission for search
  const handleSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    <div>
      <form onSubmit = {handleSearch}>
        <Input 
          type = "text"
          onChange = {updateSearch}
          value = {search}
        />
        <Button variant = "contained">Search -- I'm hungry!</Button>
      </form>
      {/*{recipes.map(recipe => <div>{recipe.recipe.label}</div>)}*/}
      <Recipes recipes = {recipes} />
    </div>
  )
}

export default Search;