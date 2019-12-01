var washing_machineModel = require('../models/WashingMachineModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineMaxCode = async function getWashingMachineMaxCode(data, result) {
    var washing_machine = await washing_machineModel.getWashingMachineMaxCode(data);
    result(washing_machine);
}

Task.insertWashingMachineByCode = async function insertWashingMachineByCode(data, result) {
    var washing_machine = await washing_machineModel.insertWashingMachineByCode(data);
    result(washing_machine);
}

Task.getWashingMachineBy = async function getWashingMachineBy(data, result) {
    var washing_machine = await washing_machineModel.getWashingMachineBy(data);
    result(washing_machine);
}

Task.getWashingMachineByLaundryCode = async function getWashingMachineByLaundryCode(data, result) {
    var washing_machine = await washing_machineModel.getWashingMachineByLaundryCode(data);
    result(washing_machine);
}

Task.updateWashingMachineByCode = async function updateWashingMachineByCode(data, result) {
    var washing_machine = await washing_machineModel.updateWashingMachineByCode(data);
    result(washing_machine);
}

Task.getWashingMachineByCode = async function getWashingMachineByCode(data, result) {
    var washing_machine = await washing_machineModel.getWashingMachineByCode(data);
    result(washing_machine);
}

module.exports = Task;