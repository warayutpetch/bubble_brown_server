var PaymentController = require('../controllers/PaymentController');

module.exports = function (app) {

    app.post('/payment/insertPayment', function (req, res) {
        console.log('/payment/insertPayment', req.body)
        PaymentController.insertPayment(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   
}