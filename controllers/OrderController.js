var OrderModel = require('../models/OrderModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getOrderMaxCode = async function getOrderMaxCode(data, result) {
    var order = await OrderModel.getOrderMaxCode(data);
    result(order);
}

Task.insertOrder = async function insertOrder(data, result) {
    var order = await OrderModel.insertOrder(data);
    result(order);
}

// Task.insertUserBy = async function insertUserBy(data, result) {
//     var user = await userModel.insertUserBy(data);
//     result(user);
// }

// Task.updateUserBy = async function updateUserBy(data, result) {
//     var user = await userModel.updateUserBy(data);
//     result(user);
// }

// Task.deleteByCode = async function deleteByCode(data, result) {
//     var user = await userModel.deleteByCode(data);
//     result(user);
// }

// Task.getUserByCode = async function getUserByCode(data, result) {
//     var user = await userModel.getUserByCode(data);
//     result(user);
// }
// Task.getUserLoginBy = async function getUserLoginBy(data, result) {
//     var user = await userModel.getUserLoginBy(data);
//     result(user);
// }

module.exports = Task;