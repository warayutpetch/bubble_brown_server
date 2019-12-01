var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};


Task.getWashingProgramByMachineCode = function getWashingProgramByMachineCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * "
            + " FROM tb_washing_program "
            + " WHERE washing_machine_code = '" + data.washing_machine_code + "'"

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

Task.getWashingProgramByProgramCode = function getWashingProgramByProgramCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * "
            + " FROM tb_washing_program "
            + " WHERE washing_program_code = '" + data.washing_program_code + "'"

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


Task.updatePriceProgrameByCode = function updatePriceProgrameByCode(data) {
    return new Promise(function (resolve, reject) {
        console.log(data);

        var str = "  UPDATE `tb_washing_program` SET "
            + "`washing_program_price` = '" + data.washing_program_price + "',"
            + "`usability` = '" + data.usability + "'"
            + " WHERE `washing_program_code` = '" + data.washing_program_code + "'";

        // console.log('checkLogin : ', timeController.reformatTo(data.change_date));

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