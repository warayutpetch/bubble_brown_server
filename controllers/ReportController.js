var reportModel = require('../models/ReportModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getReportSalesByDay = async function getReportSalesByDay(data, result) {
    var report = await reportModel.getReportSalesByDay(data);
    result(report);
}
Task.getReportSalesByMonth = async function getReportSalesByMonth(data, result) {
    var report = await reportModel.getReportSalesByMonth(data);
    result(report);
}

Task.getReportSalesByYear = async function getReportSalesByYear(data, result) {
    var report = await reportModel.getReportSalesByYear(data);
    result(report);
}

Task.getReportBestSalesByDay = async function getReportBestSalesByDay(data, result) {
    var report = await reportModel.getReportBestSalesByDay(data);
    result(report);
}

Task.getReportBestSalesByMonth = async function getReportBestSalesByMonth(data, result) {
    var report = await reportModel.getReportBestSalesByMonth(data);
    result(report);
}

Task.getReportBestSalesByYear = async function getReportBestSalesByYear(data, result) {
    var report = await reportModel.getReportBestSalesByYear(data);
    result(report);
}

// Task.getReportLaundryByEntrepreneur = async function getReportLaundryByEntrepreneur(data, result) {
//     var report = await reportModel.getReportLaundryByEntrepreneur(data);
//     result(report);
// }

// Task.getReportLaundryDayByEntrepreneur = async function getReportLaundryDayByEntrepreneur(data, result) {
//     var report = await reportModel.getReportLaundryDayByEntrepreneur(data);
//     result(report);
// }

// Task.getReportLaundryDayByLaundry = async function getReportLaundryDayByLaundry(data, result) {
//     var report = await reportModel.getReportLaundryDayByLaundry(data);
//     result(report);
// }

// Task.getReportLaundryMonthByLaundry = async function getReportLaundryMonthByLaundry(data, result) {
//     var report = await reportModel.getReportLaundryMonthByLaundry(data);
//     result(report);
// }

// Task.getReportLaundryYearByLaundry = async function getReportLaundryYearByLaundry(data, result) {
//     var report = await reportModel.getReportLaundryYearByLaundry(data);
//     result(report);
// }

// Task.getReportMachineByLaundry = async function getReportMachineByLaundry(data, result) {
//     var report = await reportModel.getReportMachineByLaundry(data);
//     result(report);
// }

// Task.getReportMachineDayByLaundry = async function getReportMachineDayByLaundry(data, result) {
//     var report = await reportModel.getReportMachineDayByLaundry(data);
//     result(report);
// }

// Task.getReportCustomerByDay = async function getReportCustomerByDay(data, result) {
//     var report = await reportModel.getReportCustomerByDay(data);
//     result(report);
// }

// Task.getReportCustomerByMonth = async function getReportCustomerByMonth(data, result) {
//     var report = await reportModel.getReportCustomerByMonth(data);
//     result(report);
// }

// Task.getReportCustomerByYear = async function getReportCustomerByYear(data, result) {
//     var report = await reportModel.getReportCustomerByYear(data);
//     result(report);
// }



module.exports = Task;