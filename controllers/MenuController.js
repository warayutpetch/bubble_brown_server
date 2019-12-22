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
Task.getMenuByMenuCode = async function getMenuByMenuCode(data, result) {
    var menu = await MenuModel.getMenuByMenuCode(data);
    result(menu);
}

Task.insertMenu = async function insertMenu(data, result) {
    var menu = await MenuModel.insertMenu(data);
    result(menu);
}

Task.getMenuMaxCode = async function getMenuMaxCode(data, result) {
    var menu = await MenuModel.getMenuMaxCode(data);
    result(menu);
}

Task.deleteMenuByCode = async function deleteMenuByCode(data, result) {
    var menu = await MenuModel.deleteMenuByCode(data);
    result(menu);
}


Task.updateMenuByCode = async function updateMenuByCode(data, result) {
    var menu = await MenuModel.updateMenuByCode(data);
    result(menu);
}

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