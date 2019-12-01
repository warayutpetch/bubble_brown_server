var SettingController = require('../controllers/SettingController');

module.exports = function (app) {

   
    app.post('/setting/getSettingByCode', function (req, res) {
        console.log('/setting/getSettingByCode', req.body)
        SettingController.getSettingByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/setting/updateSettingBy', function (req, res) {
        console.log('/setting/updateSettingBy', req.body)
        SettingController.updateSettingBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   

}