var programController = require('../controllers/WashingMachineProgramController');

module.exports = function (app) { 

    app.post('/machine-program/getWashingMachineProgramBy', function (req, res) {    
        console.log('/machine-program/getWashingMachineProgramBy',req.body)
        programController.getWashingMachineProgramBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-program/getWashingMachineProgramMaxCode', function (req, res) {    
        console.log('/machine-program/getWashingMachineProgramMaxCode',req.body)
        programController.getWashingMachineProgramMaxCode(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/machine-program/insertProgramBy', function (req, res) {    
        console.log('/machine-program/insertProgramBy',req.body)
        programController.insertProgramBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-program/getProgramByCode', function (req, res) {
        console.log('/machine-program/getProgramByCode', req.body)
        programController.getProgramByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-program/updateProgramBy', function (req, res) {
        console.log('/machine-program/updateProgramBy', req.body)
        programController.updateProgramBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-program/deleteByCode', function (req, res) {
        console.log('/machine-program/deleteByCode', req.body)
        programController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   
}