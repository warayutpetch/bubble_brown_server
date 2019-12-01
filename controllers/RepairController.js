var repairModel = require('../models/RepairModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getRepairBy = async function getRepairBy(data, result) {
    var repair = await repairModel.getRepairBy(data);
    result(repair);
}

Task.getRepairByCode = async function getRepairByCode(data, result) {
    var repair = await repairModel.getRepairByCode(data);
    result(repair);
}

Task.updateRepairBy = async function updateRepairBy(data, result) {
    var repair = await repairModel.updateRepairBy(data);
    result(repair);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var repair = await repairModel.deleteByCode(data);
    result(repair);
}

Task.getRepairStatusBy = async function getRepairStatusBy(data, result) {
    var repair = await repairModel.getRepairStatusBy(data);
    result(repair);
}

Task.updateRepairStatusBy = async function updateRepairStatusBy(data, result) {
    var repair = await repairModel.updateRepairStatusBy(data);
    result(repair);
}

Task.getRepairByWashMachineCode = async function getRepairByWashMachineCode(data, result) {
    var repair = await repairModel.getRepairByWashMachineCode(data);
    result(repair);
}

Task.getRepairStatusByRepair = async function getRepairStatusByRepair(data, result) {
    var repair = await repairModel.getRepairStatusByRepair(data);
    result(repair);
}


module.exports = Task;