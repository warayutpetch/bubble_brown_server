var OmisePaymentController = require('../controllers/OmisePaymentController');

module.exports = function (app) {


    app.post('/omise-payment/checkoutinternetBanking', function (req, res) {
        console.log('/omise-payment/checkoutinternetBanking', req.body)
        OmisePaymentController.checkoutinternetBanking(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.get('/omise-payment/getOmiseReturnUri', function (req, res) {
        console.log('/omise-payment/getOmiseReturnUri', req.body)
        // OmisePaymentController.getOmiseReturnUri(req.body, function (err, task) {

        //     if (err) {
        //         res.send(err);
        //     }
        //     res.send(task);
        // });
    })
    app.post('/omise-payment/omiseWebHooks', function (req, res) {
        console.log('/omise-payment/omiseWebHooks')
        OmisePaymentController.omiseWebHooks(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

}