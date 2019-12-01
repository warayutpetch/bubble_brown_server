var laundryModel = require('../models/LaundryModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getLaundryBy = async function getLaundryBy(data, result) {
    var laundry = await laundryModel.getLaundryBy(data);
    result(laundry);
}

Task.getLaundryMaxCode = async function getLaundryMaxCode(data, result) {
    var laundry = await laundryModel.getLaundryMaxCode(data);
    result(laundry);
}

Task.insertLaundryBy = async function insertLaundryBy(data, result) {
    var laundry = await laundryModel.insertLaundryBy(data);
    result(laundry);
}

Task.getLaundryByCode = async function getLaundryByCode(data, result) {
    var laundry = await laundryModel.getLaundryByCode(data);
    result(laundry);
}

Task.updateLaundryBy = async function updateLaundryBy(data, result) {
    var laundry = await laundryModel.updateLaundryBy(data);
    result(laundry);
}

Task.updateLaundryAppBy = async function updateLaundryAppBy(data, result) {
    var laundry = await laundryModel.updateLaundryAppBy(data);
    result(laundry);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var laundry = await laundryModel.deleteByCode(data);
    result(laundry);
}

Task.getLaundryByEntrepreneurCode = async function getLaundryByEntrepreneurCode(data, result) {
    var laundry = await laundryModel.getLaundryByEntrepreneurCode(data);
    result(laundry);
}

Task.updateNameImg = async function updateNameImg(data, result) {
    var laundry = await laundryModel.updateNameImg(data);
    result(laundry);
}

module.exports = Task;