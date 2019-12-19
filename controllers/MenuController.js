var MenuModel = require('../models/MenuModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getMenuBy = async function getMenuBy(data, result) {
    var menu = await MenuModel.getMenuBy(data);
    result(menu);
}
Task.getMenuByCode = async function getMenuByCode(data, result) {
    var menu = await MenuModel.getMenuByCode(data);
    result(menu);
}

Task.insertMenu = async function insertMenu(data, result) {
    var menu = await menuModel.insertMenu(data);
    result(menu);
}

Task.getMenuMaxCode = async function getMenuMaxCode(data, result) {
    var menu = await menuModel.getMenuMaxCode(data);
    result(menu);
}

Task.deleteMenuByCode = async function deleteMenuByCode(data, result) {
    var menu = await menuModel.deleteMenuByCode(data);
    result(menu);
}



// Task.updateMenuBy = async function updateMenuBy(data, result) {
//     var menu = await menuModel.updateMenuBy(data);
//     result(menu);
// }

// Task.deleteByCode = async function deleteByCode(data, result) {
//     var menu = await menuModel.deleteByCode(data);
//     result(menu);
// }

// Task.getMenuByCode = async function getMenuByCode(data, result) {
//     var menu = await menuModel.getMenuByCode(data);
//     result(menu);
// }
// Task.getMenuLoginBy = async function getMenuLoginBy(data, result) {
//     var menu = await menuModel.getMenuLoginBy(data);
//     result(menu);
// }

module.exports = Task;