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

Task.updateOrderList = async function updateOrderList(data, result) {
    var order_list = await OrderListModel.updateOrderList(data);
    result(order_list);
}
Task.getOrderListByOrderCode = async function getOrderListByOrderCode(data, result) {
    var order_list = await OrderListModel.getOrderListByOrderCode(data);
    result(order_list);
}

Task.deleteOrderListByCode = async function deleteOrderListByCode(data, result) {
    var order_list = await OrderListModel.deleteOrderListByCode(data);
    result(order_list);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var order_list = await OrderListModel.deleteByCode(data);
    result(order_list);
}

Task.updateRevisedListByCode = async function updateRevisedListByCode(data, result) {
    var order_list = await OrderListModel.updateRevisedListByCode(data);
    result(order_list);
}
Task.getOrderListOldBy = async function getOrderListOldBy(data, result) {
    var order_list = await OrderListModel.getOrderListOldBy(data);
    result(order_list);
}

// Task.getUserByCode = async function getUserByCode(data, result) {
//     var user = await userModel.getUserByCode(data);
//     result(user);
// }
// Task.getUserLoginBy = async function getUserLoginBy(data, result) {
//     var user = await userModel.getUserLoginBy(data);
//     result(user);
// }

module.exports = Task;