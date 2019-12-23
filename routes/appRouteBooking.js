var BookingController = require('../controllers/BookingController');

module.exports = function (app) {

    app.post('/booking/getBookingBy', function (req, res) {
        console.log('/booking/getBookingBy', req.body)
        BookingController.getBookingBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

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

    app.post('/booking/checkBook', function (req, res) {
        console.log('/booking/checkBook', req.body)
        BookingController.checkBook(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/booking/checkTable', function (req, res) {
        console.log('/booking/checkTable', req.body)
        BookingController.checkTable(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
   
}