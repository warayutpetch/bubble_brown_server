var StockController = require('../controllers/StockController');

module.exports = function (app) {

    app.post('/stock/getStockBy', function (req, res) {
        console.log('/stock/getStockBy', req.body)
        StockController.getStockBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/stock/getProductBy', function (req, res) {
        console.log('/stock/getProductBy', req.body)
        StockController.getProductBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/stock/getSumStockInBy', function (req, res) {
        console.log('/stock/getSumStockInBy', req.body)
        StockController.getSumStockInBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/stock/getSumStockOutBy', function (req, res) {
        console.log('/stock/getSumStockOutBy', req.body)
        StockController.getSumStockOutBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/stock/getStockByProduct', function (req, res) {
        console.log('/stock/getStockByProduct', req.body)
        StockController.getStockByProduct(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/stock/getStockMaxCode', function (req, res) {
        console.log('/stock/getStockMaxCode', req.body)
        StockController.getStockMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/stock/insertStock', function (req, res) {
        console.log('/stock/insertStock', req.body)
        StockController.insertStock(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/stock/deleteStockByCode', function (req, res) {
        console.log('/stock/deleteStockByCode', req.body)
        StockController.deleteStockByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/stock/updateStock', function (req, res) {
        console.log('/stock/updateStock', req.body)
        StockController.updateStock(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/stock/deleteByCode', function (req, res) {
        console.log('/stock/deleteByCode', req.body)
        StockController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
  
    app.post('/stock/getStockByCode', function (req, res) {
        console.log('/stock/getStockByCode', req.body)
        StockController.getStockByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
  
    app.post('/stock/getStockByPriceQty', function (req, res) {
        console.log('/stock/getStockByPriceQty', req.body)
        StockController.getStockByPriceQty(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/stock/deleteStockBy', function (req, res) {
        console.log('/stock/deleteStockBy', req.body)
        StockController.deleteStockBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
  
}