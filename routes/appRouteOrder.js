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

//     app.post('/user/updateUserBy', function (req, res) {
//         console.log('/user/updateUserBy', req.body)
//         userController.updateUserBy(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })

//     app.post('/user/deleteByCode', function (req, res) {
//         console.log('/user/deleteByCode', req.body)
//         userController.deleteByCode(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })

//     app.post('/user/getUserByCode', function (req, res) {
//         console.log('/user/getUserByCode', req.body)
//         userController.getUserByCode(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })
}