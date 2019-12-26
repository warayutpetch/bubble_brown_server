var PaymentModel = require('../models/PaymentModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.insertPayment = async function insertPayment(data, result) {
    var payment= await PaymentModel.insertPayment(data);
    result(payment);
}



module.exports = Task;