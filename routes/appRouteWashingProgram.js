var WashingProgramController = require('../controllers/WashingProgramController');

module.exports = function (app) {

    app.post('/program/getWashingProgramByMachineCode', function (req, res) {
        console.log('/program/getWashingProgramByMachineCode')
        WashingProgramController.getWashingProgramByMachineCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/program/getWashingProgramByProgramCode', function (req, res) {
        console.log('/program/getWashingProgramByProgramCode')
        WashingProgramController.getWashingProgramByProgramCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/program/updatePriceProgrameByCode', function (req, res) {
        console.log('/program/updatePriceProgrameByCode')
        WashingProgramController.updatePriceProgrameByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

}

