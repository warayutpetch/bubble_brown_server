var UnitModel = require('../models/UnitModel');
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getUnitBy = async function getUnitBy(data, result) {
    var unit = await UnitModel.getUnitBy(data);
    result(unit);
}





module.exports = Task;