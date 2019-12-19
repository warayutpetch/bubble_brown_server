var userController = require('../controllers/UserController');

module.exports = function (app) {

    app.post('/user/getUserBy', function (req, res) {
        console.log('/user/getUserBy', req.body)
        userController.getUserBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    // app.post('/user/getUserLoginBy', function (req, res) {
    //     console.log('/user/getUserLoginBy', req.body)
    //     userController.getUserLoginBy(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    app.post('/user/getUserMaxCode', function (req, res) {
        console.log('/user/getUserMaxCode', req.body)
        userController.getUserMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/user/insertUserBy', function (req, res) {
        console.log('/user/insertUserBy', req.body)
        userController.insertUserBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/user/updateUserByCode', function (req, res) {
        console.log('/user/updateUserByCode', req.body)
        userController.updateUserByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/user/deleteUserByCode', function (req, res) {
        console.log('/user/deleteUserByCode', req.body)
        userController.deleteUserByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/user/getUserByCode', function (req, res) {
        console.log('/user/getUserByCode', req.body)
        userController.getUserByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
}