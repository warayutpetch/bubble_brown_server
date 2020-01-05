var ZoneController = require('../controllers/ZoneController');

module.exports = function (app) {

    app.post('/zone/getZoneBy', function (req, res) {
        console.log('/zone/getZoneBy', req.body)
        ZoneController.getZoneBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/zone/getZoneByCol', function (req, res) {
        console.log('/zone/getZoneByCol', req.body)
        ZoneController.getZoneByCol(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/zone/insertZone', function (req, res) {
        console.log('/zone/insertZone', req.body)
        ZoneController.insertZone(req.body, function (err, task) {

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

    app.post('/zone/deleteZoneByCode', function (req, res) {
        console.log('/zone/deleteZoneByCode', req.body)
        ZoneController.deleteZoneByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

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