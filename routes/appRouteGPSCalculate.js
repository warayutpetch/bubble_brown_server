var GPSCalculateController = require('../controllers/GPSCalculateController');

module.exports = function (app) {

    app.post('/gps/getGPS', function (req, res) {
        console.log('/gps/getGPS', req.body)
        GPSCalculateController.getGPS(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}