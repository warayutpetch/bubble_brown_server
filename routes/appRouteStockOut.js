var StockOutController = require('../controllers/StockOutController');

module.exports = function (app) {

    
    app.post('/stockout/insertStockOutByOrder', function (req, res) {
        console.log('/stockout/insertStockOutByOrder', req.body)
        StockOutController.insertStockOutByOrder(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/stockout/deleteStockOutByOrderCode', function (req, res) {
        console.log('/stockout/deleteStockOutByOrderCode', req.body)
        StockOutController.deleteStockOutByOrderCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
  
}