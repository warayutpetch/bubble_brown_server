var addressModel = require('../models/AddressModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.getProvinceBy = async function getProvinceBy(data, result) {
    var admin = await addressModel.getProvinceBy(data);
    result(admin);
}

Task.getAmphurInfoByProviceID = async function getAmphurInfoByProviceID(data, result) {
    var admin = await addressModel.getAmphurInfoByProviceID(data);
    result(admin);
}

Task.getDistrictInfoByAmphurID = async function getDistrictInfoByAmphurID(data, result) {
    var admin = await addressModel.getDistrictInfoByAmphurID(data);
    result(admin);
}

Task.getZipcodeByDistrictID = async function getZipcodeByDistrictID(data, result) {
    var admin = await addressModel.getZipcodeByDistrictID(data);
    result(admin);
}

module.exports = Task;