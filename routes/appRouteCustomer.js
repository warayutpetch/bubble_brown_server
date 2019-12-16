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
    // app.post('/journal/getJournalByCol', function (req, res) {
    //     console.log('/journal/getJournalByCol', req.body)
    //     journalController.getCoverPageByCol(req.body, function (err, task) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.send(task);
    //     });
    // })


    app.post('/customer/insertCustomer', function (req, res) {
        console.log('/customer/insertCustomer', req.body)
        customerController.insertCustomer(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })


    // app.post('/customer/updateCustomer', function (req, res) {
    //     console.log('/customer/updateCustomer', req.body)
    //     customerController.updateCustomer(req.body, function (err, task) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.send(task);
    //     });
    // })


    // app.post('/customer/getCustomerByCode', function (req, res) {
    //     console.log('/customer/getCustomerByCode', req.body)
    //     customerController.getCustomerByCode(req.body, function (err, task) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.send(task);
    //     });
    // })


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