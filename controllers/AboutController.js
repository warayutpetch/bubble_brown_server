var aboutModel = require('../models/AboutModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};




Task.getAboutByCode = async function getAboutByCode(data, result) {
    var about = await aboutModel.getAboutByCode(data);
    result(about);
}

Task.updateAboutBy = async function updateAboutBy(data, result) {
    var about = await aboutModel.updateAboutBy(data);
    result(about);
}

module.exports = Task;