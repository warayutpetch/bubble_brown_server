var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getBookingBy = function getBookingBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_booking WHERE deleted = 0 AND about_code = '" + data.about_code + "'";
        console.log(str);

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
}

Task.getBookingByCode = function getBookingByCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_booking "
            + " WHERE booking_code = '" + data.booking_code + "' ";

        console.log('checkLogin : ', str);

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

Task.insertBooking = function insertBooking(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_booking` ("
            + "`booking_code`,"
            + "`table_code`,"
            + "`about_code`,"
            + "`booking_firstname`,"
            + "`booking_lastname`,"
            + "`booking_tel`, "
            + "`booking_email`, "
            + "`booking_date`, "
            + "`booking_amount` "
            + ") VALUES ("
            + " '" + data.booking_code + "', "
            + " '" + data.table_code + "', "
            + " '" + data.about_code + "', "
            + " '" + data.booking_firstname + "', "
            + " '" + data.booking_lastname + "', "
            + " '" + data.booking_tel + "', "
            + " '" + data.booking_email + "', "
            + " '" + timeController.reformatTo(data.booking_date) + "', "
            + " '" + data.booking_amount + "' "
            + " ) "



        // console.log('checkLogin : ', str);

        sql.query(str, function (err, res) {

            if (err) {
                console.log("error: ", err);
                const require = {
                    data: false,
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: true,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
};



Task.getBookingMaxCode = function getBookingMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  IFNULL(LPAD( SUBSTRING(max(booking_code),3 ,7)+1,6, '0'),'000001') AS booking_max FROM `tb_booking` "


        console.log('checkLogin565664646 : ', str);

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



Task.checkBook = function checkBook(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM `tb_table` "
            + " LEFT JOIN tb_booking ON `tb_table`.`table_code` = tb_booking.table_code "
            + " WHERE table_amount = '" + data.table_amount + "'"
            + " AND tb_booking.booking_date = '" + timeController.reformatTo(data.booking_date) + "'"

        console.log('checkLogin565664646 : ', str);

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

Task.checkTable = function checkTable(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM `tb_table` "
            + " WHERE table_amount = '" + data.table_amount + "'"



        console.log('checkLogin565664646 : ', str);

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

Task.deleteBooking = function deleteBooking(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_booking` SET"
            // + "`order_list_code`= '" + data.order_list_code + "',"
            + "`deleted`= '1'"
            + "WHERE tb_booking.booking_code = '" + data.booking_code + "'";
        console.log("data:", data);

        sql.query(str, function (err, res) {
            if (err) {
                console.log("error: ", err);
                const require = {
                    data: false,
                    error: err,
                    query_result: false,
                    server_result: true
                };
                resolve(require);
            }
            else {
                const require = {
                    data: true,
                    error: [],
                    query_result: true,
                    server_result: true
                };
                resolve(require);
            }
        });
    });
}

module.exports = Task;