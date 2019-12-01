var adminController = require('../controllers/AdminController');

module.exports = function (app) {

    app.post('/admin/checkAdminModelLogin', function (req, res) {
        console.log('/admin/checkAdminModelLogin', req.body)
        adminController.checkAdminModelLogin(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/admin/getAdminby', function (req, res) {
        adminController.getAdminby(function (err, task) {
            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/admin/getAdminMaxCode', function (req, res) {
        adminController.getAdminMaxCode(function (err, task) {
            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/admin/insertAdminBy', function (req, res) {
        adminController.insertAdminBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/admin/getAdminbyCode', function (req, res) {
        adminController.getAdminbyCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/admin/updateAdminBy', function (req, res) {
        adminController.updateAdminBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/admin/deleteAdminBy', function (req, res) {
        adminController.deleteAdminBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
}