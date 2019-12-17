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

    // app.post('/promotion_use/getPromotionUseByCode', function (req, res) {
    //     console.log('/promotion_use/getPromotionUseByCode', req.body)
    //     promotionuseController.getPromotionUseByCode(req.body, function (err, task) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.send(task);
    //     });
    // })
}