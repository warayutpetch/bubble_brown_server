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
    app.post('/promotion/getPromotionByPromotionCode', function (req, res) {
        console.log('/promotion/getPromotionByPromotionCode', req.body)
        promotionController.getPromotionByPromotionCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/promotion/getPromotionByCol', function (req, res) {
        console.log('/promotion/getPromotionByCol', req.body)
        promotionController.getPromotionByCol(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
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
    app.post('/promotion/getPromotionByDiscountCode', function (req, res) {
        console.log('/promotion/getPromotionByDiscountCode', req.body)
        promotionController.getPromotionByDiscountCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/promotion/deletePromotion', function (req, res) {
        console.log('/promotion/deletePromotion', req.body)
        promotionController.deletePromotion(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
    app.post('/promotion/getProductByFont', function (req, res) {
        console.log('/promotion/getProductByFont', req.body)
        promotionController.getProductByFont(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}