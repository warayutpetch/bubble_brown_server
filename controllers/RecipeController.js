var RecipeModel = require('../models/RecipeModel');
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getRecipeByCode = async function getRecipeByCode(data, result) {
    var recipe = await RecipeModel.getRecipeByCode(data);
    result(recipe);
}

Task.getRecipeMaxCode = async function getRecipeMaxCode(data, result) {
    var recipe = await RecipeModel.getRecipeMaxCode(data);
    result(recipe);
}

Task.insertRecipe = async function insertRecipe(data, result) {
    var recipe = await RecipeModel.insertRecipe(data);
    result(recipe);
}

Task.deleteRecipeByCode = async function deleteRecipeByCode(data, result) {
    var recipe = await RecipeModel.deleteRecipeByCode(data);
    result(recipe);
}

// Task.updateUserBy = async function updateUserBy(data, result) {
//     var user = await userModel.updateUserBy(data);
//     result(user);
// }

// Task.deleteByCode = async function deleteByCode(data, result) {
//     var user = await userModel.deleteByCode(data);
//     result(user);
// }

// Task.getUserByCode = async function getUserByCode(data, result) {
//     var user = await userModel.getUserByCode(data);
//     result(user);
// }
// Task.getUserLoginBy = async function getUserLoginBy(data, result) {
//     var user = await userModel.getUserLoginBy(data);
//     result(user);
// }

module.exports = Task;