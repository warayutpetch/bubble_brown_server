var generationController = require('../controllers/WashingMachineGennerationController');

module.exports = function (app) { 

    app.post('/machine-generation/getWashingMachineGenerationBy', function (req, res) {    
        console.log('/machine-generation/getWashingMachineGenerationBy',req.body)
        generationController.getWashingMachineGenerationBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-generation/getWashingMachineGenerationMaxCode', function (req, res) {    
        console.log('/machine-generation/getWashingMachineGenerationMaxCode',req.body)
        generationController.getWashingMachineGenerationMaxCode(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/machine-generation/insertGenerationBy', function (req, res) {    
        console.log('/machine-generation/insertGenerationBy',req.body)
        generationController.insertGenerationBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-generation/getGenerationByCode', function (req, res) {
        console.log('/machine-generation/getGenerationByCode', req.body)
        generationController.getGenerationByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-generation/updateGenerationBy', function (req, res) {
        console.log('/machine-generation/updateGenerationBy', req.body)
        generationController.updateGenerationBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-generation/deleteByCode', function (req, res) {
        console.log('/machine-generation/deleteByCode', req.body)
        generationController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   
}