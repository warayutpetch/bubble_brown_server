var customerController = require('../controllers/CustomerController');

module.exports = function (app) {

    app.post('/customer/getCustomerBy', function (req, res) {
        console.log('/customer/getCustomerBy', req.body)
        customerController.getCustomerBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/customer/getCustomerMaxCode', function (req, res) {
        console.log('/customer/getCustomerMaxCode', req.body)
        customerController.getCustomerMaxCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })


    app.post('/customer/insertCustomer', function (req, res) {
        console.log('/customer/insertCustomer', req.body)
        customerController.insertCustomer(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })


    app.post('/customer/updateCustomerByCode', function (req, res) {
        console.log('/customer/updateCustomerByCode', req.body)
        customerController.updateCustomerByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })


    app.post('/customer/getCustomerByCode', function (req, res) {
        console.log('/customer/getCustomerByCode', req.body)
        customerController.getCustomerByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/deleteCustomerByCode', function (req, res) {
        console.log('/customer/deleteCustomerByCode', req.body)
        customerController.deleteCustomerByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/getCustomerByEmail', function (req, res) {
        console.log('/customer/getCustomerByEmail', req.body)
        customerController.getCustomerByEmail(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/getCustomerById', function (req, res) {
        console.log('/customer/getCustomerById', req.body)
        customerController.getCustomerById(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/ChangName', function (req, res) {
        console.log('/customer/ChangName', req.body)
        customerController.ChangName(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/getCustomerByCusId', function (req, res) {
        console.log('/customer/getCustomerByCusId', req.body)
        customerController.getCustomerByCusId(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/ChangeTel', function (req, res) {
        console.log('/customer/ChangeTel', req.body)
        customerController.ChangeTel(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/customer/ChangeEmail', function (req, res) {
        console.log('/customer/ChangeEmail', req.body)
        customerController.ChangeEmail(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

 

    // app.post('/journal/deleteCoverPage', function (req, res) {
    //     console.log('/journal/deleteCoverPage', req.body)
    //     journalController.deleteCoverPage(req.body, function (err, task) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.send(task);
    //     });
    // })
}