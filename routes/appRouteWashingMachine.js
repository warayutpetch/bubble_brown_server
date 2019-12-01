var WashingMachineController = require('../controllers/WashingMachineController');

module.exports = function (app) {


    app.post('/washing-machine/getWashingMachineMaxCode', function (req, res) {
        console.log('/washing-machine/getWashingMachineMaxCode')
        WashingMachineController.getWashingMachineMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/washing-machine/insertWashingMachineByCode', function (req, res) {
        console.log('/washing-machine/insertWashingMachineByCode')
        WashingMachineController.insertWashingMachineByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/washing-machine/getWashingMachineByCode', function (req, res) {
        console.log('/washing-machine/getWashingMachineByCode')
        WashingMachineController.getWashingMachineByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/washing-machine/getWashingMachineBy', function (req, res) {
        console.log('/washing-machine/getWashingMachineBy')
        WashingMachineController.getWashingMachineBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/washing-machine/getWashingMachineByLaundryCode', function (req, res) {
        console.log('/washing-machine/getWashingMachineByLaundryCode')
        WashingMachineController.getWashingMachineByLaundryCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/washing-machine/updateWashingMachineByCode', function (req, res) {
        console.log('/washing-machine/updateWashingMachineByCode')
        WashingMachineController.updateWashingMachineByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
}

