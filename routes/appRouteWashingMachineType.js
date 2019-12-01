var WashingMachineTypeController = require('../controllers/WashingMachineTypeController');

module.exports = function (app) {


    app.post('/machine-type/getWashingMachineTypeBy', function (req, res) {
        console.log('/machine-type/getWashingMachineTypeBy')
        WashingMachineTypeController.getWashingMachineTypeBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/machine-type/getWashingMachineTypeMaxCode', function (req, res) {    
        console.log('/machine-type/getWashingMachineTypeMaxCode',req.body)
        WashingMachineTypeController.getWashingMachineTypeMaxCode(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/machine-type/insertTypeBy', function (req, res) {    
        console.log('/machine-type/insertTypeBy',req.body)
        WashingMachineTypeController.insertTypeBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-type/getTypeByCode', function (req, res) {
        console.log('/machine-type/getTypeByCode', req.body)
        WashingMachineTypeController.getTypeByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-type/updateTypeBy', function (req, res) {
        console.log('/machine-type/updateTypeBy', req.body)
        WashingMachineTypeController.updateTypeBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-type/deleteByCode', function (req, res) {
        console.log('/machine-type/deleteByCode', req.body)
        WashingMachineTypeController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
}

