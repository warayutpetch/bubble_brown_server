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

Task.getOrderBy = async function getOrderBy(data, result) {
    var order = await OrderModel.getOrderBy(data);
    result(order);
}

Task.getOrderByCode = async function getOrderByCode(data, result) {
    var order = await OrderModel.getOrderByCode(data);
    result(order);
}

Task.getOrderByAboutCode = async function getOrderByAboutCode(data, result) {
    var order = await OrderModel.getOrderByAboutCode(data);
    result(order);
}

Task.getOrderByOrderCode = async function getOrderByOrderCode(data, result) {
    var order = await OrderModel.getOrderByOrderCode(data);
    result(order);
}

Task.updateOrderByCode = async function updateOrderByCode(data, result) {
    var order = await OrderModel.updateOrderByCode(data);
    result(order);
}

Task.getRecipeByMenu = async function getRecipeByMenu(data, result) {
    var order = await OrderModel.getRecipeByMenu(data);
    result(order);
}

Task.Payment = async function Payment(data, result) {
    var order = await OrderModel.Payment(data);
    result(order);
}

Task.updateConfirmOrder = async function updateConfirmOrder(data, result) {
    var order = await OrderModel.updateConfirmOrder(data);
    result(order);
}

Task.updateCencelOrder = async function updateCencelOrder(data, result) {
    var order = await OrderModel.updateCencelOrder(data);
    result(order);
}

Task.updateRevisedByCode = async function updateRevisedByCode(data, result) {
    var order = await OrderModel.updateRevisedByCode(data);
    result(order);
}

Task.getOrderRevisedNum = async function getOrderRevisedNum(data, result) {
    var order = await OrderModel.getOrderRevisedNum(data);
    result(order);
}


Task.getOrderByCusOld = async function getOrderByCusOld(data, result) {
    var order = await OrderModel.getOrderByCusOld(data);
    result(order);
}
module.exports = Task;