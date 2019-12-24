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


module.exports = Task;