const recipeModel = require('../model/recipes');

const deleteRecipe = async (recipeId) => {
    return await recipeModel.deleteOne({_id: recipeId});
};

const updateRecipe = async (recipeId, recipeForUpdating) => {
    return await recipeModel.updateOne({_id: recipeId}, recipeForUpdating);
};

const getAllRecipesByCaterogy = async (recipeCaterogy) => {   
    return await recipeModel.find({ category: recipeCaterogy });
};

const findRecipeById = async (recipeId) => {
    return await recipeModel.findById({_id: recipeId});
};

const getAllRecipes = async () => {
    return await recipeModel.find({});
};

const createRecipe = async (recipeForCreating) => {
    const newRecipe = new recipeModel(recipeForCreating);
    return await newRecipe.save();
};

module.exports = {
    deleteRecipe,
    updateRecipe,
    getAllRecipesByCaterogy,
    findRecipeById,
    getAllRecipes,
    createRecipe
}