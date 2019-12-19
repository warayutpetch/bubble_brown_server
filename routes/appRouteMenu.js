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

//     app.post('/menu/getMenuLoginBy', function (req, res) {
//         console.log('/menu/getMenuLoginBy', req.body)
//         menuController.getMenuLoginBy(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })

    app.post('/menu/getMenuMaxCode', function (req, res) {
        console.log('/menu/getMenuMaxCode', req.body)
        menuController.getMenuMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/menu/insertMenu', function (req, res) {
        console.log('/menu/insertMenu', req.body)
        menuController.insertMenu(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

//     app.post('/menu/updateMenuBy', function (req, res) {
//         console.log('/menu/updateMenuBy', req.body)
//         menuController.updateMenuBy(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })

    app.post('/menu/deleteMenuByCode', function (req, res) {
        console.log('/menu/deleteMenuByCode', req.body)
        menuController.deleteMenuByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

//     app.post('/menu/getMenuByCode', function (req, res) {
//         console.log('/menu/getMenuByCode', req.body)
//         menuController.getMenuByCode(req.body, function (err, task) {

//             if (err) {
//                 res.send(err);
//             }
//             // console.log('res', task);
//             res.send(task);
//         });
//     })
}