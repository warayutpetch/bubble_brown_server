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

   
    
}