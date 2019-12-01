var generationModel = require('../models/WashingMachineGenerationModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineGenerationBy = async function getWashingMachineGenerationBy(data, result) {
    var washingmachinegeneration = await generationModel.getWashingMachineGenerationBy(data);
    result(washingmachinegeneration);
}

Task.getWashingMachineGenerationMaxCode = async function getWashingMachineGenerationMaxCode(data, result) {
    var washingmachinegeneration = await generationModel.getWashingMachineGenerationMaxCode(data);
    result(washingmachinegeneration);
}

Task.insertGenerationBy = async function insertGenerationBy(data, result) {
    var washingmachinegeneration = await generationModel.insertGenerationBy(data);
    result(washingmachinegeneration);
}

Task.getGenerationByCode = async function getGenerationByCode(data, result) {
    var washingmachinegeneration = await generationModel.getGenerationByCode(data);
    result(washingmachinegeneration);
}

Task.updateGenerationBy = async function updateGenerationBy(data, result) {
    var washingmachinegeneration = await generationModel.updateGenerationBy(data);
    result(washingmachinegeneration);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var washingmachinegeneration = await generationModel.deleteByCode(data);
    result(washingmachinegeneration);
}


module.exports = Task;