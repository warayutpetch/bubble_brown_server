var OrderCencelController = require('../controllers/OrderCencelController');

module.exports = function (app) {

    app.post('/ordercencel/getOrderCencelBy', function (req, res) {
        console.log('/ordercencel/getOrderCencelBy', req.body)
        OrderCencelController.getOrderCencelBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

}