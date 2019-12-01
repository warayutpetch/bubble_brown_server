var washingmachinetypeModel = require('../models/WashingMachineTypeModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineTypeBy = async function getWashingMachineTypeBy(data, result) {
    var washingmachinetype = await washingmachinetypeModel.getWashingMachineTypeBy(data);
    result(washingmachinetype);
}


Task.getWashingMachineTypeMaxCode = async function getWashingMachineTypeMaxCode(data, result) {
    var washingmachinetype = await washingmachinetypeModel.getWashingMachineTypeMaxCode(data);
    result(washingmachinetype);
}

Task.insertTypeBy = async function insertTypeBy(data, result) {
    var washingmachinetype = await washingmachinetypeModel.insertTypeBy(data);
    result(washingmachinetype);
}

Task.getTypeByCode = async function getTypeByCode(data, result) {
    var washingmachinetype = await washingmachinetypeModel.getTypeByCode(data);
    result(washingmachinetype);
}

Task.updateTypeBy = async function updateTypeBy(data, result) {
    var washingmachinetype = await washingmachinetypeModel.updateTypeBy(data);
    result(washingmachinetype);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var washingmachinetype = await washingmachinetypeModel.deleteByCode(data);
    result(washingmachinetype);
}

module.exports = Task;