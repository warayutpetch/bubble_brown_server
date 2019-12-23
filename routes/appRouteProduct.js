var ProductController = require('../controllers/ProductController');

module.exports = function (app) {

    app.post('/product/getProductBy', function (req, res) {
        console.log('/product/getProductBy', req.body)
        ProductController.getProductBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/product/updateProductCost', function (req, res) {
        console.log('/product/updateProductCost', req.body)
        ProductController.updateProductCost(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    
}