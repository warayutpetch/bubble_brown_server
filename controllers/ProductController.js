var ProductModel = require('../models/ProductModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getProductBy = async function getProductBy(data, result) {
    var product = await ProductModel.getProductBy(data);
    result(product);
}

// Task.insertOrder = async function insertOrder(data, result) {
//     var order = await OrderModel.insertOrder(data);
//     result(order);
// }

// Task.getOrderBy = async function getOrderBy(data, result) {
//     var order = await OrderModel.getOrderBy(data);
//     result(order);
// }

// Task.getOrderByCode = async function getOrderByCode(data, result) {
//     var order = await OrderModel.getOrderByCode(data);
//     result(order);
// }

// Task.updateOrderByCode = async function updateOrderByCode(data, result) {
//     var order = await OrderModel.updateOrderByCode(data);
//     result(order);
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