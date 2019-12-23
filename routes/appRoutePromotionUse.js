var promotionuseController = require('../controllers/PromotionUseController');

module.exports = function (app) {

    app.post('/promotion_use/getPromotionUseBy', function (req, res) {
        console.log('/promotion_use/getPromotionUseBy', req.body)
        promotionuseController.getPromotionUseBy(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/promotion_use/insertPromotionUse', function (req, res) {
        console.log('/promotion_use/insertPromotionUse', req.body)
        promotionuseController.insertPromotionUse(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })

    app.post('/promotion_use/updatePromotionUseByCode', function (req, res) {
        console.log('/promotion_use/updatePromotionUseByCode', req.body)
        promotionuseController.updatePromotionUseByCode(req.body, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.send(task);
        });
    })
}