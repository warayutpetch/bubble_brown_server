var MenuTypeController = require('../controllers/MenuTypeController');

module.exports = function (app) {

    app.post('/menutype/getMenuTypeBy', function (req, res) {
        console.log('/menutype/getMenuTypeBy', req.body)
        MenuTypeController.getMenuTypeBy(req.body, function (err, task) {

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