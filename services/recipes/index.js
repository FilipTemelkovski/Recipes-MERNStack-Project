const recipes = require('./handlers/index');
const connectDB = require("../../pkg/database/index");
const express = require('express');
const config = require('../../pkg/config');
const cors = require('cors');
const morgan = require('morgan');

const { recipes: { port } } = config.getConfigPropertyValue("services");

connectDB();


const app = express();


app.use(express.json());

app.use(morgan("tiny"));

app.use(cors());


app.get("/api/v1/recipes", recipes.getAllRecipes);
app.delete("/api/v1/recipes/deleteRecipe", recipes.deleteRecipe);
app.get("/api/v1/recipes/findRecipesById", recipes.findRecipeById);
app.put("/api/v1/recipes/updateRecipe", recipes.updateRecipe);
app.get("/api/v1/recipes/findRecipesByCaterogy", recipes.getAllRecipesByCaterogy);
app.post("/api/v1/recipes/createRecipe", recipes.createNewRecipe);


app.listen(port, (err) => {
  if (err) {
    throw new Error(
      `Cannot start server running on http://localhost:${port}`,
      err
    );
  }
  
  console.log(`Recipes server running on http://localhost:${port}`);
});