var adminModel = require('../models/AdminModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.checkAdminModelLogin = async function checkAdminModelLogin(data, result) {
    var admin = await adminModel.checkAdminModelLogin(data);
    result(admin);
}

Task.getAdminby = async function getAdminby(result) {
    var admin = await adminModel.getAdminby();
    result(admin);
}

Task.getAdminMaxCode = async function getAdminMaxCode(result) {
    var admin = await adminModel.getAdminMaxCode();
    result(admin);
}
Task.insertAdminBy = async function insertAdminBy(data, result) {
    var admin = await adminModel.insertAdminBy(data);
    result(admin);
}
Task.getAdminbyCode = async function getAdminbyCode(data, result) {
    var admin = await adminModel.getAdminbyCode(data);
    result(admin);
}
Task.updateAdminBy = async function updateAdminBy(data, result) {
    var admin = await adminModel.updateAdminBy(data);
    result(admin);
}
Task.deleteAdminBy = async function deleteAdminBy(data, result) {
    var admin = await adminModel.deleteAdminBy(data);
    result(admin);
}


module.exports = Task;