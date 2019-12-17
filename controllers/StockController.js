var StockModel = require('../models/StockModel');
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getStockBy = async function getStockBy(data, result) {
    var stock = await StockModel.getStockBy(data);
    result(stock);
}

Task.getSumStockBy = async function getSumStockBy(data, result) {
    var stock = await StockModel.getSumStockBy(data);
    result(stock);
}

Task.getStockByProduct = async function getStockByProduct(data, result) {
    var stock = await StockModel.getStockByProduct(data);
    result(stock);
}

Task.getStockMaxCode = async function getStockMaxCode(data, result) {
    var stock = await StockModel.getStockMaxCode(data);
    result(stock);
}

Task.insertStock = async function insertStock(data, result) {
    var stock = await StockModel.insertStock(data);
    result(stock);
}

Task.deleteStockByCode = async function deleteStockByCode(data, result) {
    var stock = await StockModel.deleteStockByCode(data);
    result(stock);
}

Task.updateStock = async function updateStock(data, result) {
    var stock = await StockModel.updateStock(data);
    result(stock);
}
Task.deleteByCode = async function deleteByCode(data, result) {
    var stock = await StockModel.deleteByCode(data);
    result(stock);
}
Task.getStockByCode = async function getStockByCode(data, result) {
    var stock = await StockModel.getStockByCode(data);
    result(stock);
}



module.exports = Task;