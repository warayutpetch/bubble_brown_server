var promotion_use_Model = require('../models/PromotionUseModel')
var timeController = require('../controllers/TimeController');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getPromotionUseBy = async function getPromotionUseBy(data, result) {
    var promotion_use_List = await promotion_use_Model.getPromotionUseBy();
    result(promotion_use_List)
}

// Task.getPromotionUseByCode = async function getPromotionUseByCode(data, result) {
//     var promotion_use_List = await promotion_use_Model.getPromotionUseByCode();
//     result(promotion_use_List)
// }

// Task.insertPromotion = async function insertPromotion(data, result) {
//     var promotionList = await promotionModel.insertPromotion(data);
//     result(promotionList)
// }

// // Task.getCoverPageByCol = async function getCoverPageByCol(data, result) {
// //     var coverpageList = await journalModel.getJournalByCol(data);
// //     result(coverpageList)
// // }
// Task.updatePromotion = async function updatePromotion(data, result) {
//     var promotionList = await promotionModel.updatePromotion(data.set, data.where);
//     result(promotionList);
// }

// Task.getPromotionByCode = async function getPromotionByCode(data, result) {
//     var promotionList = await promotionModel.getPromotionByCode(data);
//     result(promotionList);
// }

// Task.deleteCoverPage = async function deleteCoverPage(data, result) {
//     var set_data = {
//         deleted: 1,
//         deleteby: data.member_code,
//         deletedate: timeController.reformatToSave(new Date())
//     }
//     var set_where = {
//         journal_code: data.journal_code
//     }
//     var coverpageList = await journalModel.updateJournal(set_data, set_where);
//     result(coverpageList);
// }

module.exports = Task;  