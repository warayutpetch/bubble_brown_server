var StockOutModel = require('../models/StockOutModel');
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.insertStockOutByOrder = async function insertStockOutByOrder(data, result) {
    var stockout = await StockOutModel.insertStockOutByOrder(data);
    result(stockout);
}

Task.deleteStockOutByOrderCode = async function deleteStockOutByOrderCode(data, result) {
    var stockout = await StockOutModel.deleteStockOutByOrderCode(data);
    result(stockout);
}


module.exports = Task;