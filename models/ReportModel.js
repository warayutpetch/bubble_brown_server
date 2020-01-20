var sql = require('./BaseModel');
const Config = require('../globals/Config');
const timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

//DAY
//ตารางหลัก
Task.getReportSalesByDay = function getReportSalesByDay(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT TIME_FORMAT(tb_payment.payment_time, '%H:00') AS payment_time,"
            + " DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%d/%m/%Y') AS payment_date,"
            + " SUM(tb_payment.payment_sum) AS total_payment"
            + " FROM tb_payment "
            + " WHERE payment_date = '" + timeController.reformatTo(data.payment_date) + "'"
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY TIME_FORMAT(payment_time, '%H')"
        console.log("str:", str);


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

//MONTH
//ตารางหลัก
Task.getReportSalesByMonth = function getReportSalesByMonth(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT tb_payment.payment_time,"
            + " DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%d/%m/%Y') AS month,"
            + " DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%Y-%m-%d') AS date,"
            + " SUM(tb_payment.payment_sum) AS total_payment"
            + " FROM tb_payment"
            + " WHERE STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') >= STR_TO_DATE('" + timeController.reformatTo(data.start_month) + "','%Y-%m-%d') "
            + " AND STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') <= STR_TO_DATE('" + timeController.reformatTo(data.end_month) + "','%Y-%m-%d') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d')"

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

//YEAR
Task.getReportSalesByYear = function getReportSalesByYear(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d'), '%M') AS year,"
            + " DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d'), '%Y-%m-%d') AS month,"
            + " SUM(tb_payment.payment_sum) AS total_payment"
            + " FROM tb_payment "
            + " WHERE STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') >= STR_TO_DATE('" + timeController.reformatTo(data.start_year) + "','%Y-%m-%d')"
            + " AND STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') <= STR_TO_DATE('" + timeController.reformatTo(data.end_year) + "','%Y-%m-%d')"
            // + " AND about_code = '" + data.about_code + "'"           
            + " GROUP BY STR_TO_DATE(tb_payment.payment_date, '%Y-%m')"

        console.log("str:", str);


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

//Cost - DAY
Task.getCostSalesByDay = function getCostSalesByDay(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_stock_out.product_cost * tb_stock_out.product_qty * tb_stock_out.menu_qty) AS cost"
            + " FROM tb_stock_out "
            + " LEFT JOIN tb_payment ON tb_payment.order_code = tb_stock_out.order_code"
            + " WHERE tb_payment.payment_date = '" + timeController.reformatTo(data.payment_date) + "'"
            + " AND TIME_FORMAT(tb_payment.payment_time , '%H') = TIME_FORMAT('" + data.payment_time + "' , '%H')"
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY TIME_FORMAT(payment_time, '%H')"
        console.log("str:", str);


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
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

//Cost - MONTH
Task.getCostSalesByMonth = function getCostSalesByMonth(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_stock_out.product_cost * tb_stock_out.product_qty * tb_stock_out.menu_qty) AS cost"
            + " FROM tb_stock_out "
            + " LEFT JOIN tb_payment ON tb_payment.order_code = tb_stock_out.order_code"
            + " WHERE STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') = STR_TO_DATE('" + data.payment_date + "','%d/%m/%Y') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d')"

        console.log("str:", str);


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
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

//Cost - YEAR
Task.getCostSalesByYear = function getCostSalesByYear(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_stock_out.product_cost * tb_stock_out.product_qty * tb_stock_out.menu_qty) AS cost"
            + " FROM tb_stock_out "
            + " LEFT JOIN tb_payment ON tb_payment.order_code = tb_stock_out.order_code"
            + " WHERE DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'), '%Y-%m') = DATE_FORMAT(STR_TO_DATE('" + data.payment_date + "','%Y-%m-%d'),'%Y-%m')"
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY STR_TO_DATE(tb_payment.payment_date, '%Y-%m')"

        console.log("str:", str);


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
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};


//DAY
//ตารางย่อย
Task.getTableReportSalesByDay = function getTableReportSalesByDay(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT tb_order_list.order_list_name,"
            + " SUM(tb_order_list.order_list_qty) AS qty,"
            + " tb_order_list.order_list_price_qty AS perunit,"
            + " tb_payment.payment_time,"
            + " tb_order_list.menu_code,"
            + " DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%d/%m/%Y') AS payment_date,"
            + " SUM(tb_order_list.order_list_price_sum_qty) AS total_payment"
            + " FROM tb_order_list "
            + " LEFT JOIN tb_payment ON tb_payment.order_code = tb_order_list.order_code"
            + " WHERE STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d ') = STR_TO_DATE('" + data.payment_date + "', '%d/%m/%Y ')"
            + " AND TIME_FORMAT(tb_payment.payment_time,'%H:%i:%s') >= TIME_FORMAT('" + data.payment_time + "','%H:00:00') "
            + " AND TIME_FORMAT(tb_payment.payment_time,'%H:%i:%s') <= TIME_FORMAT('" + data.payment_time + "','%H:59:59') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY tb_order_list.menu_code"
        console.log("str:", str);


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


//MONTH
//ตารางย่อย
Task.getTableReportSalesByMonth = function getTableReportSalesByMonth(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT tb_order_list.order_list_name,"
            + " SUM(tb_order_list.order_list_qty) AS qty,"
            + " tb_order_list.order_list_price_qty AS perunit,"
            + " tb_order_list.menu_code,"
            + " DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%d/%m/%Y') AS payment_date,"
            + " SUM(tb_order_list.order_list_price_sum_qty) AS total_payment"
            + " FROM tb_order_list"
            + " LEFT JOIN tb_payment ON tb_payment.order_code = tb_order_list.order_code"
            + " WHERE STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') = STR_TO_DATE('" + data.month + "','%d/%m/%Y') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY tb_order_list.menu_code"
        console.log("str:", str);


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

//YEAR
//ตารางย่อย
Task.getTableReportSalesByYear = function getTableReportSalesByYear(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%d/%m/%Y') AS month, "
            + " SUM(tb_payment.payment_sum) AS total_payment"
            + " FROM tb_payment "
            + " WHERE DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%Y-%m') = DATE_FORMAT(STR_TO_DATE('" + data.month + "','%Y-%m-%d'),'%Y-%m') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d') "
        console.log("str:", str);


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

//ตารางย่อย
//Cost - DAY
Task.getTableCostSalesByDay = function getTableCostSalesByDay(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_stock_out.product_cost * tb_stock_out.product_qty * tb_stock_out.menu_qty) AS cost"
            + " FROM tb_stock_out"
            + " LEFT JOIN tb_payment ON tb_stock_out.order_code = tb_payment.order_code"
            + " WHERE tb_stock_out.menu_code = '" + data.menu_code + "'"
            + " AND STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d ') = STR_TO_DATE('" + data.payment_date + "', '%d/%m/%Y ')"
            + " AND TIME_FORMAT(tb_payment.payment_time,'%H:%i:%s') >= TIME_FORMAT('" + data.payment_time + "','%H:00:00') "
            + " AND TIME_FORMAT(tb_payment.payment_time,'%H:%i:%s') <= TIME_FORMAT('" + data.payment_time + "','%H:59:59') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY tb_stock_out.menu_code"
        console.log("str:", str);



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
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

//ตารางย่อย
//Cost - MONTH
Task.getTableCostSalesByMonth = function getTableCostSalesByMonth(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_stock_out.product_cost * tb_stock_out.product_qty * tb_stock_out.menu_qty) AS cost"
            + " FROM tb_stock_out"
            + " LEFT JOIN tb_payment ON tb_stock_out.order_code = tb_payment.order_code"
            + " WHERE  tb_stock_out.menu_code = '" + data.menu_code + "'"
            + " AND STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') >= STR_TO_DATE('" + data.payment_date + "','%Y-%m-%d') "
            + " AND STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') <= STR_TO_DATE('" + data.payment_date + "','%Y-%m-%d') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY tb_stock_out.menu_code"
        console.log("str:", str);

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
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};


//ตารางย่อย
//Cost - YEAR
Task.getTableCostSalesByYear = function getTableCostSalesByYear(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_stock_out.product_cost * tb_stock_out.product_qty * tb_stock_out.menu_qty) AS cost"
            + " FROM tb_stock_out"
            + " LEFT JOIN tb_payment ON tb_stock_out.order_code = tb_payment.order_code"
            + " WHERE STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d ') = STR_TO_DATE('" + data.payment_date + "', '%d/%m/%Y ')"
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY STR_TO_DATE(tb_payment.payment_date, '%Y-%m-%d')"

        console.log("str:", str);



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
                    data: res[0],
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};

//สินค้าขายดี
Task.getReportBestSalesByDay = function getReportBestSalesByDay(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_order_list.order_list_qty) as total_order,"
            + " tb_order_list.order_list_name,"
            + " TIME_FORMAT(tb_payment.payment_time, '%H:00') AS payment_time,"
            + " DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%d/%m/%Y') AS payment_date"
            + " FROM tb_payment "
            + " LEFT JOIN tb_order ON tb_payment.order_code = tb_order.order_code "
            + " LEFT JOIN tb_order_list ON tb_order.order_code = tb_order_list.order_code "
            + " WHERE tb_payment.payment_date = '" + timeController.reformatTo(data.payment_date) + "'"
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY tb_order_list.order_list_name "
            + " ORDER BY SUM(tb_order_list.order_list_qty) DESC LIMIT 5"
        console.log("str:", str);


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

Task.getReportBestSalesByMonth = function getReportBestSalesByMonth(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_order_list.order_list_qty) as total_order, tb_order_list.order_list_name, DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%d') AS month "
            + " FROM tb_payment "
            + " LEFT JOIN tb_order ON tb_payment.order_code = tb_order.order_code "
            + " LEFT JOIN tb_order_list ON tb_order.order_code = tb_order_list.order_code "
            + " WHERE STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') >= STR_TO_DATE('" + timeController.reformatTo(data.start_month) + "','%Y-%m-%d') "
            + " AND STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') <= STR_TO_DATE('" + timeController.reformatTo(data.end_month) + "','%Y-%m-%d') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY tb_order_list.order_list_name "
            + " ORDER BY SUM(tb_order_list.order_list_qty) DESC LIMIT 5"
        console.log("str:", str);


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
Task.getReportBestSalesByYear = function getReportBestSalesByYear(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT SUM(tb_order_list.order_list_qty) as total_order, tb_order_list.order_list_name, DATE_FORMAT(STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d'),'%M') AS year "
            + " FROM tb_payment "
            + " LEFT JOIN tb_order ON tb_payment.order_code = tb_order.order_code "
            + " LEFT JOIN tb_order_list ON tb_order.order_code = tb_order_list.order_code "
            + " WHERE STR_TO_DATE(tb_payment.payment_date,'%Y-%m') >= STR_TO_DATE('" + timeController.reformatTo(data.start_year) + "','%Y-%m') "
            + " AND STR_TO_DATE(tb_payment.payment_date,'%Y-%m') <= STR_TO_DATE('" + timeController.reformatTo(data.end_year) + "','%Y-%m') "
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY tb_order_list.order_list_name "
            + " ORDER BY SUM(tb_order_list.order_list_qty) DESC LIMIT 5"
        console.log("str:", str);


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

Task.getReportSalesByType = function getReportSalesByType(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT tb_order_list.order_list_name,"
            + " SUM(tb_order_list.order_list_qty) AS qty,"
            + " tb_order_list.order_list_price_qty AS perunit,"
            + " tb_payment.payment_time,"
            + " tb_menu_type.menu_type_name,"
            + " tb_payment.payment_date"
            + " FROM tb_order_list "
            + " LEFT JOIN tb_payment ON tb_payment.order_code = tb_order_list.order_code"
            + " LEFT JOIN tb_menu ON tb_menu.menu_code = tb_order_list.menu_code"
            + " LEFT JOIN tb_menu_type ON tb_menu_type.menu_type_id = tb_menu.menu_type_id"
            + " WHERE tb_menu.menu_type_id "
            // + " WHERE tb_menu.menu_type_id = '" + data.menu_type_id + "'"
            + " AND STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') >= STR_TO_DATE('" + timeController.reformatTo(data.start_date) + "','%Y-%m-%d')"
            + " AND STR_TO_DATE(tb_payment.payment_date,'%Y-%m-%d') <= STR_TO_DATE('" + timeController.reformatTo(data.end_date) + "','%Y-%m-%d')"
            // + " AND about_code = '" + data.about_code + "'"
            + " GROUP BY tb_order_list.menu_code"
            + " ORDER BY SUM(tb_order_list.order_list_qty) DESC"
        console.log("str:", str);


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


// Task.getReportLaundryByEntrepreneur = function getReportLaundryByEntrepreneur(data) {
//     return new Promise(function (resolve, reject) {

//         var str = "SELECT tb_laundry.laundry_code,tb_laundry.laundry_name_th AS laundry , SUM(payment_net) AS total_payment , washing_process_date"
//             + "  FROM tb_washing_process "
//             + "  LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
//             + "  LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
//             + "  LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + "  WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
//             + "  AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
//             + "  AND  tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
//             + "  GROUP BY tb_laundry.laundry_name_th "

//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportLaundryDayByEntrepreneur = function getReportLaundryDayByEntrepreneur(data) {
//     return new Promise(function (resolve, reject) {

//         var str = "SELECT tb_laundry.laundry_code,tb_laundry.laundry_name_th AS laundry , SUM(payment_net) AS total_payment , washing_process_date"
//             + "  FROM tb_washing_process "
//             + "  LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
//             + "  LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
//             + "  LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + "  WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
//             + "  AND  tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
//             + "  GROUP BY tb_laundry.laundry_name_th "

//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportLaundryDayByLaundry = function getReportLaundryDayByLaundry(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  time_start ,SUM(payment_net) AS total_payment "
//             + " FROM tb_washing_process"
//             + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code"
//             + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code"
//             + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "', '%d-%m-%Y %H:%i:%s')"
//             + " AND   tb_laundry.laundry_code = '" + data.laundry_code + "'"
//             + " GROUP BY  TIME_FORMAT(time_start, '%H')"

//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportLaundryMonthByLaundry = function getReportLaundryMonthByLaundry(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date),'-',DAY(washing_process_date)) AS monthlaundry , SUM(payment_net) AS total_payment"
//             + " FROM tb_washing_process "
//             + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
//             + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code "
//             + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
//             + " AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
//             + " AND tb_laundry.laundry_code = '" + data.laundry_code + "'"
//             + " GROUP BY (STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s'))"

//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportLaundryYearByLaundry = function getReportLaundryYearByLaundry(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date))AS yearlaundry, SUM(payment_net)  AS total_payment"
//             + " FROM tb_washing_process "
//             + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
//             + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code "
//             + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
//             + " AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
//             + " AND tb_laundry.laundry_code = '" + data.laundry_code + "'"
//             + " GROUP BY MONTH(washing_process_date)"

//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportMachineByLaundry = function getReportMachineByLaundry(data) {
//     return new Promise(function (resolve, reject) {

//         var str = "SELECT tb_washing_machine.washing_machine_name AS machine , SUM(payment_net) AS total_payment , washing_process_date"
//             + "  FROM tb_washing_process "
//             + "  LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
//             + "  LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
//             + "  LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + "  WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
//             + "  AND STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "','%d-%m-%Y %H:%i:%s')"
//             + "  AND  tb_laundry.laundry_code = '" + data.laundry_code + "'"
//             + "  GROUP BY tb_washing_machine.washing_machine_name "


//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportMachineDayByLaundry = function getReportMachineDayByLaundry(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT tb_washing_machine.washing_machine_name AS machine , SUM(payment_net) AS total_payment , washing_process_date"
//             + "  FROM tb_washing_process "
//             + "  LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code "
//             + "  LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code =  tb_washing_machine.washing_machine_code"
//             + "  LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + "  WHERE STR_TO_DATE(washing_process_date,'%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "','%d-%m-%Y %H:%i:%s') "
//             + "  AND  tb_laundry.laundry_code = '" + data.laundry_code + "'"
//             + "  GROUP BY tb_washing_machine.washing_machine_name "

//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportCustomerByDay = function getReportCustomerByDay(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  time_start ,COUNT(user_code) AS total_customer "
//             + " FROM tb_washing_process"
//             + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code"
//             + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code"
//             + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') = STR_TO_DATE('" + data.date_start + "', '%d-%m-%Y %H:%i:%s')"
//             + " AND   tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
//             + " GROUP BY  TIME_FORMAT(time_start, '%H')"
//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportCustomerByMonth = function getReportCustomerByMonth(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT  CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date),'-',DAY(washing_process_date)) AS monthcustomer  ,COUNT(user_code) AS total_customer "
//             + " FROM tb_washing_process"
//             + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code"
//             + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code"
//             + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "', '%d-%m-%Y %H:%i:%s')"
//             + " AND STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "', '%d-%m-%Y %H:%i:%s')"
//             + " AND   tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
//             + "GROUP BY(STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s'))"

//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };

// Task.getReportCustomerByYear = function getReportCustomerByYear(data) {
//     return new Promise(function (resolve, reject) {
//         var str = "SELECT CONCAT(YEAR(washing_process_date),'-',MONTH(washing_process_date))AS yearcustomer ,COUNT(user_code) AS total_customer "
//             + " FROM tb_washing_process"
//             + " LEFT JOIN tb_payment ON tb_washing_process.payment_code = tb_payment.payment_code"
//             + " LEFT JOIN tb_washing_machine ON tb_washing_process.washing_machine_code = tb_washing_machine.washing_machine_code"
//             + " LEFT JOIN tb_laundry ON tb_washing_machine.laundry_code = tb_laundry.laundry_code"
//             + " WHERE STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') >= STR_TO_DATE('" + data.date_start + "', '%d-%m-%Y %H:%i:%s')"
//             + " AND STR_TO_DATE(washing_process_date, '%Y-%m-%d %H:%i:%s') <= STR_TO_DATE('" + data.date_end + "', '%d-%m-%Y %H:%i:%s')"
//             + " AND   tb_laundry.entrepreneur_code = '" + data.entrepreneur_code + "'"
//             + " GROUP BY MONTH(washing_process_date)"

//         console.log("str::", str);


//         sql.query(str, function (err, res) {

//             if (err) {
//                 console.log("error: ", err);
//                 const require = {
//                     data: [],
//                     error: err,
//                     query_result: false,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//             else {
//                 const require = {
//                     data: res,
//                     error: [],
//                     query_result: true,
//                     server_result: true
//                 };
//                 resolve(require);
//             }
//         });
//     });
// };



module.exports = Task;