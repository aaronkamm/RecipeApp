import React, {useEffect, useState} from 'react';


const Search = () => {
  //Search state
  const [search, setSearch] = useState('');
  //Queried recipes state
  const [recipes, setRecipes] = useState([]);
  //Final/submittied query state
  const [query, setQuery] = useState('');


  //Edamam app ID & Key
  const appID = "91f4a4a3";
  const appKey = "e21f772a7044945e7fa814b009bd64c5";

  //Chicken search query example
  const edamamResults = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}&from=0&to=3`;

  //[query] causes useEffect to only run after "query" is updated, so after each form submit
  useEffect(() => {
    recipeFetch();
  }, [query]);
  
  const recipeFetch = async() => {
    const res = await fetch(edamamResults);
    const data = await res.json();
    // console.log(data.hits);
    setRecipes(data.hits);
  };

  //Update state for search
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  //To handle form submission for search 
  const handleSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div>
      <form onSubmit = {handleSearch}>
        <input 
          type = "text"
          onChange = {updateSearch}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Search;