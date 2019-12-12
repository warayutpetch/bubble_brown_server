var OrderListController = require('../controllers/OrderListController');

module.exports = function (app) {

    app.post('/order_list/getOrderListMaxCode', function (req, res) {
        console.log('/order_list/getOrderListMaxCode', req.body)
        OrderListController.getOrderListMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order_list/insertOrderList', function (req, res) {
        console.log('/order_list/insertOrderList', req.body)
        OrderListController.insertOrderList(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order_list/getOrderListBy', function (req, res) {
        console.log('/order_list/getOrderListBy', req.body)
        OrderListController.getOrderListBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order_list/getOrderListByOrderCode', function (req, res) {
        console.log('/order_list/getOrderListByOrderCode', req.body)
        OrderListController.getOrderListByOrderCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/order_list/deleteOrderListByCode', function (req, res) {
        console.log('/order_list/deleteOrderListByCode', req.body)
        OrderListController.deleteOrderListByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

//     app.post('/user/insertUserBy', function (req, res) {
//         console.log('/user/insertUserBy', req.body)
//         userController.insertUserBy(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })

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