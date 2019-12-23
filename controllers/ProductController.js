var ProductModel = require('../models/ProductModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getProductBy = async function getProductBy(data, result) {
    var product = await ProductModel.getProductBy(data);
    result(product);
}

Task.updateProductCost = async function updateProductCost(data, result) {
    var product = await ProductModel.updateProductCost(data);
    result(product);
}

module.exports = Task;