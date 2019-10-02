import React from 'react';

const Recipes = ({recipes}) => (
  <div>
    {recipes.map((recipe, index) => <div key = {index}>{recipe.recipe.label}</div>)}
  </div>
)

export default Recipes;
