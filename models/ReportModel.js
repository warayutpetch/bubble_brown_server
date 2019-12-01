var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.getReportSalesByDay = function getReportSalesByDay(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  time_start ,SUM(payment_net) AS total_payment "
            + " FROM tb_washing_process "
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + " AND  tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
            + "  GROUP BY  TIME_FORMAT(time_start, '%H')"
        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};


Task.getReportSalesByMonth = function getReportSalesByMonth(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date),'-',DAY(washing_process_date)) AS monthsales , SUM(payment_net) AS total_payment "
            + " FROM tb_washing_process "
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + " AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
            + " AND  tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
            + " GROUP BY (STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s')) "



        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportSalesByYear = function getReportSalesByYear(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date))AS yearsales,SUM(payment_net)  AS total_payment "
            + " FROM tb_washing_process "
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + " AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
            + " AND  tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
            + " GROUP BY MONTH(washing_process_date) "

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportLaundryByEntrepreneur = function getReportLaundryByEntrepreneur(data) {
    return new Promise(function (resolve, reject) {

        var str = "SELECT tb_laundry.laundry_code,tb_laundry.laundry_name_th AS laundry , SUM(payment_net) AS total_payment , washing_process_date"
            + "  FROM tb_washing_process "
            + "  LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + "  LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
            + "  LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + "  WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + "  AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
            + "  AND  tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
            + "  GROUP BY tb_laundry.laundry_name_th "

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportLaundryDayByEntrepreneur = function getReportLaundryDayByEntrepreneur(data) {
    return new Promise(function (resolve, reject) {

        var str = "SELECT tb_laundry.laundry_code,tb_laundry.laundry_name_th AS laundry , SUM(payment_net) AS total_payment , washing_process_date"
            + "  FROM tb_washing_process "
            + "  LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + "  LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
            + "  LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + "  WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + "  AND  tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
            + "  GROUP BY tb_laundry.laundry_name_th "

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportLaundryDayByLaundry = function getReportLaundryDayByLaundry(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  time_start ,SUM(payment_net) AS total_payment "
            + " FROM tb_washing_process"
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code"
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code"
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "', '%d-%m-%Y %H:%i:%s')"
            + " AND   tb_laundry.laundry_code = '" + data.laundry_code + "'"
            + " GROUP BY  TIME_FORMAT(time_start, '%H')"

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportLaundryMonthByLaundry = function getReportLaundryMonthByLaundry(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date),'-',DAY(washing_process_date)) AS monthlaundry , SUM(payment_net) AS total_payment"
            + " FROM tb_washing_process "
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code "
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + " AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
            + " AND tb_laundry.laundry_code = '" + data.laundry_code + "'"
            + " GROUP BY (STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s'))"

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportLaundryYearByLaundry = function getReportLaundryYearByLaundry(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date))AS yearlaundry, SUM(payment_net)  AS total_payment"
            + " FROM tb_washing_process "
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code "
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + " AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
            + " AND tb_laundry.laundry_code = '" + data.laundry_code + "'"
            + " GROUP BY MONTH(washing_process_date)"

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportMachineByLaundry = function getReportMachineByLaundry(data) {
    return new Promise(function (resolve, reject) {

        var str = "SELECT tb_washing_machine.washing_machine_name AS machine , SUM(payment_net) AS total_payment , washing_process_date"
            + "  FROM tb_washing_process "
            + "  LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + "  LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
            + "  LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + "  WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + "  AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
            + "  AND  tb_laundry.laundry_code = '" + data.laundry_code + "'"
            + "  GROUP BY tb_washing_machine.washing_machine_name "


        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportMachineDayByLaundry = function getReportMachineDayByLaundry(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT tb_washing_machine.washing_machine_name AS machine , SUM(payment_net) AS total_payment , washing_process_date"
            + "  FROM tb_washing_process "
            + "  LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
            + "  LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
            + "  LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + "  WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
            + "  AND  tb_laundry.laundry_code = '" + data.laundry_code + "'"
            + "  GROUP BY tb_washing_machine.washing_machine_name "

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportCustomerByDay = function getReportCustomerByDay(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  time_start ,COUNT(user_code) AS total_customer "
            + " FROM tb_washing_process"
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code"
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code"
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "', '%d-%m-%Y %H:%i:%s')"
            + " AND   tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
            + " GROUP BY  TIME_FORMAT(time_start, '%H')"
        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportCustomerByMonth = function getReportCustomerByMonth(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date),'-',DAY(washing_process_date)) AS monthcustomer  ,COUNT(user_code) AS total_customer "
            + " FROM tb_washing_process"
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code"
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code"
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "', '%d-%m-%Y %H:%i:%s')"
            + " AND STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "', '%d-%m-%Y %H:%i:%s')"
            + " AND   tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
            + "GROUP BY(STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s'))"

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

Task.getReportCustomerByYear = function getReportCustomerByYear(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date))AS yearcustomer ,COUNT(user_code) AS total_customer "
            + " FROM tb_washing_process"
            + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code"
            + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code"
            + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
            + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "', '%d-%m-%Y %H:%i:%s')"
            + " AND STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "', '%d-%m-%Y %H:%i:%s')"
            + " AND   tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
            + " GROUP BY MONTH(washing_process_date)"

        console.log("str::", str);


        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: [],
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: res,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};



module.exports = Task;