var repairController = require('../controllers/RepairController');

module.exports = function (app) { 

    app.post('/repair/getRepairBy', function (req, res) {    
        console.log('/repair/getRepairBy',req.body)
        repairController.getRepairBy(req.body, function (err, task) {
            
            if (err){
                res.send(err);
            } 
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/repair/getRepairByCode', function (req, res) {
        console.log('/repair/getRepairByCode', req.body)
        repairController.getRepairByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/repair/updateRepairBy', function (req, res) {
        console.log('/repair/updateRepairBy', req.body)
        repairController.updateRepairBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/repair/deleteByCode', function (req, res) {
        console.log('/repair/deleteByCode', req.body)
        repairController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/repair/getRepairStatusBy', function (req, res) {
        console.log('/repair/getRepairStatusBy', req.body)
        repairController.getRepairStatusBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/repair/updateRepairStatusBy', function (req, res) {
        console.log('/repair/updateRepairStatusBy', req.body)
        repairController.updateRepairStatusBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/repair/getRepairByWashMachineCode', function (req, res) {
        console.log('/repair/getRepairByWashMachineCode', req.body)
        repairController.getRepairByWashMachineCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/repair/getRepairStatusByRepair', function (req, res) {
        console.log('/repair/getRepairStatusByRepair', req.body)
        repairController.getRepairStatusByRepair(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   
}