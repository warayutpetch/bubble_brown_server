var washingmachinebrandController = require('../controllers/WashingMachineBrandController');

module.exports = function (app) { 

    app.post('/machine-brand/getWashingMachineBrandBy', function (req, res) {    
        console.log('/machine-brand/getWashingMachineBrandBy',req.body)
        washingmachinebrandController.getWashingMachineBrandBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-brand/getWashingMachineBrandMaxCode', function (req, res) {    
        console.log('/machine-brand/getWashingMachineBrandMaxCode',req.body)
        washingmachinebrandController.getWashingMachineBrandMaxCode(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/machine-brand/insertBrandBy', function (req, res) {    
        console.log('/machine-brand/insertBrandBy',req.body)
        washingmachinebrandController.insertBrandBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-brand/getBrandByCode', function (req, res) {
        console.log('/machine-brand/getBrandByCode', req.body)
        washingmachinebrandController.getBrandByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-brand/updateBrandBy', function (req, res) {
        console.log('/machine-brand/updateBrandBy', req.body)
        washingmachinebrandController.updateBrandBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/machine-brand/deleteByCode', function (req, res) {
        console.log('/machine-brand/deleteByCode', req.body)
        washingmachinebrandController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   
}