import React, { useState, createContext } from "react";
import {CreateRecipe } from '../api/RecipeApi';


export const RecipeContext = createContext({
    setCurrentRecipe: () => null,
    CreateRecipe: () => null,
    currentRecipe: null
});

export const RecipeProvider = ({ children }) => {

    const [createdRecipe, setCreatedRecipe] = useState(null);

    const CreateNewRecipe = async (recipeToBeCreated) => {
        await CreateRecipe(recipeToBeCreated);
    };

    const getCreatedRecipeFormValues = (event) => {
        const { name, value } = event.target;
        setCreatedRecipe({ ...createdRecipe, [name]: value });
    };

    const handleCreatedRecipeSubmit = async (event) => {
        event.preventDefault();
        await CreateNewRecipe(createdRecipe);
    };

    const value = {
        createdRecipe,
        setCreatedRecipe,
        CreateRecipe,
        getCreatedRecipeFormValues,
        handleCreatedRecipeSubmit
    };

    return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
}