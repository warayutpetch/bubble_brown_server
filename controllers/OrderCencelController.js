var OrderCencelModel = require('../models/OrderCencelModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getOrderCencelBy = async function getOrderCencelBy(data, result) {
    var ordercencel = await OrderCencelModel.getOrderCencelBy(data);
    result(ordercencel);
}



module.exports = Task;