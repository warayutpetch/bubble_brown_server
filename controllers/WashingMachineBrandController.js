var washingmachinebrandModel = require('../models/WashingMachineBrandModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineBrandBy = async function getWashingMachineBrandBy(data, result) {
    var washingmachinebrand = await washingmachinebrandModel.getWashingMachineBrandBy(data);
    result(washingmachinebrand);
}

Task.getWashingMachineBrandMaxCode = async function getWashingMachineBrandMaxCode(data, result) {
    var washingmachinebrand = await washingmachinebrandModel.getWashingMachineBrandMaxCode(data);
    result(washingmachinebrand);
}

Task.insertBrandBy = async function insertBrandBy(data, result) {
    var washingmachinebrand = await washingmachinebrandModel.insertBrandBy(data);
    result(washingmachinebrand);
}

Task.getBrandByCode = async function getBrandByCode(data, result) {
    var washingmachinebrand = await washingmachinebrandModel.getBrandByCode(data);
    result(washingmachinebrand);
}

Task.updateBrandBy = async function updateBrandBy(data, result) {
    var washingmachinebrand = await washingmachinebrandModel.updateBrandBy(data);
    result(washingmachinebrand);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var washingmachinebrand = await washingmachinebrandModel.deleteByCode(data);
    result(washingmachinebrand);
}


module.exports = Task;