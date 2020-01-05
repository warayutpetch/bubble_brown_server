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

Task.insertZone = async function insertZone(data, result) {
    var zone = await ZoneModel.insertZone(data);
    result(zone);
}

Task.getZoneByCol = async function getZoneByCol(data, result) {
    var zone = await ZoneModel.getZoneByCol(data);
    result(zone)
}

// Task.updateUserBy = async function updateUserBy(data, result) {
//     var user = await userModel.updateUserBy(data);
//     result(user);
// }

Task.deleteZoneByCode = async function deleteZoneByCode(data, result) {
    var zone = await ZoneModel.deleteZoneByCode(data);
    result(zone);
}

// Task.getUserByCode = async function getUserByCode(data, result) {
//     var user = await userModel.getUserByCode(data);
//     result(user);
// }
// Task.getUserLoginBy = async function getUserLoginBy(data, result) {
//     var user = await userModel.getUserLoginBy(data);
//     result(user);
// }

module.exports = Task;