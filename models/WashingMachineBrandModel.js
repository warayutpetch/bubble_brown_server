var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineBrandBy = function getWashingMachineBrandBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_washing_machine_brand "
            + "ORDER BY tb_washing_machine_brand.washing_machine_brand_code ASC ";
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

Task.getWashingMachineBrandMaxCode = function getWashingMachineBrandMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(washing_machine_brand_code),4, 5)+1,3,'0') AS washing_machine_brand_code_max FROM `tb_washing_machine_brand` "; //insert usercode

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

Task.insertBrandBy = function insertBrandBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_washing_machine_brand` ("
            + "`washing_machine_brand_code`,"
            + "`washing_machine_brand_name`,"
            + "`washing_machine_brand_detail`"

            + ") VALUES ("
            + " '" + data.washing_machine_brand_code + "', "
            + " '" + data.washing_machine_brand_name + "', "
            + " '" + data.washing_machine_brand_detail + "' "
            + " ) "


        // console.log('checkLogin : ', data);
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

Task.getBrandByCode = function getBrandByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  *  FROM tb_washing_machine_brand "
            + "WHERE washing_machine_brand_code = '" + data.washing_machine_brand_code + "'";

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

Task.updateBrandBy = function updateBrandBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_washing_machine_brand` SET "
            + "`washing_machine_brand_code` = '" + data.washing_machine_brand_code + "',"
            + "`washing_machine_brand_name` = '" + data.washing_machine_brand_name + "',"
            + "`washing_machine_brand_detail` = '" + data.washing_machine_brand_detail + "'"
            + "WHERE tb_washing_machine_brand.washing_machine_brand_code = '" + data.washing_machine_brand_code + "'";


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
        var str = "DELETE FROM tb_washing_machine_brand WHERE washing_machine_brand_code = '" + data.washing_machine_brand_code + "'";//showdata editview

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