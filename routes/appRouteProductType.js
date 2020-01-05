var ProductTypeController = require('../controllers//ProductTypeController');

module.exports = function (app) {

    app.post('/product_type/getProductTypeBy', function (req, res) {
        console.log('/product_type/getProductTypeBy', req.body)
        ProductTypeController.getProductTypeBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/product_type/insertProductType', function (req, res) {
        console.log('/product_type/insertProductType', req.body)
        ProductTypeController.insertProductType(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/product_type/getProductTypeByCol', function (req, res) {
        console.log('/product_type/getProductTypeByCol', req.body)
        ProductTypeController.getProductTypeByCol(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/product_type/updateProductType', function (req, res) {
        console.log('/product_type/updateProductType', req.body)
        ProductTypeController.updateProductType(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/product_type/deleteProductTypeByCode', function (req, res) {
        console.log('/product_type/deleteProductTypeByCode', req.body)
        ProductTypeController.deleteProductTypeByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })    
}