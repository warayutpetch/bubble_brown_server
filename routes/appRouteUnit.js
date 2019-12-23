var UnitController = require('../controllers/UnitController');

module.exports = function (app) {

    app.post('/unit/getUnitBy', function (req, res) {
        console.log('/unit/getUnitBy', req.body)
        UnitController.getUnitBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   

  
}