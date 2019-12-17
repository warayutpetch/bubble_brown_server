var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};



Task.getTableBy = function getTableBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM `tb_table`";


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

Task.getTableByZoneCode = function getTableByZoneCode(data) {
    return new Promise(function (resolve, reject) {//user list
        var str = "SELECT  * FROM tb_table as tb1"
            + " LEFT JOIN tb_zone as tb2 ON tb1.zone_id = tb2.zone_id "
            + " WHERE tb1.zone_id = '" + data.zone_id + "' ";

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
Task.getTableMaxCode = function getTableMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT IFNULL(LPAD( SUBSTRING(max(table_code),2 ,3)+1,2, '0'),'01') AS table_code_max FROM `tb_table` "; //insert usercode

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

Task.getTableByCode = function getTableByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  *  FROM tb_table "
            + "WHERE table_code = '" + data.table_code + "'";

        console.log('zzzzz : ', str);

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

Task.insertTable = function insertTable(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_table` ("
            + "`table_code`,"
            + "`table_name`,"
            + "`table_amount`,"
            + "`zone_id`"
           
            + ") VALUES ("
            + " '" + data.table_code + "', "
            + " '" + data.table_name + "', "
            + " '" + data.table_amount + "', "
            + " '" + data.zone_id + "' "
            + " ) "

console.log("strrrrrrrr",str);

        console.log('checkLogin : ', str);

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

Task.updateTebleBy = function updateTebleBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_table` SET "
            + "`table_code` = '" + data.table_code + "',"
            + "`table_name` = '" + data.table_name + "',"
            + "`table_amount` = '" + data.table_amount + "',"
            + "`zone_id` = '" + data.zone_id + "' "
            + "WHERE tb_table.table_code = '" + data.table_code + "'";


        // console.log('checkLogin : ', data);
        console.log('checkLogin : ', str);

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

Task.deleteByCode = function deleteByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "DELETE FROM tb_table WHERE table_code = '" + data.table_code + "'";//showdata editview

        console.log('checkLogin : ', str);

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





module.exports = Task;