var aboutModel = require('../models/AboutModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.checkAboutLogin = async function checkAboutLogin(data, result) {
    var about = await aboutModel.checkAboutLogin(data);
    result(about);
}

Task.getAboutBy = async function getAboutBy(data, result) {
    var about = await aboutModel.getAboutBy(data);
    result(about);
}

Task.getAboutrMaxCode = async function getAboutrMaxCode(data, result) {
    var about = await aboutModel.getAboutrMaxCode(data);
    result(about);
}

Task.insertAboutBy = async function insertAboutBy(data, result) {
    var about = await aboutModel.insertAboutBy(data);
    result(about);
}

Task.getAboutByCol = async function getAboutByCol(data, result) {
    var about = await aboutModel.getAboutByCol(data);
    result(about);
}

Task.getAboutByCode = async function getAboutByCode(data, result) {
    var about = await aboutModel.getAboutByCode(data);
    result(about);
}

Task.updateAboutBy = async function updateAboutBy(data, result) {
    var about = await aboutModel.updateAboutBy(data);
    result(about);
}

Task.updateAboutMainBranchByCode = async function updateAboutMainBranchByCode(data, result) {
    var about = await aboutModel.updateAboutMainBranchByCode(data);
    result(about);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var about = await aboutModel.deleteByCode(data);
    result(about);
}

Task.updateNameBy = async function updateNameBy(data, result) {
    var about = await aboutModel.updateNameBy(data);
    result(about);
}

Task.updateEmailBy = async function updateEmailBy(data, result) {
    var about = await aboutModel.updateEmailBy(data);
    result(about);
}

Task.updatePhoneBy = async function updatePhoneBy(data, result) {
    var about = await aboutModel.updatePhoneBy(data);
    result(about);
}

Task.updatePasswordBy = async function updatePasswordBy(data, result) {
    var about = await aboutModel.updatePasswordBy(data);
    result(about);
}

Task.updateNameImg = async function updateNameImg(data, result) {
    var about = await aboutModel.updateNameImg(data);
    result(about);
}

Task.ForgotPasswordAboutBy = async function ForgotPasswordAboutBy(data, result) {
    var about = await aboutModel.ForgotPasswordAboutBy(data);
    result(about);
}

Task.updateForPasswordBy = async function updateForPasswordBy(data, result) {
    var about = await aboutModel.updateForPasswordBy(data);
    result(about);
}

Task.deleteAbout = async function deleteAbout(data, result) {
    var about = await aboutModel.deleteAbout(data);
    result(about);
}

module.exports = Task;