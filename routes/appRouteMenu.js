var MenuController = require('../controllers/MenuController');

module.exports = function (app) {

    app.post('/menu/getMenuBy', function (req, res) {
        console.log('/menu/getMenuBy', req.body)
        MenuController.getMenuBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/menu/getMenuByCode', function (req, res) {
        console.log('/menu/getMenuByCode', req.body)
        MenuController.getMenuByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

//     app.post('/user/getUserLoginBy', function (req, res) {
//         console.log('/user/getUserLoginBy', req.body)
//         userController.getUserLoginBy(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })

//     app.post('/user/getUserMaxCode', function (req, res) {
//         console.log('/user/getUserMaxCode', req.body)
//         userController.getUserMaxCode(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })

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