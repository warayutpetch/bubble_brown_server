var MenuTypeModel = require('../models/MenuTypeModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getMenuTypeBy = async function getMenuTypeBy(data, result) {
    var menutype = await MenuTypeModel.getMenuTypeBy(data);
    result(menutype);
}

Task.getMenuTypeByCol = async function getMenuTypeByCol(data, result) {
    var menutype = await MenuTypeModel.getMenuTypeByCol(data);
    result(menutype)
}

Task.insertMenuType = async function insertMenuType(data, result) {
    var menutype = await MenuTypeModel.insertMenuType(data);
    result(menutype);
}

Task.updateMenuType = async function updateMenuType(data, result) {
    var menutype = await MenuTypeModel.updateMenuType(data.set, data.where);
    result(menutype)
}

Task.deleteMenuTypeByCode = async function deleteMenuTypeByCode(data, result) {
    var menutype = await MenuTypeModel.deleteMenuTypeByCode(data);
    result(menutype);
}

module.exports = Task;