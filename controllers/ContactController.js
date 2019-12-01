var contactModel = require('../models/ContactModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getContactBy = async function getContactBy(data, result) {
    var contact = await contactModel.getContactBy(data);
    result(contact);
}

Task.getContactByCode = async function getContactByCode(data, result) {
    var contact = await contactModel.getContactByCode(data);
    result(contact);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var contact = await contactModel.deleteByCode(data);
    result(contact);
}


module.exports = Task;