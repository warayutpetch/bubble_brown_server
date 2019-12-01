var addressController = require('../controllers/AddressController');

module.exports = function (app) {

    app.post('/address/getProvinceBy', function (req, res) {
        console.log('/address/getProvinceBy', req.body)
        addressController.getProvinceBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/address/getAmphurInfoByProviceID', function (req, res) {
        console.log('/address/getAmphurInfoByProviceID', req.body)
        addressController.getAmphurInfoByProviceID(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/address/getDistrictInfoByAmphurID', function (req, res) {
        console.log('/address/getDistrictInfoByAmphurID', req.body)
        addressController.getDistrictInfoByAmphurID(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/address/getZipcodeByDistrictID', function (req, res) {
        console.log('/address/getZipcodeByDistrictID', req.body)
        addressController.getZipcodeByDistrictID(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

}

