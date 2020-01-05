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

    app.post('/menutype/insertMenuType', function (req, res) {
        console.log('/menutype/insertMenuType', req.body)
        MenuTypeController.insertMenuType(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/menutype/getMenuTypeByCol', function (req, res) {
        console.log('/menutype/getMenuTypeByCol', req.body)
        MenuTypeController.getMenuTypeByCol(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/menutype/updateMenuType', function (req, res) {
        console.log('/menutype/updateMenuType', req.body)
        MenuTypeController.updateMenuType(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/menutype/deleteMenuTypeByCode', function (req, res) {
        console.log('/menutype/deleteMenuTypeByCode', req.body)
        MenuTypeController.deleteMenuTypeByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
}