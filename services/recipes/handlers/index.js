const recipesRepo = require('../../../pkg/repo/recipesRepo');

const getAllRecipes = async (request, response) => {
    try { 
        const recipesData = await recipesRepo.getAllRecipes();
        return response.status(200).send(recipesData);
    } catch (err) {
        
        return response.status(err.status).send(err.message);
    }
};

const getAllRecipesByCaterogy = async (request, response) => {
    try {
        const recipesData = await recipesRepo.getAllRecipesByCaterogy();
        return response.status(200).send(recipesData);

    } catch (err) {
        
        return response.status(err.status).send(err.message);
    }
};

const createNewRecipe = async (request, response) => {
    try {
        
        const newRecipe = await recipesRepo.createRecipe(request.body);
        return response.status(201).send(newRecipe);

    } catch (err) {
        
        return response.status(err.status).send(err.message);
    }
};

const findRecipeById = async (request, response) => {
    try {
        const recipeById = await recipesRepo.findRecipeById(request.body._id);
        return response.status(200).send(recipeById);

    } catch (err) {
        
        return response.status(err.status).send(err.message);
    }
};

const deleteRecipe = async (request, response) => {
    try {
        const recipeData = await recipesRepo.deleteRecipe(request.body._id);
        return response.status(200).send(recipeData);

    } catch (err) {
       
        return response.status(err.status).send(err.message);
    }
};

const updateRecipe = async (request, response) => {
    try {
        const recipeData = await recipesRepo.updateRecipe(request.body._id , request.body);
        return response.status(200).send(recipeData);

    } catch (err) {
       
        return response.status(err.status).send(err.message);
    }
};


module.exports = {
    getAllRecipes,
    getAllRecipesByCaterogy,
    createNewRecipe,
    findRecipeById,
    deleteRecipe,
    updateRecipe
}
