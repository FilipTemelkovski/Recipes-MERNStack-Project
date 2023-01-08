const mongoose = require('mongoose');

const recipes = mongoose.model(
    "recipes",
    {
        title:{type: String, required: true},
        category: {type: String, required: true},
        prepTime: {type: Number, required: true},
        people: {type: Number, required: true},
        shortDescription: {type: String, required: true},
        recipeDetails: {type: String, required: true},
        stars: {type: Number, required: true},
        date: {type: Date, required: true},
        userId: {type: String, required: false}
    },
    "recipesCollection"
)

module.exports = recipes;
    
