var ProductTypeModel = require('../models/ProductTypeModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getProductTypeBy = async function getProductTypeBy(data, result) {
    var product_type = await ProductTypeModel.getProductTypeBy(data);
    result(product_type);
}

Task.getProductTypeByCol = async function getProductTypeByCol(data, result) {
    var product_type = await ProductTypeModel.getProductTypeByCol(data);
    result(product_type)
}

Task.insertProductType = async function insertProductType(data, result) {
    var product_type = await ProductTypeModel.insertProductType(data);
    result(product_type);
}

Task.updateProductType = async function updateProductType(data, result) {
    var product_type = await ProductTypeModel.updateProductType(data.set, data.where);
    result(product_type)
}

Task.deleteProductTypeByCode = async function deleteProductTypeByCode(data, result) {
    var product_type = await ProductTypeModel.deleteProductTypeByCode(data);
    result(product_type);
}

module.exports = Task;