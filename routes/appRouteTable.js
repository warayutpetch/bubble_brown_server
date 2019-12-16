var TableController = require('../controllers/TableController');

module.exports = function (app) {

    app.post('/table/getTableBy', function (req, res) {
        console.log('/table/getTableBy', req.body)
        TableController.getTableBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/table/getTableByZoneCode', function (req, res) {
        console.log('/table/getTableByZoneCode', req.body)
        TableController.getTableByZoneCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/table/getTableByCode', function (req, res) {
        console.log('/table/getTableByCode', req.body)
        TableController.getTableByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/table/updateTebleBy', function (req, res) {
        console.log('/table/updateTebleBy', req.body)
        TableController.updateTebleBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/table/deleteByCode', function (req, res) {
        console.log('/table/deleteByCode', req.body)
        TableController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   

    
   
}