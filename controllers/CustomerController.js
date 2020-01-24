var customerModel = require('../models/CustomerModel')
var timeController = require('./TimeController');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getCustomerBy = async function getCustomerBy(data, result) {
    var customerList = await customerModel.getCustomerBy(data);
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
Task.updateCustomerByCode = async function updateCustomerByCode(data, result) {
    var customerList = await customerModel.updateCustomerByCode(data);
    result(customerList);
}

Task.getCustomerByCode = async function getCustomerByCode(data, result) {
    var customerList = await customerModel.getCustomerByCode(data);
    result(customerList);
}

Task.deleteCustomerByCode = async function deleteCustomerByCode(data, result) {
    var customerList = await customerModel.deleteCustomerByCode(data);
    result(customerList);
}

Task.getCustomerByEmail = async function getCustomerByEmail(data, result) {
    var customerList = await customerModel.getCustomerByEmail(data);
    result(customerList);
}

Task.getCustomerById = async function getCustomerById(data, result) {
    var customerList = await customerModel.getCustomerById(data);
    result(customerList);
}

Task.ChangName = async function ChangName(data, result) {
    var customerList = await customerModel.ChangName(data);
    result(customerList);
}

Task.getCustomerByCusId = async function getCustomerByCusId(data, result) {
    var customerList = await customerModel.getCustomerByCusId(data);
    result(customerList);
}

Task.ChangeEmail = async function ChangeEmail(data, result) {
    var customerList = await customerModel.ChangeEmail(data);
    result(customerList);
}

Task.ChangeTel = async function ChangeTel(data, result) {
    var customerList = await customerModel.ChangeTel(data);
    result(customerList);
}


// Task.deleteCustomerByCode = async function deleteCustomerByCode(data, result) {
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