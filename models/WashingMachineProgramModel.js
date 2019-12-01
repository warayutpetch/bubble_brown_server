var sql = require('./BaseModel');
const Config = require('../globals/Config');
var timeController = require('../controllers/TimeController');


const _config = new Config();

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getWashingMachineProgramBy = function getWashingMachineProgramBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  * FROM tb_washing_machine_generation_program "
        + " LEFT JOIN tb_washing_machine_generation ON `tb_washing_machine_generation_program`.`washing_machine_generation_code` = tb_washing_machine_generation.washing_machine_generation_code "
        + "ORDER BY tb_washing_machine_generation_program.program_code ASC ";
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

Task.getWashingMachineProgramMaxCode = function getWashingMachineProgramMaxCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  LPAD( SUBSTRING(max(program_code),3, 4)+1,2,'0') AS program_code_max FROM `tb_washing_machine_generation_program` "; //insert usercode

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

Task.insertProgramBy = function insertProgramBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "INSERT INTO `tb_washing_machine_generation_program` ("
            + "`program_code`,"
            + "`program_name`,"
            + "`program_price`,"
            + "`program_time`,"
            + "`description`,"
            + "`washing_machine_generation_code`"
            + ") VALUES ("
            + " '" + data.program_code + "', "
            + " '" + data.program_name + "', "
            + " '" + data.program_price + "', "
            + " '" + data.program_time + "', "
            + " '" + data.description + "', "
            + " '" + data.washing_machine_generation_code + "' "
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

Task.getProgramByCode = function getProgramByCode(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT  *  FROM tb_washing_machine_generation_program "
            + "WHERE program_code = '" + data.program_code + "'";

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

Task.updateProgramBy = function updateProgramBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "UPDATE `tb_washing_machine_generation_program` SET "
            + "`program_code` = '" + data.program_code + "',"
            + "`program_name` = '" + data.program_name + "',"
            + "`program_price` = '" + data.program_price + "',"
            + "`program_time` = '" + data.program_time + "',"
            + "`description` = '" + data.description + "',"
            + "`washing_machine_generation_code` = '" + data.washing_machine_generation_code + "'"
            + "WHERE tb_washing_machine_generation_program.program_code = '" + data.program_code + "'";


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
        var str = "DELETE FROM tb_washing_machine_generation_program WHERE program_code = '" + data.program_code + "'";//showdata editview

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