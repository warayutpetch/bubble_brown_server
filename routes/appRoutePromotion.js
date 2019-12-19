var promotionController = require('../controllers/PromotionController');

module.exports = function (app) {

    app.post('/promotion/getPromotionBy', function (req, res) {
        console.log('/promotion/getPromotionBy', req.body)
        promotionController.getPromotionBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/promotion/getPromotionByCode', function (req, res) {
        console.log('/promotion/getPromotionByCode', req.body)
        promotionController.getPromotionByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    // app.post('/journal/getJournalByCol', function (req, res) {
    //     console.log('/journal/getJournalByCol', req.body)
    //     journalController.getCoverPageByCol(req.body, function (err, task) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.send(task);
    //     });
    // })
    app.post('/promotion/insertPromotion', function (req, res) {
        console.log('/promotion/insertPromotion', req.body)
        promotionController.insertPromotion(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/promotion/updatePromotion', function (req, res) {
        console.log('/promotion/updatePromotion', req.body)
        promotionController.updatePromotion(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/promotion/getPromotionByCode', function (req, res) {
        console.log('/promotion/getPromotionByCode', req.body)
        promotionController.getPromotionByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    // app.post('/journal/deleteCoverPage', function (req, res) {
    //     console.log('/journal/deleteCoverPage', req.body)
    //     journalController.deleteCoverPage(req.body, function (err, task) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.send(task);
    //     });
    // })
}