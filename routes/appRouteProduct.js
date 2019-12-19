var ProductController = require('../controllers/ProductController');

module.exports = function (app) {

    app.post('/product/getProductBy', function (req, res) {
        console.log('/product/getProductBy', req.body)
        ProductController.getProductBy(req.body, function (err, task) {

            if (err) {
                res.send(err);
            }
            // console.log('res', task);
            res.send(task);
        });
    })

    // app.post('/laundry/getLaundryMaxCode', function (req, res) {
    //     console.log('/laundry/getLaundryMaxCode', req.body)
    //     laundryController.getLaundryMaxCode(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/laundry/insertLaundryBy', function (req, res) {
    //     console.log('/laundry/insertLaundryBy', req.body)
    //     laundryController.insertLaundryBy(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/laundry/getLaundryByCode', function (req, res) {
    //     console.log('/laundry/getLaundryByCode', req.body)
    //     laundryController.getLaundryByCode(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/laundry/updateLaundryBy', function (req, res) {
    //     console.log('/laundry/updateLaundryBy', req.body)
    //     laundryController.updateLaundryBy(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/laundry/updateLaundryAppBy', function (req, res) {
    //     console.log('/laundry/updateLaundryAppBy', req.body)
    //     laundryController.updateLaundryAppBy(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/laundry/deleteByCode', function (req, res) {
    //     console.log('/laundry/deleteByCode', req.body)
    //     laundryController.deleteByCode(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/laundry/getLaundryByEntrepreneurCode', function (req, res) {
    //     console.log('/laundry/getLaundryByEntrepreneurCode', req.body)
    //     laundryController.getLaundryByEntrepreneurCode(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

    // app.post('/laundry/updateNameImg', function (req, res) {
    //     console.log('/laundry/updateNameImg', req.body)
    //     laundryController.updateNameImg(req.body, function (err, task) {

    //         if (err) {
    //             res.send(err);
    //         }
    //         // console.log('res', task);
    //         res.send(task);
    //     });
    // })

}