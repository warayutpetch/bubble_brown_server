var entrepreneurModel = require('../models/EntrepreneurModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.checkEntrepreneurLogin = async function checkEntrepreneurLogin(data, result) {
    var entrepreneur = await entrepreneurModel.checkEntrepreneurLogin(data);
    result(entrepreneur);
}

Task.getEntrepreneurBy = async function getEntrepreneurBy(data, result) {
    var entrepreneur = await entrepreneurModel.getEntrepreneurBy(data);
    result(entrepreneur);
}

Task.getEntrepreneurrMaxCode = async function getEntrepreneurrMaxCode(data, result) {
    var entrepreneur = await entrepreneurModel.getEntrepreneurrMaxCode(data);
    result(entrepreneur);
}

Task.insertEntrepreneurBy = async function insertEntrepreneurBy(data, result) {
    var entrepreneur = await entrepreneurModel.insertEntrepreneurBy(data);
    result(entrepreneur);
}

Task.getEntrepreneurByCode = async function getEntrepreneurByCode(data, result) {
    var entrepreneur = await entrepreneurModel.getEntrepreneurByCode(data);
    result(entrepreneur);
}

Task.updateEntrepreneurBy = async function updateEntrepreneurBy(data, result) {
    var entrepreneur = await entrepreneurModel.updateEntrepreneurBy(data);
    result(entrepreneur);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var entrepreneur = await entrepreneurModel.deleteByCode(data);
    result(entrepreneur);
}

Task.updateNameBy = async function updateNameBy(data, result) {
    var entrepreneur = await entrepreneurModel.updateNameBy(data);
    result(entrepreneur);
}

Task.updateEmailBy = async function updateEmailBy(data, result) {
    var entrepreneur = await entrepreneurModel.updateEmailBy(data);
    result(entrepreneur);
}

Task.updatePhoneBy = async function updatePhoneBy(data, result) {
    var entrepreneur = await entrepreneurModel.updatePhoneBy(data);
    result(entrepreneur);
}

Task.updatePasswordBy = async function updatePasswordBy(data, result) {
    var entrepreneur = await entrepreneurModel.updatePasswordBy(data);
    result(entrepreneur);
}

Task.updateNameImg = async function updateNameImg(data, result) {
    var entrepreneur = await entrepreneurModel.updateNameImg(data);
    result(entrepreneur);
}

Task.ForgotPasswordEntrepreneurBy = async function ForgotPasswordEntrepreneurBy(data, result) {
    var entrepreneur = await entrepreneurModel.ForgotPasswordEntrepreneurBy(data);
    result(entrepreneur);
}

Task.updateForPasswordBy = async function updateForPasswordBy(data, result) {
    var entrepreneur = await entrepreneurModel.updateForPasswordBy(data);
    result(entrepreneur);
}


module.exports = Task;