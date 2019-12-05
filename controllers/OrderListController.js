var OrderListModel = require('../models/OrderListModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getOrderListMaxCode = async function getOrderListMaxCode(data, result) {
    var order_list = await OrderListModel.getOrderListMaxCode(data);
    result(order_list);
}

Task.insertOrderList = async function insertOrderList(data, result) {
    var order_list = await OrderListModel.insertOrderList(data);
    result(order_list);
}

Task.getOrderListBy = async function getOrderListBy(data, result) {
    var order_list = await OrderListModel.getOrderListBy(data);
    result(order_list);
}

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