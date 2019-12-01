var userModel = require('../models/UserModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getUserBy = async function getUserBy(data, result) {
    var user = await userModel.getUserBy(data);
    result(user);
}

Task.getUserMaxCode = async function getUserMaxCode(data, result) {
    var user = await userModel.getUserMaxCode(data);
    result(user);
}

Task.insertUserBy = async function insertUserBy(data, result) {
    var user = await userModel.insertUserBy(data);
    result(user);
}

Task.updateUserBy = async function updateUserBy(data, result) {
    var user = await userModel.updateUserBy(data);
    result(user);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var user = await userModel.deleteByCode(data);
    result(user);
}

Task.getUserByCode = async function getUserByCode(data, result) {
    var user = await userModel.getUserByCode(data);
    result(user);
}
Task.getUserLoginBy = async function getUserLoginBy(data, result) {
    var user = await userModel.getUserLoginBy(data);
    result(user);
}

module.exports = Task;