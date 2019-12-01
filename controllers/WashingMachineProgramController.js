var programModel = require('../models/WashingMachineProgramModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineProgramBy = async function getWashingMachineProgramBy(data, result) {
    var washingmachineprogram = await programModel.getWashingMachineProgramBy(data);
    result(washingmachineprogram);
}

Task.getWashingMachineProgramMaxCode = async function getWashingMachineProgramMaxCode(data, result) {
    var washingmachineprogram = await programModel.getWashingMachineProgramMaxCode(data);
    result(washingmachineprogram);
}

Task.insertProgramBy = async function insertProgramBy(data, result) {
    var washingmachineprogram = await programModel.insertProgramBy(data);
    result(washingmachineprogram);
}

Task.getProgramByCode = async function getProgramByCode(data, result) {
    var washingmachineprogram = await programModel.getProgramByCode(data);
    result(washingmachineprogram);
}

Task.updateProgramBy = async function updateProgramBy(data, result) {
    var washingmachineprogram = await programModel.updateProgramBy(data);
    result(washingmachineprogram);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var washingmachineprogram = await programModel.deleteByCode(data);
    result(washingmachineprogram);
}


module.exports = Task;