import React, {useEffect, useState} from 'react';
import { async } from 'q';


const Search = () => {
  //Edamam app ID & Key
  const appID = "91f4a4a3";
  const appKey = "e21f772a7044945e7fa814b009bd64c5";

  //Chicken search query example
  const query = `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free`;

  //'[]' argument means that useEffect only happens after first time component rendered
  useEffect(() => {
    const queryFetch = async() => {
      const res = await fetch(query);
      const data = await res.json();
      console.log(data);
    };
    
    queryFetch();

  },[]);

  return(
    <div>
      <form>
        <input type = "text" />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Search;