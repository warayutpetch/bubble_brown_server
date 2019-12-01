var AboutController = require('../controllers/AboutController');

module.exports = function (app) {

   
    app.post('/about/getAboutByCode', function (req, res) {
        console.log('/about/getAboutByCode', req.body)
        AboutController.getAboutByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/about/updateAboutBy', function (req, res) {
        console.log('/about/updateAboutBy', req.body)
        AboutController.updateAboutBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   

}