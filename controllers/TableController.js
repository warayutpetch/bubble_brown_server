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

// Task.insertTable = async function insertTable(data, result) {
//     var table = await TableModel.insertTable(data);
//     result(table);
// }



module.exports = Task;