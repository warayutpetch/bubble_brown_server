var settingModel = require('../models/SettingModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};




Task.getSettingByCode = async function getSettingByCode(data, result) {
    var setting = await settingModel.getSettingByCode(data);
    result(setting);
}

Task.updateSettingBy = async function updateSettingBy(data, result) {
    var setting = await settingModel.updateSettingBy(data);
    result(setting);
}

module.exports = Task;