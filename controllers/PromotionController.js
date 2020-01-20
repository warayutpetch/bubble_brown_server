var promotionModel = require('../models/PromotionModel')
var timeController = require('../controllers/TimeController');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getPromotionBy = async function getPromotionBy(data, result) {
    var promotionList = await promotionModel.getPromotionBy(data);
    result(promotionList)
}

Task.getPromotionByCode = async function getPromotionByCode(data, result) {
    var promotionList = await promotionModel.getPromotionByCode(data);
    result(promotionList)
}

Task.getPromotionByPromotionCode = async function getPromotionByPromotionCode(data, result) {
    var promotionList = await promotionModel.getPromotionByPromotionCode(data);
    result(promotionList)
}

Task.insertPromotion = async function insertPromotion(data, result) {
    var promotionList = await promotionModel.insertPromotion(data);
    result(promotionList)
}

Task.getPromotionByCol = async function getPromotionByCol(data, result) {
    var promotionList = await promotionModel.getPromotionByCol(data);
    result(promotionList)
}

Task.updatePromotion = async function updatePromotion(data, result) {
    var promotionList = await promotionModel.updatePromotion(data);
    result(promotionList);
}

Task.getPromotionByDiscountCode = async function getPromotionByDiscountCode(data, result) {
    var promotionList = await promotionModel.getPromotionByDiscountCode(data);
    result(promotionList);
}

Task.getPromotionByCode = async function getPromotionByCode(data, result) {
    var promotionList = await promotionModel.getPromotionByCode(data);
    result(promotionList);
}

Task.deletePromotion = async function deletePromotion(data, result) {
    var promotionList = await promotionModel.deletePromotion(data);
    result(promotionList);
}

// Task.deletePromotion = async function deletePromotion(data, result) {
//     var set_data = {
//         deleted: 1,
//         // deleteby: data.member_code,
//         // deletedate: timeController.reformatToSave(new Date())
//     }
//     var set_where = {
//         promotion_code: data.promotion_code
//     }
//     var promotionList = await promotionModel.deletePromotion(set_data, set_where);
//     result(promotionList);
// }

module.exports = Task;  