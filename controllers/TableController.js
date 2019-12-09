var TableModel = require('../models/TableModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getTableBy = async function getTableBy(data, result) {
    var table = await TableModel.getTableBy(data);
    result(table);
}

Task.getTableByCode = async function getTableByCode(data, result) {
    var table = await TableModel.getTableByCode(data);
    result(table);
}



module.exports = Task;