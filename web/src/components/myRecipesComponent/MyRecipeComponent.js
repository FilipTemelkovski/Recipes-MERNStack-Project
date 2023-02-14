import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Create } from './CreateRecipeButton';
import axios from 'axios';
import { URL, RECIPES } from "../../config/Config";

export const MyRecipeComponent = () => {

  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   async function getRecipes() {
  //     const response = await axios.get(`${URL}${RECIPES}/recipes`);
  //     setRecipes(response.data);
  //   }
  //   getRecipes();
  // }, []);

  return (
    <div>
      <div>
        <div><h1>My Recipes</h1></div>
        <div>
          <Link to="/CreateRecipe"><button><Create /></button></Link>
        </div>
      </div>
      {/* <ul>
      {recipes.map(recipe => (
        <li key={recipe._id}>{recipe.name}</li>
      ))}
    </ul> */}
    </div>
  )
}
