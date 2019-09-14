import React, {useEffect} from 'react';


const Search = () => {
  //Edamam app ID & Key
  const appID = "91f4a4a3";
  const appKey = "e21f772a7044945e7fa814b009bd64c5";

  //Chicken search query example
  const req = "https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}&from=0&to=3&calories=591-722&health=alcohol-free";

  useEffect(() => console.log("UseEffect was called!"))
  
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