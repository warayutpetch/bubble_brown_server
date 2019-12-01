var newsModel = require('../models/NewsModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getNewsBy = async function getNewsBy(data, result) {
    var news = await newsModel.getNewsBy(data);
    result(news);
}

Task.getNewsByEnterpreneur = async function getNewsByEnterpreneur(data, result) {
    var news = await newsModel.getNewsByEnterpreneur(data);
    result(news);
}

Task.getNewsMaxCode = async function getNewsMaxCode(data, result) {
    var news = await newsModel.getNewsMaxCode(data);
    result(news);
}

Task.insertNewsBy = async function insertNewsBy(data, result) {
    var news = await newsModel.insertNewsBy(data);
    result(news);
}

Task.getNewsByCode = async function getNewsByCode(data, result) {
    var news = await newsModel.getNewsByCode(data);
    result(news);
}

Task.updateNewsBy = async function updateNewsBy(data, result) {
    var news = await newsModel.updateNewsBy(data);
    result(news);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var news = await newsModel.deleteByCode(data);
    result(news);
}

module.exports = Task;