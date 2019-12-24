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

    app.post('/product/getProductMaxCode', function (req, res) {
        console.log('/product/getProductMaxCode', req.body)
        ProductController.getProductMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/product/insertProduct', function (req, res) {
        console.log('/product/insertProduct', req.body)
        ProductController.insertProduct(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/product/getProductByCode', function (req, res) {
        console.log('/product/getProductByCode', req.body)
        ProductController.getProductByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    
    app.post('/product/updateProduct', function (req, res) {
        console.log('/product/updateProduct', req.body)
        ProductController.updateProduct(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/product/deleteByCode', function (req, res) {
        console.log('/product/deleteByCode', req.body)
        ProductController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    
}