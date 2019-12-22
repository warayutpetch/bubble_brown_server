var RecipeController = require('../controllers/RecipeController');

module.exports = function (app) {

    app.post('/recipe/getRecipeByCode', function (req, res) {
        console.log('/recipe/getRecipeByCode', req.body)
        RecipeController.getRecipeByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/recipe/getRecipeMaxCode', function (req, res) {
        console.log('/recipe/getRecipeMaxCode', req.body)
        RecipeController.getRecipeMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/recipe/insertRecipe', function (req, res) {
        console.log('/recipe/insertRecipe', req.body)
        RecipeController.insertRecipe(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/recipe/deleteRecipeByCode', function (req, res) {
        console.log('/recipe/deleteRecipeByCode', req.body)
        RecipeController.deleteRecipeByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

  
}