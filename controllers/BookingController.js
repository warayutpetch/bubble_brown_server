var BookingModel = require('../models/BookingModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getBookingMaxCode = async function getBookingMaxCode(data, result) {
    var booking = await BookingModel.getBookingMaxCode(data);
    result(booking);
}

Task.insertBooking = async function insertBooking(data, result) {
    var booking = await BookingModel.insertBooking(data);
    result(booking);
}



module.exports = Task;