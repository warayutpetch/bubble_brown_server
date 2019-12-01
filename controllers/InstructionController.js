var instructionModelModel = require('../models/InstructionModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getInstructionBy = async function getInstructionBy(data, result) {
    var instruction = await instructionModelModel.getInstructionBy(data);
    result(instruction);
}

Task.getInstructionMaxCode = async function getInstructionMaxCode(data, result) {
    var instruction = await instructionModelModel.getInstructionMaxCode(data);
    result(instruction);
}

Task.insertInstructionBy = async function insertInstructionBy(data, result) {
    var instruction = await instructionModelModel.insertInstructionBy(data);
    result(instruction);
}

Task.getInstructionByCode = async function getInstructionByCode(data, result) {
    var instruction = await instructionModelModel.getInstructionByCode(data);
    result(instruction);
}

Task.updateInstructionBy = async function updateInstructionBy(data, result) {
    var instruction = await instructionModelModel.updateInstructionBy(data);
    result(instruction);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var instruction = await instructionModelModel.deleteByCode(data);
    result(instruction);
}

module.exports = Task;