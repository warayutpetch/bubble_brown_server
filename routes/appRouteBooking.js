var BookingController = require('../controllers/BookingController');

module.exports = function (app) {

    app.post('/booking/getBookingMaxCode', function (req, res) {
        console.log('/booking/getBookingMaxCode', req.body)
        BookingController.getBookingMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/booking/insertBooking', function (req, res) {
        console.log('/booking/insertBooking', req.body)
        BookingController.insertBooking(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   
}