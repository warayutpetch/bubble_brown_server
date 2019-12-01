var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineGenerationBy = function getWashingMachineGenerationBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_washing_machine_generation "
        + " LEFT JOIN tb_washing_machine_brand ON `tb_washing_machine_generation`.`washing_machine_brand_code` = tb_washing_machine_brand.washing_machine_brand_code "
        + " LEFT JOIN tb_washing_machine_type ON `tb_washing_machine_generation`.`washing_machine_type_code` = tb_washing_machine_type.washing_machine_type_code "
        + "ORDER BY tb_washing_machine_generation.washing_machine_generation_code ASC ";
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

Task.getWashingMachineGenerationMaxCode = function getWashingMachineGenerationMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(washing_machine_generation_code),4, 5)+1,3,'0') AS washing_machine_generation_code_max FROM `tb_washing_machine_generation` "; //insert usercode

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

Task.insertGenerationBy = function insertGenerationBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_washing_machine_generation` ("
            + "`washing_machine_generation_code`,"
            + "`washing_machine_generation_name`,"
            + "`washing_machine_brand_code`,"
            + "`washing_machine_type_code`"
            + ") VALUES ("
            + " '" + data.washing_machine_generation_code + "', "
            + " '" + data.washing_machine_generation_name + "', "
            + " '" + data.washing_machine_brand_code + "', "
            + " '" + data.washing_machine_type_code + "' "
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

Task.getGenerationByCode = function getGenerationByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  *  FROM tb_washing_machine_generation "
            + "WHERE washing_machine_generation_code = '" + data.washing_machine_generation_code + "'";

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

Task.updateGenerationBy = function updateGenerationBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_washing_machine_generation` SET "
            + "`washing_machine_generation_code` = '" + data.washing_machine_generation_code + "',"
            + "`washing_machine_generation_name` = '" + data.washing_machine_generation_name + "',"
            + "`washing_machine_brand_code` = '" + data.washing_machine_brand_code + "',"
            + "`washing_machine_type_code` = '" + data.washing_machine_type_code + "'"
            + "WHERE tb_washing_machine_generation.washing_machine_generation_code = '" + data.washing_machine_generation_code + "'";


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
        var str = "DELETE FROM tb_washing_machine_generation WHERE washing_machine_generation_code = '" + data.washing_machine_generation_code + "'";//showdata editview

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