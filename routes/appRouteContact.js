var ContactController = require('../controllers/ContactController');

module.exports = function (app) {

    app.post('/contact/getContactBy', function (req, res) {
        console.log('/contact/getContactBy', req.body)
        ContactController.getContactBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/contact/getContactByCode', function (req, res) {
        console.log('/contact/getContactByCode', req.body)
        ContactController.getContactByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    

    app.post('/contact/deleteByCode', function (req, res) {
        console.log('/contact/deleteByCode', req.body)
        ContactController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })


}