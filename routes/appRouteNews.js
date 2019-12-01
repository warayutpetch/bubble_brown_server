var NewsController = require('../controllers/NewsController');

module.exports = function (app) {

    app.post('/news/getNewsBy', function (req, res) {
        console.log('/news/getNewsBy', req.body)
        NewsController.getNewsBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })
    app.post('/news/getNewsByEnterpreneur', function (req, res) {
        console.log('/news/getNewsByEnterpreneur', req.body)
        NewsController.getNewsByEnterpreneur(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/news/getNewsMaxCode', function (req, res) {
        console.log('/news/getNewsMaxCode', req.body)
        NewsController.getNewsMaxCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/news/insertNewsBy', function (req, res) {
        console.log('/news/insertNewsBy', req.body)
        NewsController.insertNewsBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/news/getNewsByCode', function (req, res) {
        console.log('/news/getNewsByCode', req.body)
        NewsController.getNewsByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/news/updateNewsBy', function (req, res) {
        console.log('/news/updateNewsBy', req.body)
        NewsController.updateNewsBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    app.post('/news/deleteByCode', function (req, res) {
        console.log('/news/deleteByCode', req.body)
        NewsController.deleteByCode(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

   
}