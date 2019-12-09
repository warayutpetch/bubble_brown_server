var ZoneModel = require('../models/ZoneModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};



Task.getZoneBy = async function getZoneBy(data, result) {
    var zone = await ZoneModel.getZoneBy(data);
    result(zone);
}

// Task.updateUserBy = async function updateUserBy(data, result) {
//     var user = await userModel.updateUserBy(data);
//     result(user);
// }

// Task.deleteByCode = async function deleteByCode(data, result) {
//     var user = await userModel.deleteByCode(data);
//     result(user);
// }

// Task.getUserByCode = async function getUserByCode(data, result) {
//     var user = await userModel.getUserByCode(data);
//     result(user);
// }
// Task.getUserLoginBy = async function getUserLoginBy(data, result) {
//     var user = await userModel.getUserLoginBy(data);
//     result(user);
// }

module.exports = Task;