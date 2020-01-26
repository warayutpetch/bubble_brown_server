var OrderController = require('../controllers/OrderController');

module.exports = function (app) {

    app.post('/order/getOrderMaxCode', function (req, res) {
        console.log('/order/getOrderMaxCode', req.body)
        OrderController.getOrderMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/insertOrder', function (req, res) {
        console.log('/order/insertOrder', req.body)
        OrderController.insertOrder(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/order/updateOrder', function (req, res) {
        console.log('/order/updateOrder', req.body)
        OrderController.updateOrderBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/order/getOrderBy', function (req, res) {
        console.log('/order/getOrderBy', req.body)
        OrderController.getOrderBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/getOrderByCode', function (req, res) {
        console.log('/order/getOrderByCode', req.body)
        OrderController.getOrderByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/getOrderByAboutCode', function (req, res) {
        console.log('/order/getOrderByAboutCode', req.body)
        OrderController.getOrderByAboutCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/getOrderByOrderCode', function (req, res) {
        console.log('/order/getOrderByOrderCode', req.body)
        OrderController.getOrderByOrderCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/updateOrderByCode', function (req, res) {
        console.log('/order/updateOrderByCode', req.body)
        OrderController.updateOrderByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/getRecipeByMenu', function (req, res) {
        console.log('/order/getRecipeByMenu', req.body)
        OrderController.getRecipeByMenu(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/insertRecipeByOrder', function (req, res) {
        console.log('/order/insertRecipeByOrder', req.body)
        OrderController.insertRecipeByOrder(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/Payment', function (req, res) {
        console.log('/order/Payment', req.body)
        OrderController.Payment(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/updateConfirmOrder', function (req, res) {
        console.log('/order/updateConfirmOrder', req.body)
        OrderController.updateConfirmOrder(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/updateCencelOrder', function (req, res) {
        console.log('/order/updateCencelOrder', req.body)
        OrderController.updateCencelOrder(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/updateRevisedByCode', function (req, res) {
        console.log('/order/updateRevisedByCode', req.body)
        OrderController.updateRevisedByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order/getOrderRevisedNum', function (req, res) {
        console.log('/order/getOrderRevisedNum', req.body)
        OrderController.getOrderRevisedNum(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/order/getOrderByCusOld', function (req, res) {
        console.log('/order/getOrderByCusOld', req.body)
        OrderController.getOrderByCusOld(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })


}