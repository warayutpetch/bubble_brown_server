var customerModel = require('../models/CustomerModel')
var timeController = require('./TimeController');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getCustomerBy = async function getCustomerBy(data, result) {
    var customerList = await customerModel.getCustomerBy();
    result(customerList)
}

Task.getCustomerMaxCode = async function getCustomerMaxCode(data, result) {
    var customerList = await customerModel.getCustomerMaxCode(data);
    result(customerList);
}

Task.insertCustomer = async function insertCustomer(data, result) {
    var customerList = await customerModel.insertCustomer(data);
    result(customerList)
}

// Task.getCoverPageByCol = async function getCoverPageByCol(data, result) {
//     var coverpageList = await journalModel.getJournalByCol(data);
//     result(coverpageList)
// }
// Task.updateCustomer = async function updateCustomer(data, result) {
//     var customerList = await customerModel.updateCustomer(data.set, data.where);
//     result(customerList);
// }

// Task.getCustomerByCode = async function getCustomerByCode(data, result) {
//     var customerList = await customerModel.getCustomerByCode(data);
//     result(customerList);
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