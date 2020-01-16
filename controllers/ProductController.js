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

Task.getProductMaxCode = async function getProductMaxCode(data, result) {
    var product = await ProductModel.getProductMaxCode(data);
    result(product);
}

Task.insertProduct = async function insertProduct(data, result) {
    var product = await ProductModel.insertProduct(data);
    result(product);
}

Task.getProductByCode = async function getProductByCode(data, result) {
    var product = await ProductModel.getProductByCode(data);
    result(product);
}

Task.updateProduct = async function updateProduct(data, result) {
    var product = await ProductModel.updateProduct(data);
    result(product);
}

Task.deleteByCode = async function deleteByCode(data, result) {
    var product = await ProductModel.deleteByCode(data);
    result(product);
}

Task.getProductByType = async function getProductByType(data, result) {
    var product = await ProductModel.getProductByType(data);
    result(product);
}



module.exports = Task;