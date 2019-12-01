var washing_programModel = require('../models/WashingProgramModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingProgramByMachineCode = async function getWashingProgramByMachineCode(data, result) {
    var program = await washing_programModel.getWashingProgramByMachineCode(data);
    result(program);
}
Task.getWashingProgramByProgramCode = async function getWashingProgramByProgramCode(data, result) {
    var program = await washing_programModel.getWashingProgramByProgramCode(data);
    result(program);
}
Task.updatePriceProgrameByCode = async function updatePriceProgrameByCode(data, result) {
    var program = await washing_programModel.updatePriceProgrameByCode(data);
    result(program);
}



module.exports = Task;